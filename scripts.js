const lightMode = document.getElementsByTagName("img")[1];
console.log(lightMode);

lightMode.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");
})