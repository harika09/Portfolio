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

// ===== Send Email ==== //
function sendMail(params){
    var templateParams = {
        from_name: name =  document.getElementById("name").value,
        to_name: email =  document.getElementById("email").value,
        message: message =  document.getElementById("message").value,

    }; 

    emailjs.send('gmail','portfoliotemplate', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById("name").value = " ";
        document.getElementById("email").value = " ";
        document.getElementById("message").value = " ";
     }, function(error) {
        console.log('FAILED...', error);
     });
    
}
