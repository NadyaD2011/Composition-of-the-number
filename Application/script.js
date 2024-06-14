let amount = Math.ceil(Math.random() * 10);
let oneSummand = Math.floor(Math.random() * (amount - 1 + 1)) + 1;
let twoSummand = amount - oneSummand;
let tries = 0;

document.getElementById("num").innerHTML = amount;
document.getElementById("oneSummand").innerHTML = oneSummand;

function guessNum(num) {
    if (tries >= 3){
        if (num === twoSummand){
            document.getElementById("twoSummand").innerHTML = twoSummand;
        }
        return document.getElementById("myHeading_1").innerHTML = "Игра окончена!"
    }
    else{
        if (num === twoSummand) {
            document.getElementById("myHeading_1").innerHTML = "Правильно!";
            document.getElementById("twoSummand").innerHTML = twoSummand;
            tries = 3;
        }
        else {
            tries++;
            document.getElementById("myHeading_1").innerHTML = "Не правильно!";
            document.getElementById("myHeading_2").innerHTML = "Следующее";
        }
    }
}