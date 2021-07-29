const elements = document.getElementsByTagName('td');

const changeText = (value, id) => {
    document.getElementById(id).getElementsByTagName('span')[0].textContent = value
}

const deleteDom = (attribute, elements) => {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute(attribute) !== null) {
            elements[i].remove();
        }
    }
}

const changeBackground = (attribute, elements) => {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute(attribute) !== null) {
            elements[i].style.backgroundColor = 'green';
            console.log(elements[i]);
        }
    }
}

const addRow = (element) => {
    const table = document.getElementsByTagName(element)[0];
    const newTR = table.insertRow();
    const cell = newTR.insertCell();
    const cell2 = newTR.insertCell();
    const cell3 = newTR.insertCell();
    cell.innerHTML = 'Lamborghini';
    cell2.innerHTML = 'Aventador';
    cell3.innerHTML = '16M';
}

const removeFirst = (elems) => {
    document.getElementsByTagName(elems)[0].remove();
}

removeFirst('tr');
addRow('table');
changeBackground('data-id', elements)
deleteDom('my-attribute', elements);
changeText('2020', 'title');