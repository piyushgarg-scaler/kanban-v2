const boardContainer = document.getElementById('board-container')

const createTaskEl = el => {
  if (el.trim()) {
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')
    taskDiv.setAttribute('draggable', 'true')

    addDraggable(taskDiv)

    const taskDetail = document.createElement('p')
    taskDetail.append(document.createTextNode(el))
    taskDiv.appendChild(taskDetail)

    return taskDiv
  }
}

const createBoard = board => {
  const newBoard = document.createElement('div')
  newBoard.classList.add(`${board.class}`, 'board')
  newBoard.setAttribute('id', `${board.class}`)
  boardContainer.appendChild(newBoard)

  const titleDiv = document.createElement('div')
  titleDiv.classList.add('title-div')
  newBoard.appendChild(titleDiv)

  const circleTitleDiv = document.createElement('div')
  circleTitleDiv.classList.add('circle-title')
  titleDiv.appendChild(circleTitleDiv)

  const circle = document.createElement('div')
  circle.classList.add('circle')
  circle.style.border = `2px solid ${board.theme}`
  circleTitleDiv.appendChild(circle)

  const boardTitle = document.createElement('h3')
  boardTitle.classList.add('title')
  boardTitle.append(document.createTextNode(board.name))
  circleTitleDiv.appendChild(boardTitle)

  const count = document.createElement('p')
  count.classList.add('count')
  count.append(document.createTextNode(board.tasks.length))
  circleTitleDiv.appendChild(count)

  const description = document.createElement('p')
  description.classList.add('description')
  description.append(document.createTextNode(board.description))
  titleDiv.appendChild(description)

  const tasksContainer = document.createElement('div')
  tasksContainer.classList.add('tasks-container')
  newBoard.appendChild(tasksContainer)

  board.tasks.forEach(task => {
    const newTask = createTaskEl(task)
    tasksContainer.appendChild(newTask)
  })

  const addTaskDiv = document.createElement('div')
  addTaskDiv.classList.add('add-task-div')
  newBoard.appendChild(addTaskDiv)

  const addTaskBtn = document.createElement('button')
  addTaskBtn.classList.add('add-task-btn')
  addTaskBtn.append(document.createTextNode('+ Add item'))
  addTaskDiv.appendChild(addTaskBtn)

  const addTaskInput = document.createElement('input')
  addTaskInput.type = 'text'
  addTaskInput.placeholder = 'Enter task details...'
  addTaskInput.classList.add('add-task-input')
  addTaskDiv.appendChild(addTaskInput)
}

datas.forEach(data => {
  createBoard(data)
})
