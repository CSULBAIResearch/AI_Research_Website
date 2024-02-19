const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobile_menu = document.querySelector('.header .nav-bar ul')
const menu_item = document.querySelectorAll('.header .nav-bar ul li a')

const header = document.querySelector('.header.container')


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = "black";
    }
    else{
        header.style.backgroundColor = "transparent";
    }
})

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active')
        mobile_menu.classList.toggle('active')
    });
});

var swiper = new Swiper(".member-slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            
        },

        520:{
            slidesPerView: 2,
            slidesPerGroup: 2,
            
        },

        950:{
            slidesPerView: 3,
            slidesPerGroup: 3,
            
        },
        
        1200:{
            slidesPerView:5,
            slidesPerGroup: 5,
        },
    },
  });