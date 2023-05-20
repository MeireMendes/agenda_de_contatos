const form = document.getElementById('form-agenda-telefone');
const nome = [];
const numero =[];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumeroDeTelefone = document.getElementById('numero-de-telefone');

    if (nome.includes(inputNome.value)) {
    } else {
        numero.push(inputNumeroDeTelefone.value);
        numero.push(parseFloat(inputNumeroDeTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumeroDeTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputNumeroDeTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
