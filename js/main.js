let navBtn = document.querySelector(".navbar .navBtn");
let listDiv = document.querySelector(".navbar ul");
let firstRight = document.querySelector(".right .right1");
let secondRight = document.querySelector(".right .right2");
let thirdRight = document.querySelector(".right .right3");
let forthRight = document.querySelector(".right .right4");
let firstOpenlay = document.querySelector(".right .openlay1");
let secondOpenlay = document.querySelector(".right .openlay2");
let thirdOpenlay = document.querySelector(".right .openlay3");
let forthOpenlay = document.querySelector(".right .openlay4");

let menTit = document.querySelector('.ahmed');
let cardDivs =document.querySelectorAll(".card")
let menImg = document.querySelectorAll(".card .card-content .image");
let hoverIcons = document.querySelectorAll(".card .card-content .image section");


menImg.forEach((img)=>{
  img.addEventListener("mouseover" ,(e)=>{
    hoverIcons.forEach((div )=>{
      div.style.display ="none"
      e.target.nextElementSibling.style.display="block"  
img.addEventListener('mouseout' ,()=>{
  div.style.display="none"
})
    })
  })
})

//social
let socialOverlay = document.querySelectorAll(".social_imgs  .overlay")
let socalImgs = document.querySelectorAll(".social_imgs div img")
let socialDiv = document.querySelector(".social_imgs")
//
navBtn.addEventListener("click", () => {
  listDiv.classList.toggle("list");
})
//
/*
let btnOpenlay = document.querySelectorAll(".openlay .btn")
btnOpenlay.forEach((btn)=>{
  btn.addEventListener("click" ,(e)=>{
    e.target.classList.add('active')
  })
})
*/
firstRight.addEventListener("mouseover", () => {
  firstOpenlay.style.display = "block"
})
firstRight.addEventListener("mouseout", () => {
  firstOpenlay.style.display = "none"
})
secondRight.addEventListener("mouseover", () => {
  secondOpenlay.style.display = "block";

})
secondRight.addEventListener("mouseout", () => {
  secondOpenlay.style.display = "none"
})
thirdRight.addEventListener("mouseover", () => {
  thirdOpenlay.style.display = "block"
})
thirdRight.addEventListener("mouseout", () => {
  thirdOpenlay.style.display = "none"
})
forthRight.addEventListener("mouseover", () => {
  forthOpenlay.style.display = "block"
})
forthRight.addEventListener("mouseout", () => {
  forthOpenlay.style.display = "none"
});
//



//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// social

  socialDiv.addEventListener("mouseover", (e) => {
    const mark = e.target.dataset.mark;
   
      socialOverlay.forEach((overlay)=>{
        overlay.style.display ="none"
        if(mark){
        
         let x = document.getElementById(mark);
         x.style.display="block"
        }
      })
    
  
  })
