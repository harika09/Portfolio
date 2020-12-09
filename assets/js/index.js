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


function sendMail(){
    name = document.getElementById("name").value
    email = document.getElementById("email").value
    message = document.getElementById("textarea").value

        Email.send({
            SecureToken: "124ec56d-fd7a-42b7-a63e-b8e70e5ea573",
            To : 'harold.goldensky@gmail.com',
            From : email,
            Name : name,
            Subject : "Portfolio Inquiry",
            Body : message,
            })
            .then(function (alertmessage){
                alert("mail sent successfully")
            });
}
