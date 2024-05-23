const boards = document.querySelectorAll('.board');

boards.forEach((board)=>{
    board.addEventListener('dragover',function(){
        const draggedItem = document.querySelector('.is-dragging');
        board.appendChild(draggedItem);
        saveToLocalStorage();
    })
})