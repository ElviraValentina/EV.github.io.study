
const burgerMenuBtn =  document.querySelector("#burger-menu-btn")
const burgerMenu =  document.querySelector("#burger-menu")
const burgerMenuClose =  document.querySelector("#burger-menu-close")

burgerMenuBtn.addEventListener ("click", () => {
   burgerMenu.style.left = "0px"
   /*console.log("Проверить в панеле средств рзработчика выполняется ли команда ")*/
})

burgerMenuClose.addEventListener ("click", () =>{
   burgerMenu.style.left = "-400px"
})