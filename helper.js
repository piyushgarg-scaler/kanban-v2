const addDraggable = el => {
  if (el) {
    el.addEventListener('dragstart', e => {
      el.classList.add('is-dragging')
    })

    el.addEventListener('dragend', e => {
      el.classList.remove('is-dragging')
    })
  }
}
