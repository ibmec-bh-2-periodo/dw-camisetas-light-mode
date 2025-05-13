const lightMode = document.getElementsByTagName('img')[1];
console.log(lightMode)

const logoLight = document.createElement('img')
logoLight.innerHTML = '<img src="./assets/img/Mark.png" alt="Logomarca da loja"/>'

const paiDasLogos = document.

lightMode.addEventListener('click', function(){
    document.body.classList.toggle('modo-claro')
})