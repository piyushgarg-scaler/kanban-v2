//Board.js

const boards = document.querySelectorAll('.board');

boards.forEach(board => {
    board.addEventListener('dragover', function(event) {
        event.preventDefault();
        const draggedItem = document.querySelector('.is-dragging');
        const boardItems = [...board.querySelectorAll('.item:not(.is-dragging)')];
        const mouseY = event.clientY;

        let closestItem = null;
        let closestItemOffset = Number.NEGATIVE_INFINITY;

        boardItems.forEach(item => {
            const box = item.getBoundingClientRect();
            const offset = mouseY - box.top - (box.height / 2);

            if (offset < 0 && offset > closestItemOffset) {
                closestItemOffset = offset;
                closestItem = item;
            }
        });

        if (closestItem) {
            board.insertBefore(draggedItem, closestItem);
        } else {
            board.appendChild(draggedItem);
        }

        saveToLocalStorage();
    });
});