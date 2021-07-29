const elements = document.getElementsByTagName('td');
const elementTotal = document.getElementById('summ');
const convertToNumber = (number) => {
    let convertNumber = 0;
    let lastSymbol = number.toString().slice(-1);
    let firstSymbols = Number(number.toString().slice(0,-1));

    if (!Number.isNaN(Number(firstSymbols))) {
        if(Number.isNaN(Number(lastSymbol))) {
            if(lastSymbol === 'M') {
                convertNumber = firstSymbols * 1000000;
            } else if(lastSymbol === 'B') {
                convertNumber =  firstSymbols * 1000000000;
            }
        } else {
            convertNumber = Number(number);
        }
        return convertNumber;

    } else  {
        return 0
    }
}
let sum = 0;
for (let i = 0; i < elements.length; i++) {
    let elementAttribute = elements[i].getAttribute('data-id');
    if(elementAttribute != null) {
        let value = convertToNumber(elements[i].textContent);
        sum += value;
    }
}
console.log('Sum: ', sum);

elementTotal.textContent += " " + sum;




convertToNumber('211111B');