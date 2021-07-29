let a = getFirstNumber();
let b = getSecondNumber();
let operation = getMathOperation();


if (a && b && operation) {
    mathCalculate(a, b, operation);
} else {
    alert('Введены не коректные данные');
}


function getFirstNumber() {
    let a = parseInt(prompt('Введите первое число'));
    if (a) {
        return a;
    } else {
        return false;
    }
}

function getSecondNumber() {
    let b = parseInt(prompt('Введите второе число'));
    if (b) {
        return b;
    } else {
        return false;
    }
}

function getMathOperation() {
    let operation = prompt('Введите операцию');
    return operation;
}

function mathCalculate(a, b, operation) {
    let operationText,
        result;
    if (typeof a === 'number' && typeof b === 'number') {
        switch (operation) {
            case 'add' :
            case '+' :
                result = a + b;
                operationText = '+';
                break;
            case 'sub':
            case '-':
                result = a - b;
                operationText = '-';
                break;
            case '*' :
            case 'mult' :
                result = a * b;
                operationText = '*';
                break;
            case '/' :
            case 'div' :
                result = a / b;
                operationText = '/';
                break;
            case '%' :
            case 'mod' :
                result = a % b;
                operationText = '%';
                break;
            default:
                alert('Введена не корректная арифметическая операция. Доступны следующие команты - ' +
                    'add или +, ' +
                    'sub или -, ' +
                    'mult или *, ' +
                    'div или /, ' +
                    'mod или %, ')
                return false;

        }
        alert(`${a} ${operationText} ${b} = ${result}`);

    } else {
        return false;
    }
}


