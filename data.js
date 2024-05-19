const boardDatas = [
  {
    id: 1,
    name: 'Todo',
    class: 'todo',
    description: "This item hasn't been started",
    tasks: ['task1', 'task2', 'task3']
  },
  {
    id: 2,
    name: 'In Progress',
    class: 'in-progress',
    description: 'This is actively being worked on',
    tasks: ['task4']
  },
  {
    id: 3,
    name: 'Done',
    class: 'done',
    description: 'This has been completed',
    tasks: []
  }
]

const datas = localStorage.getItem('datas')
  ? JSON.parse(localStorage.getItem('datas'))
  : boardDatas

console.log(datas)
