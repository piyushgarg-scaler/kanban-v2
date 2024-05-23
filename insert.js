//insert item

const createItemButton = document.getElementById('create-todo-btn');

function addItem(boardId,text){
    
    const board = document.getElementById(boardId);
    
    if(text.trim() !== ''){
        const div = document.createElement('div');
        const itemValue = document.createTextNode(text)

        div.classList.add('item');
        div.setAttribute('draggable',true);
        div.appendChild(itemValue);

        div.addEventListener('dragstart',()=>{
            div.classList.add('is-dragging');
        });

        div.addEventListener('dragend',()=>{
            div.classList.remove('is-dragging');
        })

        board.appendChild(div);
        saveToLocalStorage();
    }else{
        alert('please enter input');
    }

}

createItemButton.addEventListener('click',()=>{
    const todoInput = document.querySelector('.input-container input');
    addItem('todo-board',todoInput.value);
    todoInput.value = '';
})

window.addEventListener('load',loadItemsFromLocalStorage);