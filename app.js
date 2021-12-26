const mybutton = document.getElementById("myBtn");
const showMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
mobileMenu.addEventListener('click',()=>{
    showMenu.classList.toggle('show')
    
})

//show top button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//scroll all the way to top

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


