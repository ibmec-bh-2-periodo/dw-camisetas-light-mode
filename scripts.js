
const logoPrincipal = document.getElementById("logo-principal");
const toggle = document.getElementById("toggle");
const Star = document.getElementById("stars");
const FooterL = document.getElementById("logo-footer")

toggle.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");
    
    if (document.body.classList.contains("modo-claro")){
        logoPrincipal.src = "assets/img/Logo-Light.png";
        toggle.src = "assets/img/Toogle-Light.png";
        Star.src = "assets/img/Stars-Light.png";
        FooterL.src = "assets/img/Logo-tailwind-light.png";
        

    }
    else{
        logoPrincipal.src = "assets/img/Logo.png";
        toggle.src = "assets/img/Toogle.png";
        Star.src = "assets/img/Stars.png";
        FooterL.src = "assets/img/Logo-2.png";
    }
});