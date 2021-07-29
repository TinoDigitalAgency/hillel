let question1 = prompt("Сколько будет 2 + '2' в JavaScript?"),
    question2 = prompt('Назовите оператор присваивания в JavaScript?'),
    question3 = prompt('Сколько будет 5/0?').toLowerCase(),
    question4 = prompt('Одинаково ли работает == и === в JavaScript?').toLowerCase(),
    question5 = prompt('Чему равно выражение Boolean(null) в JavaScript?').toLowerCase(),

    //Right Answer
    rightAnswer1 = '22',
    rightAnswer2 = '=',
    rightAnswer3 = 'infinity',
    rightAnswer4 = 'no',
    rightAnswer5 = 'false',

    // Scores Counter
    maxScoresCounter = 50,
    scoresCounter = 0,
    scoresPercent,
    resultText;

if(question1 == rightAnswer1) {
    scoresCounter +=10;
}
if(question2 == rightAnswer2) {
    scoresCounter +=10;
}
if(question3 == rightAnswer3) {
    scoresCounter +=10;
}
if(question4 == rightAnswer4) {
    scoresCounter +=10;
}
if(question5 == rightAnswer5) {
    scoresCounter +=10;
}

resultText = 'Ваш результат '+ scoresCounter + ' балов.'

// Pass/Fail
scoresPercent = scoresCounter / maxScoresCounter * 100;

alert(resultText);

if(scoresPercent >= 50) {
    alert("Поздравляем, Вы сдали тест!!!");
} else {
    alert("Печалька, Вы не сдали тест!!!");
}

