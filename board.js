const items = document.querySelectorAll('.task')
const boards = document.querySelectorAll('.board')

// Attaching each draggable funtion to each of the tasks.
items.forEach(item => {
  addDraggable(item) // #Goto ./helper.js line --> 4
})

const addDragOver = board => {
  board.addEventListener('dragover', e => {
    const taskEl = document.querySelector('.is-dragging')
    const taskConatainer = board.querySelector('.tasks-container')
    const closestElement = getClosestElement(board, e.clientY)

    console.log(closestElement)
    if (closestElement) {
      taskConatainer.insertBefore(taskEl, closestElement)
    } else {
      taskConatainer.appendChild(taskEl)
    }
  })
}

const getClosestElement = (board, yAxis) => {
  const tasksInThisBoard = board.querySelectorAll('.task:not(.is-dragging)')

  let closestEl = null
  let closestDistance = Number.NEGATIVE_INFINITY

  tasksInThisBoard.forEach(task => {
    const boundry = task.getBoundingClientRect()
    const top = boundry.top

    const distance = yAxis - top

    if (distance < 0 && distance > closestDistance) {
      closestDistance = distance
      closestEl = task
    }
  })
  return closestEl
}

// Attaching drag over listener to each of the boards to capture the dragged task.
boards.forEach(board => {
  addDragOver(board) // #Goto line --> 9
})
