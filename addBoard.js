const addBoardBtn = document.querySelector('.add-board-btn')
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('close')
const boardNameInput = document.getElementById('board-name')
const descriptionInput = document.getElementById('board-description')
const themeInput = document.getElementById('board-theme')
const submitBoardDetailsBtn = document.getElementById('submit-board-details')
const themeLabel = document.getElementById('theme-label')

themes.forEach(color => {
  const colorDiv = document.createElement('div')
  colorDiv.style.border = `3px solid ${color}`
  colorDiv.classList.add('circle', 'circle-theme')
  themeLabel.appendChild(colorDiv)

  colorDiv.addEventListener('click', e => {
    colorDiv.classList.toggle('theme-active')
    const allTheme = document.querySelectorAll('.circle-theme')

    allTheme.forEach(circle => {
      if (circle !== e.target) {
        circle.classList.remove('theme-active')
      } else {
        circle.classList.add('theme-active')
      }
    })
  })
})

// To Add new Boards
addBoardBtn.addEventListener('click', e => {
  modal.style.display = 'block'
})

modalCloseBtn.addEventListener('click', e => {
  modal.style.display = 'none'
})

submitBoardDetailsBtn.addEventListener('click', e => {
  const bName = boardNameInput.value
  const bclass = bName.toLowerCase().replace(/\s+/g, '-')
  const desc = descriptionInput.value
  const selectedTheme = themeLabel.querySelector('.theme-active')
  const themeColor =
    selectedTheme && selectedTheme.style.border.split(' ').slice(2).join('')

  if (bName.trim() && desc.trim() && themeColor.trim()) {
    const newBoardData = {
      id: Date.now(),
      name: bName,
      class: bclass,
      theme: themeColor,
      description: desc,
      tasks: []
    }
    datas.push(newBoardData)
    setLocalStorage(datas)

    const newBoard = createBoard(newBoardData)
    const addTaskBtn = newBoard.querySelector('.add-task-btn')
    const addTaskInput = newBoard.querySelector('.add-task-input')

    addDragOver(newBoard)
    addTaskBtnFeature(addTaskBtn)
    addTaskInputFeature(addTaskInput)

    modal.style.display = 'none'
    boardNameInput.value = ''
    descriptionInput.value = ''
    selectedTheme.classList.remove('theme-active')
    // console.log(newBoard)
  } else {
    alert('Please enter all the fields.')
  }
})
