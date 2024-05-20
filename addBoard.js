const addBoardBtn = document.querySelector('.add-board-btn')
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('close')
const boardNameInput = document.getElementById('board-name')
const descriptionInput = document.getElementById('board-description')
const themeInput = document.getElementById('board-theme')
const submitBoardDetailsBtn = document.getElementById('submit-board-details')
const themeLabel = document.getElementById('theme-label')

// Getting themes from ./data.js and creating a Div for selecting board theme
themes.forEach(color => {
  const colorDiv = document.createElement('div')
  colorDiv.style.border = `3px solid ${color}`
  colorDiv.classList.add('circle', 'circle-theme')
  themeLabel.appendChild(colorDiv)

  colorDiv.addEventListener('click', e => {
    colorDiv.classList.toggle('theme-active')
    const allTheme = document.querySelectorAll('.circle-theme')

    // Adding extra class for the selected theme.
    allTheme.forEach(circle => {
      if (circle !== e.target) {
        circle.classList.remove('theme-active')
      } else {
        circle.classList.add('theme-active')
      }
    })
  })
})

// To display the modal
addBoardBtn.addEventListener('click', e => {
  modal.style.display = 'block'
  boardNameInput.focus()
})

// To clear the entered datas in the modal inputs.
const hiddingModelStyles = () => {
  boardNameInput.value = ''
  descriptionInput.value = ''
  const selectedTheme = themeLabel.querySelector('.theme-active')
  selectedTheme && selectedTheme.classList.remove('theme-active')

  modal.style.display = 'none'
}

// To close the model on Escape key.
document.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    hiddingModelStyles() // #Goto line --> 38
  }
})

// To close the model
modalCloseBtn.addEventListener('click', e => {
  hiddingModelStyles()
})

// After submitting the details...
// 1. Fetching all the details, 2. validating, 2.1. creating a newdata, 2.2. Updating the boardDatas/local storage,
// 3. Attaching dragging feature, 4. Attaching the add-task-btn/input feature, 5. Erasing inputs fields,
// 6.If not all the inputs provided, alert is provided.
submitBoardDetailsBtn.addEventListener('click', e => {
  const bName = boardNameInput.value
  const bclass = bName.toLowerCase().replace(/\s+/g, '-')
  const desc = descriptionInput.value
  const selectedTheme = themeLabel.querySelector('.theme-active')
  const themeColor =
    selectedTheme && selectedTheme.style.border.split(' ').slice(2).join('') // To get the color from the border style.

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
    setLocalStorage(datas) // #Goto ./data.js line --> 39

    const newBoard = createBoard(newBoardData) // #Goto ./createBoard.js line --> 21
    const addTaskBtn = newBoard.querySelector('.add-task-btn')
    const addTaskInput = newBoard.querySelector('.add-task-input')

    addDragOver(newBoard) // #Goto ./helper.js line --> 4
    addTaskBtnFeature(addTaskBtn) // #Goto ./addTasks.js line --> 14
    addTaskInputFeature(addTaskInput) // #Goto ./addTasks.js line --> 30

    modal.style.display = 'none'
    boardNameInput.value = ''
    descriptionInput.value = ''
    selectedTheme.classList.remove('theme-active')
  } else {
    alert('Please enter all the fields.')
  }
})
