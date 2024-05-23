// This variable is to get the current task which is being dragged.
let changeData = undefined

// To add the draggable function the .task divs.
const addDraggable = el => {
  if (el) {
    // When dragged...
    el.addEventListener('dragstart', e => {
      el.classList.add('is-dragging')

      // To place some extra stylings to the dragged task after getting the reference.
      setTimeout(() => {
        el.classList.add('snapshot')
      }, 0)

      const parent = el.parentElement.parentElement

      // If the changeData doesn't has any data then we move into alterBoadData
      // Deleting the current task from the data
      if (!changeData) {
        changeData = el
        alterBoardData(el, parent) // #Goto line --> 47
      }
    })

    // After dragging...
    el.addEventListener('dragend', e => {
      el.classList.remove('is-dragging')

      // To remove styling from the dragged task after dropped.
      setTimeout(() => {
        el.classList.remove('snapshot')
      }, 0)

      const parent = el.parentElement.parentElement
      const nextEl = el.nextElementSibling // Getting the next task element

      // Adding the current task to the data
      if (changeData !== undefined) {
        // If we have nextEl it means we are inserting the task inbetween
        // Else we are just appending at the end.
        if (nextEl) {
          alterBoardData(changeData, parent, 2, nextEl.innerText) // #Goto line --> 47
        } else {
          alterBoardData(changeData, parent, 1) // #Goto line --> 47
        }
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
const alterBoardData = (el, boardEl, operation = 0, nextEl = '') => {
  const value = el.children[0].innerText
  const boardId = boardEl.className.split(' ')[0]
  datas.forEach(board => {
    if (board.class === boardId) {
      const tasksList = board.tasks
      if (!operation) {
        // console.log('DELETE')

        const taskIdx = tasksList.indexOf(value)
        tasksList.splice(taskIdx, 1)
      } else if (operation === 1) {
        // console.log('APPEND');

        tasksList.push(value)
      } else {
        // console.log('NEED TO INSERT')

        const insertIdx = tasksList.indexOf(nextEl)
        tasksList.splice(insertIdx, 0, value)
      }
      updateTaskCount(boardEl, board) // #Goto line --> 51

      setLocalStorage(datas) // #Goto ./data.js line --> 39
    }
  })
}

const deleteBoard = btn => {
  btn.addEventListener('click', e => {
    const boardEl = e.target.parentElement.parentElement.parentElement
    const confirmation = window.confirm(
      `Do you want to delte the board >> "${boardEl.id}"`
    )

    if (confirmation) {
      const boardIdx = datas.indexOf(boardEl.id)
      datas.splice(boardIdx, 1)

      boardEl.remove()
      setLocalStorage(datas) // #Goto ./data.js line --> 42
    }
  })
}
