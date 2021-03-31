'use strict'
//Select DOM elements
const btnNext = document.querySelector('.btn-next'); 
const btnPrev = document.querySelector('.btn-prev'); 

const slides = document.querySelectorAll('.slide'); 
let curSlide = 0;
const maxSlide = slides.length; 


//Create functions

const goToSlide = function(slide){
    slides.forEach((s,i) => s.style.transform =`translateX(${100*(i-slide)}%)`); 
}

const nextSlide = function(){
    if(curSlide === maxSlide-1){
        curSlide = 0;
    } else{
        curSlide++;
    }
    goToSlide(curSlide);

}
const prevSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide -1; 
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
}
goToSlide(0);
// const init = function(){
//     goToSlide(0);
// }

// //Call init when page load
// init();
//Add event listeners to each selected button
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide); 

