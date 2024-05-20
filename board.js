const items = document.querySelectorAll('.task')
const boards = document.querySelectorAll('.board')

// Attaching each draggable funtion to each of the tasks.
items.forEach(item => {
  addDraggable(item) // #Goto ./helper.js line --> 4
})

const addDragOver = board => {
  board.addEventListener('dragover', () => {
    const taskEl = document.querySelector('.is-dragging')
    const taskConatainer = board.querySelector('.tasks-container')
    taskConatainer.appendChild(taskEl)
  })
}

// Attaching drag over listener to each of the boards to capture the dragged task.
boards.forEach(board => {
  addDragOver(board)
})
