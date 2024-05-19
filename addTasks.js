const addTaskBtns = document.querySelectorAll('.add-task-btn')
const addTaskInputs = document.querySelectorAll('.add-task-input')
const addTaskDivs = document.querySelectorAll('.add-task-div')

const resetBtns = () => {
  addTaskBtns.forEach(btn => {
    btn.style.display = 'block'
    btn.nextElementSibling.style.display = 'none'
    btn.nextElementSibling.value = ''
  })
}

addTaskBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    resetBtns()
    btn.style.display = 'none'

    const input = btn.nextElementSibling
    input.style.display = 'block'
    input.focus()
  })
})

addTaskInputs.forEach(input => {
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const newTask = createTaskEl(e.target.value)

      const taskDiv = e.target.parentElement.previousElementSibling
      taskDiv.appendChild(newTask)

      input.style.display = 'none'
      e.target.previousElementSibling.style.display = 'block'
    }
    if (e.key === 'Escape') {
      input.style.display = 'none'
      e.target.previousElementSibling.style.display = 'block'
    }
  })
})
