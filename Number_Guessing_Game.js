let min = 0;
let max = 100;
const password = Math.floor(Math.random() * (99)) + 1;
let attemptsLeft = 7
let resultDiv = document.getElementById("result");

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

    if (guess === password) {
        alert("恭喜你答對了！");
        resultDiv.innerHTML = '<img src="correct.jpg" alt="Correct">';
        break;
    }
    else if (guess < password) {
        min = guess;
        alert(`新的範圍是 ${min}-${max}`);
    }
    else {
        max = guess;
        alert(`新的範圍是 ${min}-${max}`);
    }
}

attemptsLeft--;

if (attemptsLeft === 0) {
    alert(`遊戲結束，正確答案是：${password}`);
    resultDiv.innerHTML = '<img src="wrong.jpg" alt="Wrong">';
}