// ==== Menu Toggle ==== //
/*function toggleMenu(){
    const menutoggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
}*/

const menutoggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

nav.addEventListener("click", function(){
    nav.classList.toggle("active");
    menutoggle.classList.remove("active")
});

menutoggle.addEventListener("click", function(){
    menutoggle.classList.toggle("active")
    nav.classList.toggle("active")
});


// ===== Change Color of navigation bar when triggered ==== //
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Add active class to the current button (highlight it)
var header = document.getElementById("header");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) { //btn.length getting the range of the list item

  btns[i].addEventListener("click", function() {

  var current = document.getElementsByClassName("active-nav");

  current[0].className = current[0].className.replace(" active-nav", "");

  this.className += " active-nav";
  });
}


// ===== Scroll Reveal Animation ==== //

//Top
const srTop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false

});

srTop.reveal(`.intro-text, 
        .title,
        .about-title,
        .about-text,
        .contact-img,
        .contact-form,
        .bxl-instagram-alt`,{
    interval: 100
})

//Bottom
const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '70px',
    duration: 2000,
    reset: false

});

srBottom.reveal(`.about-img,
    .work-img,
    .intro-img,
    .about-work`,{
    interval: 100
})

//Left
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false

});

srLeft.reveal(`.bxl-facebook-circle,
    .bxl-linkedin-square,
    .bxl-github,
    .right`,{
    interval: 100
})

//Right
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false

});

srRight.reveal(`.bxs-envelope,
.left`,{
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

   if(name == '' || email == '' || message == ''){
       errorMessage();
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

}

function errorMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some field is empty.',
      })
}

function invalidEmailMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is Invalid!',
      })
}


