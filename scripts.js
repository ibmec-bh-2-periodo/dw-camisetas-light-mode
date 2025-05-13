const whiteMode = document.getElementsByTagName("img")[1];
const whiteIcon = document.getElementsByTagName("img")[0];
console.log(whiteMode);
whiteMode.addEventListener("click", function(){
    document.body.classList.toggle("modo-claro");
    if (document.body.classList.contains("modo-claro")) {
        whiteMode.src = "./assets/img/Toogle2.png";
        whiteIcon.src = "./assets/img/Logo-white.png";
    } else {
        whiteMode.src = "./assets/img/Toogle.png";
        whiteIcon.src = "./assets/img/Logo.png";
    }
})