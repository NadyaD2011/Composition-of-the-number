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
        document.getElementById("myHeading_1").innerHTML = "Игра окончена!"
        return setTimeout(location.reload (), 30000)
    }
    else{
        if (num === twoSummand) {
            document.getElementById("myHeading_1").innerHTML = "Правильно!";
            document.getElementById("twoSummand").innerHTML = twoSummand;
            tries = 3;
            setTimeout(location.reload (), 30000)
        }
        else {
            tries++;
            document.getElementById("myHeading_1").innerHTML = "Не правильно!";
            document.getElementById("myHeading_2").innerHTML = "";
        }
    }
}