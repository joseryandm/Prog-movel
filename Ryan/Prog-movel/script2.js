import { receberDados } from './script'
const inputBtt = document.getElementById('btt')

inputBtt.addEventListener('click', receberDados2);

function receberDados(){
    var inputNome = document.querySelector('#valorNome');
    var texto = inputNome.value;
}