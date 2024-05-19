const addDraggable = el => {
  if (el) {
    el.addEventListener('dragstart', e => {
      el.classList.add('is-dragging')
    })

    el.addEventListener('dragend', e => {
      el.classList.remove('is-dragging')
    })
  }
}

const updateCounter = (boardEl, board) => {
  const count = boardEl.querySelector('.count')
  count.innerText = board.tasks.length
}

const appendNewTaskData = (value, boardEl) => {
  const boardId = boardEl.className.split(' ')[0]
  datas.forEach(board => {
    if (board.class === boardId) {
      board.tasks.push(value)
      updateCounter(boardEl, board)
    }
  })
}
