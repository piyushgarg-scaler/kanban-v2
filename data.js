// Defining some themes to the boards
const themes = [
  'rgb(13, 177, 98)',
  'rgb(229, 225, 9)',
  'rgb(215, 37, 6)',
  'rgb(13, 129, 178)',
  'rgb(128, 0, 128)'
]

// 'Task 1', 'Task 2', 'Task 3'
// This is the boards datas
const boardDatas = [
  {
    id: Date.now(),
    name: 'Todo',
    class: 'todo',
    theme: themes[0],
    description: "This item hasn't been started",
    tasks: []
  },
  {
    id: Date.now(),
    name: 'In Progress',
    class: 'in-progress',
    theme: themes[1],
    description: 'This is actively being worked on',
    tasks: []
  },
  {
    id: Date.now(),
    name: 'Done',
    class: 'done',
    theme: themes[2],
    description: 'This has been completed',
    tasks: []
  }
]

// To update the local storage data.
const setLocalStorage = datas => {
  localStorage.setItem('datas', JSON.stringify(datas))
  return boardDatas
}

// Checking for local storage, if present we fetch the data from there, else we render the DOM with the boardDatas
const datas = localStorage.getItem('datas')
  ? JSON.parse(localStorage.getItem('datas'))
  : setLocalStorage(boardDatas) // #Goto line --> 39
