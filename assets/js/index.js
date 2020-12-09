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
    distance: '80px',
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


// ===== Validating Email ==== //
function sendMail(){
    var name =   document.getElementById("name").value;
    var email =  document.getElementById("email").value;
    var message =  document.getElementById("message").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    var templateParams = {
        from_name: name,
        to_name: email,
        message: message,

    }; 

    if(name == ''){
        errorMessage();
        document.getElementById("label-name").style.color = "#FF6363";
        document.getElementById("name").style.borderColor = "#FF6363";
    }
    else{
        document.getElementById("label-name").style.color = "#111";
        document.getElementById("name").style.borderColor = "#111";
    }
    
  
    if (email == ''){
        errorMessage();
        document.getElementById("label-email").style.color = "#FF6363";
        document.getElementById("email").style.borderColor = "#FF6363";
    } 
    else if(email.match(pattern)){
        emailjs.send('gmail','portfoliotemplate', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thank you for getting in touch!',
                text: 'I will respond to your message as soon as possible. Thankyou!',
                showConfirmButton: true,
              })
            document.getElementById("name").value = " ";
            document.getElementById("email").value = " ";
            document.getElementById("message").value = " ";
    
         }, function(error) {
            console.log('FAILED...', error);
         });
    }
    else{
       invalidEmailMessage();
    }

    if(message == ''){
        errorMessage();
        document.getElementById("label-message").style.color = "#FF6363";
        document.getElementById("message").style.borderColor = "#FF6363";
    }
    else{
        document.getElementById("label-message").style.color = "#111";
        document.getElementById("message").style.borderColor = "#111";
    }

}

function errorMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some field is Empty!',
      })
}

function invalidEmailMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is Invalid!',
      })
}


