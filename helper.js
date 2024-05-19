// This variable is to get the current task which is being dragged.
let changeData = undefined

// To add the draggable function the .task divs.
const addDraggable = el => {
  if (el) {
    // While dragging...
    el.addEventListener('dragstart', e => {
      el.classList.add('is-dragging')
      const parent = el.parentElement.parentElement

      // If the changeData doesn't has any data then we move into alterBoadData
      // Deleting the current task from the data
      if (!changeData) {
        changeData = el
        alterBoardData(el, parent) // #Goto line --> 38
      }
    })

    // After dragging...
    el.addEventListener('dragend', e => {
      el.classList.remove('is-dragging')
      const parent = el.parentElement.parentElement

      // Adding the current task to the data
      if (changeData !== undefined) {
        alterBoardData(changeData, parent, 1) // #Goto line --> 38
        changeData = undefined
      }
    })
  }
}

// To update the task count in the boards.
const updateTaskCount = (boardEl, board) => {
  const count = boardEl.querySelector('.count')
  count.innerText = board.tasks.length
}

// This is multitasking function
// operation === 0, means "delete" task
// operation === 1, means "append" task at the end
// operation === 2, means "insert" task inBetween
const alterBoardData = (el, boardEl, operation = 0) => {
  const value = el.children[0].innerText
  const boardId = boardEl.className.split(' ')[0]
  datas.forEach(board => {
    if (board.class === boardId) {
      if (!operation) {
        console.log('DELETE')

        const taskIdx = board.tasks.indexOf(value)
        board.tasks.splice(taskIdx, 1)
        updateTaskCount(boardEl, board)
      } else if (operation === 1) {
        board.tasks.push(value)
        updateTaskCount(boardEl, board)
      } else {
        console.log('NEED TO INSERT')
      }
      setLocalStorage(datas) // #Goto ./data.js line --> 39
    }
  })
}
