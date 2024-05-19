const addDraggable = el => {
  if (el) {
    el.addEventListener('dragstart', e => {
      el.classList.add('is-dragging')
      console.log(el.children[0].innerText)

      // console.log(el.parentElement.parentElement)
    })

    el.addEventListener('dragend', e => {
      el.classList.remove('is-dragging')
    })
  }
}

const updateTaskCount = (boardEl, board) => {
  const count = boardEl.querySelector('.count')
  count.innerText = board.tasks.length
}

const deleteTask = (el, boardEl) => {
  const value = el.children[0].innerText
  const boardId = boardEl.className.split(' ')[0]
  console.log(value, boardId)

  datas.forEach(board => {
    if (board.class === boardId) {
      const taskIdx = board.tasks.indexOf(value)
      board.tasks.splice(taskIdx, 1)
      updateTaskCount(boardEl, board)
      setLocalStorage(datas)
    }
  })
}

const appendNewTaskData = (value, boardEl) => {
  const boardId = boardEl.className.split(' ')[0]
  datas.forEach(board => {
    if (board.class === boardId) {
      board.tasks.push(value)
      updateTaskCount(boardEl, board)
    }
  })
}

const insertTask = () => {}
