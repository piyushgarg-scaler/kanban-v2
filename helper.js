let changeData = undefined

const addDraggable = el => {
  if (el) {
    el.addEventListener('dragstart', e => {
      el.classList.add('is-dragging')
      const parent = el.parentElement.parentElement

      if (!changeData) {
        changeData = el
        alterBoardData(el, parent)
      }
    })

    el.addEventListener('dragend', e => {
      el.classList.remove('is-dragging')
      const parent = el.parentElement.parentElement

      if (changeData !== undefined) {
        alterBoardData(changeData, parent, 1)
        changeData = undefined
      }
    })
  }
}

const updateTaskCount = (boardEl, board) => {
  const count = boardEl.querySelector('.count')
  count.innerText = board.tasks.length
}

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
      setLocalStorage(datas)
    }
  })
}
