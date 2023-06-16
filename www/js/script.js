var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  
  let popup = document.getElementById("popup");

  function openPopup(){
    popup.classList.add("open-popup")
  }
  function closePopup(){
    popup.classList.remove("open-popup")
  }


















  let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
        })
        e.target.style.color = "#d4a373"
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "block";
        })
    })
})
let menuBtn = document.querySelector(".burger");
let menu = document.querySelector("header");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector("header").classList.remove("open");
  }
});

document.getElementById("menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  document.querySelector("header").classList.remove("open");
});