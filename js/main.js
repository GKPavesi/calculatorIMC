import { Modal } from './modal.js'
import { AlertError } from './alert-error.js';
import { notNumber, calculateIMC } from './utils.js';

// variaveis - variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = (notNumber(weight)) || (notNumber(height));

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        //return (se usasse o return aqui tiraria o else)
    } else {
        const result = calculateIMC(weight, height);
        displayResultMessage(result);
    }
}

function displayResultMessage(result) {
    Modal.message.innerText = `Seu IMC é de ${result}`;
    Modal.open();
}

function handleInput() {
    if (AlertError.element.classList.contains('open')) {
        AlertError.close();
    }
}

inputWeight.addEventListener('input', handleInput)
inputHeight.addEventListener('input', handleInput)
