const themes = [
  'rgb(13, 177, 98)',
  'rgb(229, 225, 9)',
  'rgb(215, 37, 6)',
  'rgb(13, 129, 178)',
  'rgb(128, 0, 128)'
]

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

const setLocalStorage = datas => {
  localStorage.setItem('datas', JSON.stringify(datas))
  return boardDatas
}

const datas = localStorage.getItem('datas')
  ? JSON.parse(localStorage.getItem('datas'))
  : setLocalStorage(boardDatas)

console.log('Datas', datas)
