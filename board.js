const items = document.querySelectorAll(".task");
const boards = document.querySelectorAll(".board");

//* Attaching each draggable funtion to each of the tasks.
items.forEach((item) => {
  addDraggable(item); //$ Goto ./helper.js line --> 4
});

//* Attaching drag over listener to each of the boards to capture the dragged task.
const constructDragOverToBoards = () => {
  boards.forEach((board) => {
    addDragOver(board); //$ Goto line --> 9
  });
};

const addDragOver = (board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault(); //* Without this the cursor will always be disabled.

    const taskEl = document.querySelector(".is-dragging");
    const taskConatainer = board.querySelector(".tasks-container");
    const closestElement = getClosestElement(board, e.clientY); //$ Goto line --> 32

    if (closestElement) {
      taskConatainer.insertBefore(taskEl, closestElement);
    } else {
      taskConatainer.appendChild(taskEl);
    }
  });
};

//* To get the closest task element to the dragging task.
const getClosestElement = (board, yAxis) => {
  const tasksInThisBoard = board.querySelectorAll(".task:not(.is-dragging)");

  let closestEl = null;
  let closestDistance = Number.NEGATIVE_INFINITY;

  tasksInThisBoard.forEach((task) => {
    const boundry = task.getBoundingClientRect();
    const top = boundry.top;

    const distance = yAxis - top;

    if (distance < 0 && distance > closestDistance) {
      closestDistance = distance;
      closestEl = task;
    }
  });
  return closestEl;
};

constructDragOverToBoards(); //$ Goto line --> 9
