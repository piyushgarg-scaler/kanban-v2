// Listening to double clicks,
// If the double click has happen on the tasks, then we remove the element and updating the boardDatas.
window.addEventListener('dblclick', e => {
  let parent = e.target
  if (parent.className === 'task-details') {
    parent = parent.parentElement
  }
  const boardEl = parent.parentElement.parentElement

  alterBoardData(parent, boardEl) // #Goto ./helper.js line --> 40
  parent.remove()
})
