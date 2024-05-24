const searchInput = document.getElementById("search-input");

// Focusing on the search input with "alt + s".
document.addEventListener("keydown", (e) => {
  if ((e.altKey || e.metaKey) && e.key === "s") {
    searchInput.focus();
  }
});

// A debounce function for the search input for performance.
const debounce = (handleInputFunc, delay) => {
  let timeoutId;
  return (...args) => {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => handleInputFunc.apply(context, args), delay);
  };
};

// To display only the tasks which has the searched content in it.
const handleInput = (e) => {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    if (
      !task.children[0].innerText
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      task.style.display = "none";
    } else {
      task.style.display = "block";
    }
  });
};

// Attaching debounce function to the input.
searchInput.addEventListener("input", debounce(handleInput, 500));

// To unFocus the search input.
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    searchInput.blur();
  }
});
