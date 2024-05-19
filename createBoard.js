const boardContainer = document.getElementById('board-container')

datas.forEach(board => {
  const newBoard = document.createElement('div')
  newBoard.classList.add('board', `${board.class}`)
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
  tasksContainer.setAttribute('id', 'tasks-container')

  const taskDiv = document.createElement('div')
  taskDiv.classList.add('task')
  taskDiv.setAttribute('draggable', 'true')

  addDraggable(taskDiv)
})

// <div class='board todo' id='todo'>

//   <div class='title-div'>
//     <div class='circle-title'>
//       <div class='circle'></div>
//       <h3 class='title'>Todo</h3>
//       <p class="count">0</p>

//     </div>
//     <p class='description'>This is description</p>
//   </div>

//   <div id='tasks-container'>
//     <div draggable='true' class='task'>
//       <p>Make them Moveable</p>
//     </div>
//   </div>

//   <div id='add-task-div'>
//     <button id='add-task-btn'>+ Add item</button>

//     <input id='add-task-input' type='text' placeholder='Enter task details..' />
//   </div>
// </div>
