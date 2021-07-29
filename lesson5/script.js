let radius,
    command = 0;
getRadius();
getCommand();

switch (command) {
    case 1:
        diameterCalc(radius);
        break;

    case 2:
        squareCalc(radius);
        break;

    case 3:
        lengthCalc(radius);
        break;
}


function getRadius() {
    let radiusText
    do {
        radiusText = prompt('Введите радиус окружности ^_^', '');
        radius = Number(radiusText);
        if (Number.isNaN(radius) || radiusText === '') {
            alert('Введите число!');
        }
    } while (Number.isNaN(radius) || radiusText === '');

    return radius;
}

function getCommand() {
    while (command <= 0 || command >= 4 || Number.isNaN(command)) {
        command = Number(prompt('Введите команду для вычисления \n 1 - считаем диаметр \n 2 - считаем площадь круга \n 3 - длину окружности', ''));
        if (command <= 0 || command >= 4 || Number.isNaN(command)) {
            alert('Команда не существует');
        }
    }
    return command;
}

// Diameter Calculate
function diameterCalc(radius) {
    return alert(`Диаметр окружности с радиусом ${radius} равен ${radius * 2}`);
}

// Square Calculate
function squareCalc(radius) {
    let square = Math.PI * radius ^ 2;
    return alert(`Площадь круга с радиусом ${radius} равна ${square}`);
}

// Length Calculate
function lengthCalc(radius) {
    let length = 2 * Math.PI * radius;
    return alert(`Длина окружности с радиусом ${radius} равна ${length}`);
}