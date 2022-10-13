let imgMenu = document.querySelector(".prof-img-menu");
let dropDown = document.querySelector(".list-dropdown");
let burger = document.querySelector(".some-part .burger");
let sideBar = document.querySelector(".sidebar");

const profileToggle =  () => {
    imgMenu.addEventListener("click", function() {
        dropDown.classList.toggle("wire")
    });
};
const sideBarToggle = () => {
    burger.addEventListener("click", function() {
        sideBar.classList.toggle("s-active");
        this.classList.toggle("color");
    });
}

sideBarToggle();




profileToggle();