const input = document.querySelector("#num");
const numBtn = document.querySelector('.num--btn');
const restartText = document.querySelector('.restart');
const restartBtn = document.querySelector('#restart--btn');
const resultText = document.querySelector('.result');
const element = document.getElementById('result--print');
let strike = 0;
let ball = 0;
let numArr = [];
// let answer = [];

function chkResult(j, k) {
    if (answer[j] == numArr[k]) {
        if (j === k) {
            strike++;
        } else {
            ball++;
        }
    }
}

function restart() {
    resultText.style.display = 'none';
    element.style.display = 'none';
    restartText.style.display = 'none';
    restartBtn.style.display = 'none';
    for (let i = 0; i < 3; i++) {
        let select = Math.floor(Math.random() * list.length);
        answer[i] = list.splice(select, 1)[0];
    }
    //log
    console.log(answer);
}

// CHKANSWER
function chkAnswer() {
    console.log("chkAnswer" + answer);
    restartText.style.display = 'none';
    restartBtn.style.display = 'none';
    let num = input.value;
    numArr = num.split('');
    strike = 0;
    ball = 0;
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            chkResult(j, k);
        }
    }

    if (strike === 3) {
        resultText.style.display = 'block';
        element.innerHTML = '🎉정답을 맞추셨습니다🎉';
        restartText.style.display = 'block';
        restartBtn.style.display = 'block';

    } else {
        resultText.style.display = 'block';
        element.innerHTML = '다시 시도해보세요';
    }


}

