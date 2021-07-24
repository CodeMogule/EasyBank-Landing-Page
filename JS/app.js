const hamBtn = document.querySelector('.hamburger')
const fluid = document.querySelector('.toggle-btn')
const mobileMenu = document.querySelector('.mobile-menu')
const closeButton = document.querySelector('.close')
const body = document.querySelector('body')
const pageWrap = document.querySelector('.page-wrap')

function showMenu(event){
    event.preventDefault()
  hamBtn.style.display = 'none'
  closeButton.style.display = 'block'
    mobileMenu.style.top = '13vh'
    body.classList.add('minimize')
    pageWrap.classList.add('nav-dark')
}

function closeMenu(event){
    mobileMenu.style.top = '-100vh'
    event.preventDefault()
    hamBtn.style.display = 'block'
    closeButton.style.display = 'none'
    body.classList.remove('minimize')
    pageWrap.classList.remove('nav-dark')
}
