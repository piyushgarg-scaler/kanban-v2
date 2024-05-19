const deleteTask = (el, boardEl) => {
  const value = el.children[0].innerText
  const boardId = boardEl.className.split(' ')[0]
  console.log(value, boardId)

  datas.forEach(board => {
    if (board.class === boardId) {
      const taskIdx = board.tasks.indexOf(value)
      board.tasks.splice(taskIdx, 1)
      setLocalStorage(datas)
      updateCounter(boardEl, board)
    }
  })
}

window.addEventListener('dblclick', e => {
  let parent = e.target
  if (parent.className === 'task-details') {
    parent = parent.parentElement
  }
  const boardEl = parent.parentElement.parentElement

  deleteTask(parent, boardEl)
  parent.remove()
})
