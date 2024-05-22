//insert item

const createItemButton = document.getElementById('create-todo-btn');

createItemButton.addEventListener('click',function(){
    
    const todoInput = document.querySelector('.input-container input');
    const board = document.getElementById('todo-board');
    
    if(todoInput.value.trim() !== ''){
        const div = document.createElement('div');
        const itemValue = document.createTextNode(todoInput.value)

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
        todoInput.value = '';
    }else{
        alert('please enter input');
    }

})