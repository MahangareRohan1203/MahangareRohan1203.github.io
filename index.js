// ============================== MENU SHOW Y HIDDEN ================================
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    //  ============= MENU SHOW =============
    // VALIDATE IF CONSTANT EXISTS
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

// ============== MENU HIDDEN ============
//VALIDATE IF CONSTANT EXISTS 
if(navClose){
    navClose.addEventListener('click' , ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ============== REMOVE MOBILE MENU ============
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

    var typed = new Typed(".typing", {
        strings: ["A Full Stack Developer","A Java Backend Developer", "A Sport Enthusiast"],
        typeSpeed: 100,
        backSpeed: 90,
        loop: true,
    })

let pool = {};
fetch("api.json").then(res => res.json()).then(data =>{
    pool = data;
    //console.log(pool?.RESUME_URL)

    document.getElementById("resume-link-2").href = pool.RESUME_URL_DOWNLOAD_DIRECT_LINK;

    document.getElementById("resume-link-2").addEventListener("click", ()=>{
              window.open(pool.RESUME_URL, "_blank");
    });


    // for nav-bar resume
    
    document.getElementById("resume-link-1").href = pool.RESUME_URL_DOWNLOAD_DIRECT_LINK;

    document.getElementById("resume-link-1").addEventListener("click", ()=>{
              window.open(pool.RESUME_URL, "_blank");
    });
})