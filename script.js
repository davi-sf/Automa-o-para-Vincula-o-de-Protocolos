document.getElementById('gerarTexto').addEventListener('click', function () {
    const nome = document.getElementById('nomeCliente').value;
    const telefone = document.getElementById('telefoneCliente').value;
    const codigo = document.getElementById('codigoCliente').value;
    const email = document.getElementById('emailCliente').value;
    const opcao = document.getElementById('opcao').value;
    const incluirNome = document.getElementById('checkboxNome').checked;
    const incluirTelefone = document.getElementById('checkboxTelefone').checked;
    const incluirCodigo = document.getElementById('checkboxCodigo').checked;
    const incluirMotivo = document.getElementById('checkboxMotivo').checked;
    const incluirEmail = document.getElementById('checkboxEmail').checked;
    const incluirObservacao = document.getElementById('checkboxObservacao').checked;
    const observacao = document.getElementById('textoObservacao').value;

    let texto = '';

    if (incluirNome) {
        texto += `Nome: ${nome}\n`;
    }

    if (incluirTelefone) {
        texto += `Telefone: ${telefone}\n`;
    }

    if (incluirCodigo) {
        texto += `Código do Cliente: ${codigo}\n`;
    }

    if (incluirEmail) {
        texto += `E-mail do Cliente: ${email}\n`;
    }

    if (incluirMotivo) {
        texto += `Motivo: `;
        switch (opcao) {
            case 'OCORRENCIA TECNICA - NOTA EM ABERTO':
                texto += `${nome} ligou para verificar nota de serviço gerada em sistema. Passada a previsão de atendimento, e orientado a aguardar.\n`;
                break;
            case 'FALTA DE ENERGIA INDIVIDUAL':
                texto += `${nome} entra em contato para informar falta de energia individual. Já foi verificado os disjuntores, nenhum problema aparente ou indício de curto.\n`;
                break;
            case 'FALTA DE ENERGIA GERAL - SEM MOTIVO':
                texto += `${nome} liga para informar falta de energia geral. Não sabe informar nenhum motivo aparente. Solicitação gerada e passada previsão. Confirmado livre acesso.\n`;
                break;
            case 'FALTA DE ENERGIA GERAL - TRANSFORMADOR':
                texto += `${nome} liga para informar falta de energia geral. Relata ter escutado um barulho e diz ser estouro de transformador. Solicitação gerada e passada previsão. Confirmado livre acesso.\n`;
                break;
            case 'RELIGACAO GERAR':
                texto += `${nome} entra em contato para solicitar a religação da sua unidade. Foi confirmado o pagamento dos débitos. Cliente ciente das taxas e informações passadas durante a ligação. Passado prazo do serviço.\n`;
                break;
            case 'Acompanhamento de Religação':
                texto += `${nome} entra em contato para acompanhar uma solicitação de religação. Foi passado prazo do serviço, orientado a aguardar.\n`;
                break;
            case '2 VIA NAO ENVIADO':
                texto += `${nome} solicita segunda via de sua fatura, porém no momento só está sendo verbalizado o código de barras. Cliente não quis, encaminhado para os canais digitais.\n`;
                break;
            case 'CODIGO DE BARRAS':
                texto += `${nome} solicitou o código de barras da fatura (). Foi verbalizado para o mesmo.\n`;
                break;
            case 'CONSULTA DE DEBITOS':
                texto += `${nome} liga para consultar faturas em aberto. Foram informados valores e vencimentos e indicado a consulta digital.\n`;
                break;
            case 'ANALISE DE FATURAMENTO':
                texto += `${nome} liga para contestar os valores da sua fatura, pois não concorda com os mesmos. Feita a análise de faturamento, verificado que a leitura foi tirada corretamente e o seu consumo está na média. Não concordou com a argumentação e então foi aberta recl. 1º Nível.\n`;
                break;
            case 'PARCELAMENTO REALIZADO':
                texto += `${nome} deseja realizar parcelamento. Feita confirmação de dados LGPD e realizada negociação por boleto. Entrada: parcelas: .\n`;
                break;
            case 'NAO E TITULAR':
                texto += `${nome} deseja realizar parcelamento. Titular da unidade não estava presente, orientado a realizar negociação no site.\n`;
                break;
            case 'ENTRADA NAO CHEGOU':
                texto += `${nome} informa que realizou um parcelamento, porém a entrada não chegou em seu e-mail, caso repassado para o supervisor.\n`;
                break;
            case 'DIVERSOS':
                break;
            case 'FIO PARTIDO':
                texto += `${nome} relata fio partido. Foi orientado a se afastar e a equipe técnica foi acionada para avaliação e reparo.\n`;
                break;
            default:
                texto = 'Selecione uma opção válida.';
        }

        if (incluirObservacao && observacao) {
            texto += `Observação: ${observacao}\n`;
        }

        alert(texto);
        sessionStorage.setItem('copiarTexto', texto);

        const textoGerado = document.getElementById('textoGerado');
        textoGerado.value = texto;
        textoGerado.removeAttribute('readonly');
        textoGerado.classList.add('mostrar');
    }
});

document.getElementById('copiarTexto').addEventListener('click', function () {
    const texto = sessionStorage.getItem('copiarTexto');
    if (texto) {
        navigator.clipboard.writeText(texto)
            .then(() => alert('Texto copiado para a área de transferência!'))
            .catch(() => alert('Erro ao copiar texto.'));
    } else {
        alert('Não há texto para copiar.');
    }
});

document.getElementById('limparFormulario').addEventListener('click', function () {
    document.getElementById('solicitacaoForm').reset();
    const textoGerado = document.getElementById('textoGerado');
    textoGerado.value = '';
    textoGerado.classList.remove('mostrar');
});

const checkboxObservacao = document.getElementById('checkboxObservacao');
const observacao = document.querySelector('.observacao');

checkboxObservacao.addEventListener('change', function () {
    observacao.style.display = this.checked ? 'block' : 'none';
});