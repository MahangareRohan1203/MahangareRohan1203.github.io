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





    GitHubCalendar(".calendar", "MahangareRohan1203");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "MahangareRohan1203", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "MahangareRohan1203", {
       proxy (MahangareRohan1203) {
         return fetch(`https://your-proxy.com/github?user=${MahangareRohan1203}`)
       }
    }).then(r => r.text())