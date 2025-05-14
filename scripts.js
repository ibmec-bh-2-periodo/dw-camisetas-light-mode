
const principal = document.getElementById('principal')
const toggle = document.getElementById('toggle')
const stars = document.getElementById('stars')
const logofooter = document.getElementById('logofooter')

toggle.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");
    principal.src = './assets/img/Logo-Light.png';
    if (document.body.classList.contains('modo-claro')) {
        principal.src = './assets/img/Logo-Light.png';
        toggle.src = './assets/img/Toogle-Light.png'
        stars.src = 'assets/img/Stars-light.png'
        logofooter.src = 'assets/img/Logo-tailwind-light.png'


    } else {
        principal.src = './assets/img/Logo.png'
        toggle.src = './assets/img/Toogle.png'
        stars.src = 'assets/img/Stars.png'
        logofooter.src = 'assets/img/Logo-2.png'
    }
})