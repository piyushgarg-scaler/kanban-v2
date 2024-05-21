const instBtn = document.querySelector('.inst-btn')
const instModal = document.querySelector('.inst-modal')

instBtn.addEventListener('click', e => {
  if (instModal.style.display === 'block') {
    instModal.style.display = 'none'
  } else {
    instModal.style.display = 'block'
  }
})
