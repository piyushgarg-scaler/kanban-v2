const addTaskBtns = document.querySelectorAll(".add-task-btn");
const addTaskInputs = document.querySelectorAll(".add-task-input");
const addTaskDivs = document.querySelectorAll(".add-task-div");

//* Resetting the styles for the add task inputs and buttons which is not currently targeted.
const resetBtns = (currBtn) => {
  const Btns = document.querySelectorAll(".add-task-btn");
  Btns.forEach((btn) => {
    if (btn !== currBtn) {
      btn.style.display = "block";
      btn.nextElementSibling.style.display = "none";
      btn.nextElementSibling.value = "";
    }
  });
};

//* Attaching listener to the add items buttons to toggle between the add item button and input.
const addTaskBtnFeature = (btn) => {
  btn.addEventListener("click", (e) => {
    resetBtns(btn); //$ Goto line --> 5
    btn.style.display = "none";

    const input = btn.nextElementSibling;
    input.style.display = "block";
    input.focus();
  });
};

addTaskBtns.forEach((btn) => {
  addTaskBtnFeature(btn); //$ Goto line --> 17
});

//* Getting the value from the input and creating new element and updating the boardDatasand local storage.
const addTaskInputFeature = (input) => {
  input.addEventListener("keydown", (e) => {
    //* You can get the value from the input through "Enter" key
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value) {
        const newTask = createTaskEl(value); //$ Goto ./createBoard.js line --> 3
        const board = e.target.parentElement.parentElement; //* Targeting the current board

        //*   This is to push the data.
        alterBoardData(newTask, board, 1); //$ Goto ./helper.js line --> 40

        const taskDiv = e.target.parentElement.previousElementSibling;
        taskDiv.appendChild(newTask);

        input.value = "";
        setLocalStorage(datas); //$ Goto ./data.js line --> 39
      } else {
        alert("Please Enter your task details");
      }
    }
    //* Pressing Escape key to hide the input.
    if (e.key === "Escape") {
      input.style.display = "none";
      e.target.previousElementSibling.style.display = "block";
    }
  });
};

addTaskInputs.forEach((input) => {
  addTaskInputFeature(input); //$ Goto line --> 33
});
