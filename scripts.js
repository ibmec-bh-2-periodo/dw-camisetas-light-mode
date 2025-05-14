const lightMode = document.getElementsByTagName ("img") [1];
console.log(lightMode);

const logoLight = document.createElement ('img')[1];
logoLight.innerHTML = '<img src="./assets/img/logo-light.png" alt="Logomarca da loja'

const paiDasLogos = document.getElementById("header");

lightMode.addEventListener("click",function(){
    document.body.classList.toggle("modo-claro");
    paiDasLogos.appendChild (logoLight);
})