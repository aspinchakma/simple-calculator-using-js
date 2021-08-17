const numberButtons = document.getElementsByClassName('number');
const inputField = document.getElementById('input-field');
const beforeInput = document.getElementById('before-input')

for (const button of numberButtons) {

    button.addEventListener('click', function () {
        const buttonValue = button.innerText;
        const inputFieldValue = inputField.innerText;
        const total = inputFieldValue + buttonValue;
        inputField.innerText = total;

    })
}

// plusButton button 
const plusButton = document.getElementById('plus-button')
plusButton.addEventListener('click', function () {
    const plusButtonValue = plusButton.innerText;
    const inputFieldValue = inputField.innerText;
    const total = inputFieldValue + plusButtonValue;
    const beforeInput = document.getElementById('before-input');
    beforeInput.innerText = total;
    inputField.innerText = '';
})

// minus button 

const minusButton = document.getElementById('minus-button')
minusButton.addEventListener('click', function () {
    const minusButtonValue = minusButton.innerText;
    const inputFieldValue = inputField.innerText;
    const total = inputFieldValue + minusButtonValue;
    const beforeInput = document.getElementById('before-input');
    beforeInput.innerText = total;
    inputField.innerText = '';
})

// multiplicationButton
const multiplicationButton = document.getElementById('multiplication-button')
multiplicationButton.addEventListener('click', function () {
    const multiplicationValue = multiplicationButton.innerText;
    const inputFieldValue = inputField.innerText;
    const total = inputFieldValue + multiplicationValue;
    const beforeInput = document.getElementById('before-input');
    beforeInput.innerText = total;
    inputField.innerText = '';
})

// division button 
const divisionButton = document.getElementById('division-button')
divisionButton.addEventListener('click', function () {
    const divisionButtonnValue = divisionButton.innerText;
    const inputFieldValue = inputField.innerText;
    const total = inputFieldValue + divisionButtonnValue;
    const beforeInput = document.getElementById('before-input');
    beforeInput.innerText = total;
    inputField.innerText = '';
})


// Modulas Button 

const modulasButton = document.getElementById('modulas-button')
modulasButton.addEventListener('click', function () {
    const modulasButtonValue = modulasButton.innerText;
    const inputFieldValue = inputField.innerText;
    const total = inputFieldValue + modulasButtonValue;
    const beforeInput = document.getElementById('before-input');
    beforeInput.innerText = total;
    inputField.innerText = '';
})




document.getElementById('equal-button').addEventListener('click', function () {
    const beforeInput = document.getElementById('before-input');
    const inputFieldValue = inputField.innerText;
    const beforeInputValue = beforeInput.innerText;

    if (beforeInputValue.indexOf('+') != -1) {
        const inputFieldNumber = parseFloat(inputFieldValue);
        const beforeInputValue = parseFloat(beforeInput.innerText);
        const result = inputFieldNumber + beforeInputValue;
        inputField.innerText = result;
        beforeInput.innerText = '';
    }
    if (beforeInputValue.indexOf('-') != -1) {
        const inputFieldNumber = parseFloat(inputFieldValue);
        const beforeInputValue = parseFloat(beforeInput.innerText);
        const result = beforeInputValue - inputFieldNumber;
        inputField.innerText = result;
        beforeInput.innerText = '';
    }

    if (beforeInputValue.indexOf('÷') != -1) {
        const inputFieldNumber = parseFloat(inputFieldValue);
        const beforeInputValue = parseFloat(beforeInput.innerText);
        const result = beforeInputValue / inputFieldNumber;
        inputField.innerText = result;
        beforeInput.innerText = '';
    }
    if (beforeInputValue.indexOf('×') != -1) {
        const inputFieldNumber = parseFloat(inputFieldValue);
        const beforeInputValue = parseFloat(beforeInput.innerText);
        const result = beforeInputValue * inputFieldNumber;
        inputField.innerText = result;
        beforeInput.innerText = '';
    }
    if (beforeInputValue.indexOf('%') != -1) {
        const inputFieldNumber = parseFloat(inputFieldValue);
        const beforeInputValue = parseFloat(beforeInput.innerText);
        const result = beforeInputValue % inputFieldNumber;
        inputField.innerText = result;
        beforeInput.innerText = '';
    }



})




const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
    inputField.innerText = '';
})