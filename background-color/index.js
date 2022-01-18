window.onresize = screen;
window.onload = screen;

const sizeEl = document.getElementById('size');

function screen() {
  const windowWidth = window.innerWidth;
  sizeEl.innerText = `width: ${windowWidth}px`;
}