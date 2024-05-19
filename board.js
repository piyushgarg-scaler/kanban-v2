const items = document.querySelectorAll('.task')
const boards = document.querySelectorAll('.board')

items.forEach(item => {
  addDraggable(item)
})

boards.forEach(board => {
  board.addEventListener('dragover', () => {
    const taskEl = document.querySelector('.is-dragging')
    const taskConatainer = board.querySelector('.tasks-container')
    taskConatainer.appendChild(taskEl)
  })
})


