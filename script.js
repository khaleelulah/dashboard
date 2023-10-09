let collapsebtn = document.querySelector(".collapse")
let sidebar = document.querySelector(".side-menu");
let rhs = document.querySelector(".rhs");

collapsebtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")

})

let mobileNav = document.querySelector(".nav-opener");
let mobileNot = document.querySelector(".notifications-opener");

mobileNav.addEventListener("click", () => {
    sidebar.classList.toggle("opened")
    sidebar.classList.toggle("collapsed")


})

mobileNot.addEventListener("click", () => {

    rhs.classList.toggle("opened-rhs")
})