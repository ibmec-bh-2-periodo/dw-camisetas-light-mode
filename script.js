const lightMode = document.getElementsByTagName('img')[1]
const logoLight = document.getElementsByTagName('img')[0]

lightMode.addEventListener('click', function() {
    document.body.classList.toggle('modo-claro')

    const isLightMode = document.body.classList.contains('modo-claro')

    if (isLightMode) {
        logoLight.src = './assets/img/Logo-light.png'
    } else {
        logoLight.src = './assets/img/Logo.png'
    }
})