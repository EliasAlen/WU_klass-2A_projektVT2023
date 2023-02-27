const burger = document.getElementById('burger_menu')
const nav = document.getElementById('nav_links')
const fog = document.getElementById('fog')

function toggleMeny () {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
    fog.classList.toggle('fog_active')
}

burger.addEventListener('click', toggleMeny)