function toggleMenu(){
    const ham_menu = document.querySelector(".hamburger-icon");
    const nav_link= document.querySelectorAll(".nav-links");
    ham_menu.classList.toggle("open");
    nav_link.classList.toggle("open")
}