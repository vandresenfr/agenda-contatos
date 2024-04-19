const form = document.getElementById ('form-agencia-numerica');
const inputNome = document.getElementById ('nome');
const inputNumero = document.getElementById ('numero');
let linhas = '';
const mensagemFinal = (`Obrigado pelo contato <b>${inputNome.value}</b>, assim que surgir uma oportunidade entraremos em contato.`);
const nomes = [];
const numeros = [];

form.addEventListener ('submit', function(e){
    e.preventDefault();

    atualizaTabela();
    validaAdicionar();
    atualizaTabela();
})

function adicionaContato() {
    if (numeros.includes(inputNumero.value)) {
        alert (`O número ${inputNumero.value} já foi adicionado.`)
    } else if (nomes.includes(inputNome.value)) {
        alert ('Desculpe, seu nome já esta na lista')
    } else {
    nomes.push(inputNome.value);
    numeros.push(inputNumero.value);

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;
    linhas += linha
}}

function atualizaTabela() {
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;

};

function validaAdicionar() {
    if (inputNumero.value.toString().length == 11) {
    adicionaContato();
    const mensagemFinal = (`Obrigado pelo contato <b>${inputNome.value}</b>, assim que surgir uma oportunidade entraremos em contato.`);
    const containerMensagemFinal = document.querySelector ('.mensagem');
    containerMensagemFinal.innerHTML = mensagemFinal;

} else {
    alert ('O numero de telefone deve conter no minimo 11 numeros.')
    const containerMensagemFinal = document.querySelector ('.mensagem');
    containerMensagemFinal.innerHTML = '';
}}

