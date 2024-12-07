const MAX_ATTEMPTS = 7;
let min = 1;
let max = 100;
const password = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = MAX_ATTEMPTS;
let gameDiv = document.getElementById("game");
let resultDiv = document.getElementById("result");
let isCorrect = false;

while (attemptsLeft > 0) {
    let guess = prompt(`請輸入 ${min}-${max} 之間的數字\n還剩下${attemptsLeft}次機會`);

    if (guess === null) {
        alert("遊戲結束，請再試一次！");
        break;
    }

    guess = parseInt(guess);

    if (isNaN(guess) || guess <= min || guess >= max || guess === 0 || guess === 100) {
        alert("請輸入有效範圍內的數字! (不能選擇範圍的上下限)");
        continue;
    }

    attemptsLeft--;

    if (guess === password) {
        alert("恭喜你答對了！");
        resultDiv.innerHTML = '<img src="correct.jpg" alt="Correct">';
        isCorrect = true;
        break;
    }
    else if (attemptsLeft > 0) {
        if (guess < password) {
            min = guess;
            alert(`新的範圍是 ${min}-${max}`);
        }
        else {
            max = guess;
            alert(`新的範圍是 ${min}-${max}`);
        }
    }

    if (!isCorrect && attemptsLeft === 0) {
        alert(`遊戲結束，正確答案是：${password}`);
        resultDiv.innerHTML = '<img src="wrong.jpg" alt="Wrong">';
    }
}