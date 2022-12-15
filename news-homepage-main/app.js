let ham = document.querySelector('.hamburger');

let web = document.querySelector('.web3-wrapper')

let mobile_menu = document.querySelector('.mobile-nav')

ham.addEventListener('click', function toggler() {
    ham.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
    body.classList.toggle('is-active')
    web.classList.toggle('is-active')
})

let body = document.querySelector('html');