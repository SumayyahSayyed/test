let hamburger = document.getElementById("hamburger-icon");
let hamburgerDropdown = document.querySelector(".hamburger-dropdown");

hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerDropdown.classList.toggle("hide");
})


let plus = document.querySelectorAll(".plus-icon");
let para = document.querySelectorAll(".toggle-para");
let dash = document.querySelectorAll(".minus-icon");


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        para[i].classList.toggle("hide");
        plus[i].classList.add("hide");
        dash[i].classList.remove("hide");
    })

    dash[i].addEventListener("click", () => {
        para[i].classList.toggle("hide");
        plus[i].classList.remove("hide");
        dash[i].classList.add("hide");
    })
}

