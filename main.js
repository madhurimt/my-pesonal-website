const ham_menu = document.getElementsByClassName("hamburger-menu");
const nav_link= document.getElementsByClassName("nav-links");
console.log(nav_link);

ham_menu.addEventListener("click",toggleMenu);
nav_link.addEventListener("click",toggleMenu);

function toggleMenu(){
    ham_menu.classList.toggle("open");
    nav_link.classList.toggle("open")

}