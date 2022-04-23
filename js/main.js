let menu = document.querySelector(".hamburger");
let nav = document.querySelector(".nav-ul");
let sectionTwo = document.querySelector(".section-2 .sec-2")
let sectionThree = document.querySelector(".section-3")

menu.addEventListener("click",function(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        nav.style.display = "none";
    }else{
        menu.classList.add("active")
        nav.style.display = "flex";
    }
})


window.addEventListener("scroll",function(){
    if(window.screen.availWidth <= 480){
        if(window.scrollY > 200){
            sectionTwo.classList.add("active");
        }
        if(window.scrollY >= 1350){
            sectionThree.classList.add("active")
        }
    }
    if(window.screen.availWidth >= 480){
        if(window.scrollY > 200){
            sectionTwo.classList.add("active");
        }
        if(window.scrollY >= 700){
            sectionThree.classList.add("active")
        }
    }

})