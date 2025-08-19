let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}

minValue = (minValue < -999) ?  -999 : minValue ;
maxValue = (maxValue > 999)  ?  999 : maxValue ;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
    }

    minValue = (minValue < -999) ?  -999 : minValue ;
    maxValue = (maxValue > 999)  ?  999 : maxValue ;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const voprosRandom = Math.round( Math.random() * 2);
            if (voprosRandom == 0) {
                voprosPhrase = `Вы загадали число ${answerNumber}?`;
            } else {
                if (voprosRandom == 1) {
                    voprosPhrase = `Наверное это число ${answerNumber}`;
                } else {
                    voprosPhrase = `Думаю это ${answerNumber}`;
                }
            } 

            answerField.innerText = voprosPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {            
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const voprosRandom = Math.round( Math.random() * 2);
            if (voprosRandom == 0) {
                voprosPhrase = `Вы загадали число ${answerNumber}?`;
            } else {
                if (voprosRandom == 1) {
                    voprosPhrase = `Наверное это число ${answerNumber}`;
                } else {
                    voprosPhrase = `Думаю это ${answerNumber}`;
                }
            } 

            answerField.innerText = voprosPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const vernoRandom = Math.round( Math.random() * 2);
            if (vernoRandom == 0) {
                vernoPhrase = `Я всегда угадываю\n\u{1F60E}`;
            } else {
                if (vernoRandom == 1) {
                    vernoPhrase = `Я гений\n\u{1F913}`;
                } else {
                    vernoPhrase = `Я крутой\n\u{1F918}`;
                }
            } 

        answerField.innerText = vernoPhrase;
        gameRun = false;
    }
})