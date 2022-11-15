const menuBtn = document.querySelector('.cat-main')
const menu = document.querySelector('.navigation-subitem-list')
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('is-active')
})
