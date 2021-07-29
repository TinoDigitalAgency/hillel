let R = getRadius();
const Pi = Math.PI;
let operation = Number(prompt('Что вы хотите посчитать \n диаметр (цифра 1), \n площадь(цифра 2), \n длинну окружности(цифра 3)'));

if (!isNaN(operation)) {
    switch (operation) {
        case 1:
            diameterCalc(R);
            break;

        case 2:
            squareCalc(R);
            break;

        case 3:
            lengthCalc(R);
            break;

        default:
            alert('Такой операции не сущеструет. Список доступных операций для вычисления \n диаметр (цифра 1), \n площадь(цифра 2), \n длинну окружности(цифра 3)')
    }
} else {
    alert('Вы ввели не корректную операцию! Список доступных операций для вычисления \n диаметр (цифра 1), \n площадь(цифра 2), \n длинну окружности(цифра 3)')
}


function getRadius() {
    let R = Number(prompt('Введите Радиус круга'));
    if (!isNaN(R)) {
        return R;
    } else {
        alert('Введите целое или дробное число в виде "123" или "12.332"');
        return false;
    }
}

// Diameter Calculate
function diameterCalc(R) {
    return alert(`Диаметр окружности с радиусом ${R} равен ${R * 2}`);
}

// Square Calculate
function squareCalc(R) {
    let square = Pi * R ^ 2;
    return alert(`Площадь круга с радиусом ${R} равна ${square}`);
}

// Length Calculate
function lengthCalc(R) {
    let length = 2 * Pi * R;
    return alert(`Длина окружности с радиусом ${R} равна ${length}`);
}


