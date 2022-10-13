let imgMenu = document.querySelector(".prof-img-menu");
let dropDown = document.querySelector(".list-dropdown");
let navBar = document.querySelector(".menu");
let burger = document.querySelector(".burger");

const profileToggle =  () => {
    imgMenu.addEventListener("click", function() {
        dropDown.classList.toggle("wire")
    });
};
const navBarToggle = () => {
    burger.addEventListener("click", function() {
        navBar.classList.toggle("menuactive");
        this.classList.toggle("cancel");
    });
}

navBarToggle();
profileToggle();