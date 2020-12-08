// ==== Menu Toggle ==== //
function toggleMenu(){
    const menutoggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
}


// ===== Change Color of navitation bar when triggered ==== //
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});




// ===== Scroll Reveal Animation ==== //
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: false

});
sr.reveal(`.intro-text, 
        .intro-img, 
        .title,
        .project-card,
        .about-title,
        .about-text,
        .about-img,
        .contact-img,
        .work-img,
        .contact-form`,{
    interval: 100
})
