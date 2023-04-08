const toggle = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar-links')[0]

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
