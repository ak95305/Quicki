let Bar1 = document.querySelector(".bar1");
let Bar2 = document.querySelector(".bar2");
let hamburger = document.querySelector(".hamburger");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let bgBlur = document.querySelector(".bgblur");

console.log(hamburgerMenu)

hamburger.addEventListener("click", () => {
    if(Bar1.classList.contains("bar1-ani")){
        Bar1.classList.remove("bar1-ani");
        Bar2.classList.remove("bar2-ani");
        hamburgerMenu.classList.remove("hamburger-menu-ani");
        bgBlur.style.display = "none";

    }

    else{
        Bar1.classList.add("bar1-ani");
        Bar2.classList.add("bar2-ani");
        hamburgerMenu.style.visiblity = "visible";
        hamburgerMenu.classList.add("hamburger-menu-ani");
        bgBlur.style.display = "block";
    }
});

