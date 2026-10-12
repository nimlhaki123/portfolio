const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const header = document.querySelector("header");

// Open menu
menuBtn.addEventListener("click", function () {
    menu.classList.add("active");
    header.classList.add("menu-open");
});

// Close menu
closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
    header.classList.remove("menu-open");
});

// Close menu after clicking a link
document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
        header.classList.remove("menu-open");
    });
});

function visitMe(){
    alert("welcome to my portfolio")
}