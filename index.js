let toggle = document.querySelector("#toggle")
let closebtn = document.querySelector("#close")
let sidenav = document.querySelector(".sidenav") 
toggle.addEventListener("click", () => {
    sidenav.classList.add("active")
    toggle.classList.add("hidden")
    closebtn.style.display="block"
})
closebtn.addEventListener("click", () => {
    sidenav.classList.remove("active")
    toggle.classList.remove("hidden")
    closebtn.style.display="none"
})