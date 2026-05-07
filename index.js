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

    // Render Projects
    const projectsContainer = document.getElementById("projects");
    if (projectsContainer && pool.PROJECTS) {
        projectsContainer.innerHTML = pool.PROJECTS.map(project => `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project__data">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <p class="project-tech-stack"> <b> Tech Stack: </b> ${project.techStack} </p>
                    <div class="project__buttons">
                        <a class="project-github-link button" href="${project.github}" target="_blank">GitHub</a>
                        <a class="project-deployed-link button" href="${project.link}" target="_blank">${project.linkLabel}</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
})