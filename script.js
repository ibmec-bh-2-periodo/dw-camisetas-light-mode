const logoPrincipal = document.getElementById('logo-principal')
const toggle = document.getElementById('toggle')
const stars = document.getElementById('stars')
const logoFooter = document.getElementById('logo-footer')

toggle.addEventListener('click', function() {
    document.body.classList.toggle('modo-claro')

    if (document.body.classList.contains('modo-claro')) {
        logoPrincipal.src = './assets/img/Logo-light.png'
        toggle.src = './assets/img/Toogle-light.png'
        stars.src = './assets/img/Stars-light.png'
        logoFooter.src = 'assets/img/Logofooter-light.png'
    } else {
        logoPrincipal.src = './assets/img/Logo.png'
        toggle.src = './assets/img/Toogle.png'
        stars.src = './assets/img/Stars.png'
        logoFooter.src = 'assets/img/Logo-footer.png'
    }
})