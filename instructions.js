const instBtn = document.querySelector(".inst-btn");
const instModal = document.querySelector(".inst-modal");

// * To open the instructions tab.
document.addEventListener("keydown", (e) => {
  if ((e.altKey || e.metaKey) && e.key === "i") {
    instBtn.click();
  }
});

//* Stylings to the instructions tab.
instBtn.addEventListener("click", (e) => {
  if (instModal.style.display === "block") {
    instModal.style.display = "none";
  } else {
    instModal.style.display = "block";
  }
});
