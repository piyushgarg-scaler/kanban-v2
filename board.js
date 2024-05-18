const items = document.querySelectorAll('.item')
const boards = document.querySelectorAll('.board')

items.forEach(item => {
    item.addEventListener('dragstart', e => {
        item.classList.add('is-dragging')
    })

    item.addEventListener('dragend', e => {
        item.classList.remove('is-dragging')
    })
})



boards.forEach(board => {
    board.addEventListener('dragover', () => {
        const taskEl = document.querySelector('.is-dragging')
        board.appendChild(taskEl)
    })
})