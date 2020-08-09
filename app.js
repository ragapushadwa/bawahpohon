const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
let video1 = $(".gallerybox");
var activities=document.getElementById("kotak1");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});


  activities.addEventListener('change', (event) => {
    if (event.target.value=="1"){
      video1.css('display','flex');

    }
    else if(event.target.value=="0"){
      video1.hide();
    }
  });
