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

const appendNewTaskData = (value, boardEl) => {
  const boardId = boardEl.className.split(' ')[0]
  const count = boardEl.querySelector('.count')
  datas.forEach(board => {
    if (board.class === boardId) {
      board.tasks.push(value)
      count.innerText = board.tasks.length
    }
  })
}
