const hamburgerMenu = document.getElementById('hamburger-menu')
const closeIcon = document.getElementById('close-icon')
const navItems = document.getElementById('nav-items')

hamburgerMenu.addEventListener('click', () => {
    navItems.classList.add('flex');
    navItems.classList.remove('hidden');

    hamburgerMenu.classList.add('hidden');
    closeIcon.classList.add('block')
    closeIcon.classList.remove('hidden')
})

closeIcon.addEventListener('click', () => {
    navItems.classList.add('hidden');
    navItems.classList.remove('flex');

    hamburgerMenu.classList.add('block');
    hamburgerMenu.classList.remove('hidden');

    closeIcon.classList.add('hidden')
    closeIcon.classList.remove('block')
})