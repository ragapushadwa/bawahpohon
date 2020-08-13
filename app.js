const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
let video1 = $(".gallerybox");
let video2 = $(".gallerybox1");
let video3 = $(".gallerybox2");
let video4 = $(".gallerybox3");
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
      video2.hide();
      video3.hide();
      video4.hide();

    }
    else if(event.target.value=="2"){
      video2.css('display','flex');
      video1.hide();
      video3.hide();
      video4.hide();
    }
    else if(event.target.value=="3"){
      video3.css('display','flex');
      video2.hide();
      video1.hide();
      video4.hide();
    }
    else if(event.target.value=="4"){
      video4.css('display','flex');
      video2.hide();
      video3.hide();
      video1.hide();
    }
    else{
      video4.hide();
      video2.hide();
      video3.hide();
      video1.hide(); 
    }
  });
