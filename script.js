let collapsebtn = document.querySelector(".collapse")
let sidebar = document.querySelector(".side-menu");
let rhs = document.querySelector(".rhs");

collapsebtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")

})

let mobileNavOpener = document.querySelector(".nav-opener");
let mobileNavCloser = document.querySelector(".nav-closer");
let mobileNot = document.querySelector(".notifications-opener");

mobileNavOpener.addEventListener("click", () => {
    sidebar.classList.add("opened")
    mobileNavOpener.style.display = 'none'
    mobileNavCloser.style.display = 'block'
})

mobileNavCloser.addEventListener("click", () => {
    // sidebar.classList.toggle("opened")
    mobileNavOpener.style.display = 'block'
    mobileNavCloser.style.display = 'none'
    sidebar.classList.remove("opened")
})

mobileNot.addEventListener("click", () => {

    rhs.classList.toggle("opened-rhs")
})