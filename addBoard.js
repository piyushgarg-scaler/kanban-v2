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
  })
})

// To Add new Boards
addBoardBtn.addEventListener('click', e => {
  //   alert('Comming soon...')
  modal.style.display = 'block'
})
