

const logoPrincipal = document.getElementById('logo-principal')
const toggle = document.getElementById('toogle')
const stars = document.getElementById('estrelas')
const logoSecundario = document.getElementById('logo-secundaria')

toggle.addEventListener('click', function(){
    document.body.classList.toggle('modo-claro')
    
    if (document.body.classList.contains('modo-claro')) {
        logoPrincipal.src = 'assets/img/Mark.png'
        toggle.src = 'assets/img/ToogleLight.png'
        stars.src = 'assets/img/StarsLight.png'
        logoSecundario.src = 'assets/img/LogoLight.png'


    }
    else{
        logoPrincipal.src = 'assets/img/logo.png'
        toogle.src = 'assets/img/Toogle.png'
        stars.src = 'assets/img/Stars.png'
        logoSecundario.src = 'assets/img/Logo-2.png'
    }
})