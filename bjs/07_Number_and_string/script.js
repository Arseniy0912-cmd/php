let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_result').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }

    if (operation === 'minus') {
        const result = lastOperand - parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }

    if (operation === 'umnoj') {
        const result = lastOperand * parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }

    if (operation === 'del') {
        const result = lastOperand / parseInt(inputWindow.value);
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }
})

document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
})

document.getElementById('btn_umnoj').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'umnoj';
    inputWindow.value = '';
})

document.getElementById('btn_del').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'del';
    inputWindow.value = '';
})