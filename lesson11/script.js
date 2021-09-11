const input = document.getElementById('todo-input');
const button = document.getElementById('add-task');
const todos = document.getElementsByClassName('todo-item');
const todoWrapper = document.getElementsByClassName('todo-wrapper')[0];
let counter = 0;
const checkToDo = (items) => {
    if(items.length > 0) {
        // show todos
    } else {
        todoWrapper.innerHTML = "<p class='no-task-text'>You don't have any scheduled tasks yet</p>";
    }
}

const addTask = () => {
    const inputValue = input.value;
    if(inputValue !== '') {
        const id = 'todo-item-' + Math.random() * 100 * counter;
        if(todoWrapper.getElementsByClassName('no-task-text').length > 0) {
            todoWrapper.getElementsByClassName('no-task-text')[0].remove();
        }

        todoWrapper.innerHTML += "<div class='todo-item' id='" + id + "' onclick='completeTask(id)'>" +
            "<div class='todo-item-content'>"+inputValue+"</div>" +
            "</div>"

        counter += 1;

        // Clear Input
        input.value = '';
    } else {
        return false;
    }
}
const completeTask = (element) => {
    if (element !== null && element.length > 0) {
        const elementObj = document.getElementById(element);
        if (elementObj.classList.contains('completed')) {
            elementObj.classList.remove('completed');
        } else {
            elementObj.classList.add('completed');
        }

    } else  {
        return false
    }
}


checkToDo(todos);

button.addEventListener('click', addTask);



