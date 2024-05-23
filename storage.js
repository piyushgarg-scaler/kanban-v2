
// Saves each board data to localstorage
function saveToLocalStorage(){
    const boards = ['todo-board','progress-board','complete-board'];
    let boardData = {};
    boards.forEach((board)=>{
        const items = [...document.querySelectorAll(`.${board} .item`)];
        boardData[board] = items.map((item)=> item.textContent);
    })
    localStorage.setItem('boardData',JSON.stringify(boardData))
}

// Load item on boards from localstorage
function loadItemsFromLocalStorage(){
    let boardData = JSON.parse(localStorage.getItem('boardData'));
    
    if(boardData){
        Object.keys(boardData).forEach((board)=>{
            let items = boardData[board];
            items.forEach((item)=>{
                addItem(board,item)
            })
        })
    }
}