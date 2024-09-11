
const header = document.querySelector('.header-container')
const logoSvg = document.querySelector('.logo-svg')

const btnMenu = document.querySelector('.btn-menu')
const menuSvg = document.querySelector('.menu-svg')

const nav = document.querySelector('.nav')
const linkContainer = document.querySelector('.link-container')

let menuOpen = false;
let scrollPos = 0

window.addEventListener("scroll",()=>{
    scrollPos = window.scrollY
    
    if (scrollPos > 25) {
        bgAdd()
    }
    else if(scrollPos <25 && menuOpen === false) {
        bgRemove()

    }
})


function bgAdd() {
    header.classList.add("is-scrolled","shadow")
    logoSvg.classList.add("is-inverted");
    menuSvg.classList.add("is-inverted");
   
    
    
}

function bgRemove() {
    header.classList.remove("is-scrolled","shadow")
    logoSvg.classList.remove("is-inverted");
    menuSvg.classList.remove("is-inverted");
}



btnMenu.addEventListener("click",(e)=> {
    nav.classList.toggle("is-shown");
    menuOpen = !menuOpen
    nav.classList.toggle("shadow");

    if (nav.classList.contains("is-shown")) {
        bgAdd()

    }
    
    else if (!btnMenu.classList.contains("is-shown") && scrollPos === 0){
        bgRemove()
    }
    
})
