let menu = document.getElementById("icon-menu");
let nav = document.getElementById("nav");
let close = document.getElementById("close")

menu.addEventListener("click",()=>{nav.classList.add("menu");});
menu.addEventListener("click",()=>{menu.classList.add("delf");});
close.addEventListener("click",()=>{nav.classList.remove("menu")});
close.addEventListener("click",()=>{menu.classList.remove("delf")});