const inputEl = document.getElementById('todo-input')
const createTodoBtn = document.getElementById('create-todo-btn')


const todoBoard = document.getElementById('todo-board')

createTodoBtn.addEventListener('click', e => {
    const value = inputEl.value;

    const div = document.createElement('div')
    const p = document.createElement('p')

    div.setAttribute('draggable', 'true')
    div.classList.add('item')

    const txt = document.createTextNode(value);
    p.appendChild(txt);

    div.appendChild(p);

    div.addEventListener('dragstart', e => {
        div.classList.add('is-dragging')
    })

    div.addEventListener('dragend', e => {
        div.classList.remove('is-dragging')
    })

    todoBoard.appendChild(div)

    inputEl.value = ''
})