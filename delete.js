const delBoardBtns = document.querySelectorAll('.board-del-btn')

// Listening to double clicks,
// If the double click has happen on the tasks, then we remove the element and updating the local storage.
window.addEventListener('dblclick', e => {
  let parent = e.target
  if (parent.className === 'task-details') {
    parent = parent.parentElement
  }
  const boardEl = parent.parentElement.parentElement

  if (parent.className === 'task') {
    let confirmation = window.confirm(
      `Are you sure you want to delete this task --> ${parent.children[0].innerText}`
    )
    if (confirmation) {
      alterBoardData(parent, boardEl) // #Goto ./helper.js line --> 40
      parent.remove()
    }
  }
})

window.addEventListener('click', e => {
  console.log()
})

// To delete the newly created board and updating the local storage.
delBoardBtns.forEach(btn => {
  deleteBoard(btn) // #Goto ./helper.js line --> 91.
})
