
const logoPrincipal = document.getElementById("logo-principal");
const toogle = document.getElementById("toogle");
const stars = document.getElementById("stars");
const tailwind = document.getElementById("tailwind");

toogle.addEventListener("click", function(){
    document.body.classList.toggle("modo-claro");

   if(document.body.classList.contains("modo-claro")) {
    logoPrincipal.src = "./assets/img/logowhite.png"
    toogle.src = "./assets/img/botaowhite.png"
    stars.src = "./assets/img/starswhite.png"
    tailwind.src = "./assets/img/tailwind-white.png"

   }
    else {
        logoPrincipal.src = "assets/img/logoblack.png"
        toogle.src ="./assets/img/botaoblack.png"
        stars.src = "./assets/img/Stars.png"
        tailwind.src = "./assets/img/tailwind-black.png"

    }
})