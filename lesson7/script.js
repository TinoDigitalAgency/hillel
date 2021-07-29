const button = document.getElementById('print-number');

const generateString = (n) => {
    let result = n ? generateString(n - 1) + ' ' + n.toString() : ''
    return result;
}

const printResult = (stringFunction) => {
    let value = document.getElementById('number').value;
    const numberString = document.getElementById('printable-row');
    const sumEl = document.getElementById('printable-sum');
    const string = stringFunction(value);
    numberString.textContent = string;
    numberString.classList.add('active');
    let stringArr = string.split(' ');
    let sum = 0;
    for (let i = 0; i < stringArr.length; i++) {
        sum += Number(stringArr[i])
    }
    sumEl.textContent = 'Сумма чисел: ' + sum;
    sumEl.classList.add('active');
}

button.onclick = function (e) {
    e.preventDefault();
    printResult(generateString);
}


