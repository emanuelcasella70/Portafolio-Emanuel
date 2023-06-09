let menu = document.getElementById("icon-menu");
let nav = document.getElementById("nav");
let close = document.getElementById("close")

menu.addEventListener("click",()=>{nav.classList.add("menu");});

close.addEventListener("click",()=>{nav.classList.remove("menu")})