const inputButton = document.getElementById('button')

inputButton.addEventListener('click', () => {
    const nomeCompleto = document.getElementById('nome').value;
    const email = document.getElementById('email');
    const data = document.getElementById('data');
    const cep = document.getElementById('cep');
    const estado = document.getElementById('estado');
    const cidade = document.getElementById('cidade');
    const bairro = document.getElementById('bairro');
    const logradouro = document.getElementById('logradouro');
    const numero = document.getElementById('numero');
    const complemento = document.getElementById('complemento').value;
});

document.getElementById('valorNome').innerHTML = nomeCompleto;
document.getElementById('valorEmail').innerHTML = email;
document.getElementById('valorData').innerHTML = data;
document.getElementById('valorCep').innerHTML = cep;
document.getElementById('valorEstado').innerHTML = estado;
document.getElementById('valorCidade').innerHTML = cidade;
document.getElementById('valorBairro').innerHTML = bairro;
document.getElementById('valorLogradouro').innerHTML = logradouro;
document.getElementById('valorNumero').innerHTML = numero;
document.getElementById('valorComplemento').innerHTML = complemento;
