const items = document.querySelectorAll('.task')
const boards = document.querySelectorAll('.board')

// Attaching each draggable funtion to each of the tasks.
items.forEach(item => {
  addDraggable(item)
})

// Attaching drag over listener to each of the boards to capture the dragged task.
boards.forEach(board => {
  board.addEventListener('dragover', () => {
    const taskEl = document.querySelector('.is-dragging')
    const taskConatainer = board.querySelector('.tasks-container')
    taskConatainer.appendChild(taskEl)
  })
})
