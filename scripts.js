let menu = document.querySelector(".menu");
let aboutButton = document.querySelector(".aboutButton");
let homeButton = document.querySelector(".homeButton");
let projectButton = document.querySelector(".projectButton");
let modalBackdrop = document.querySelector(".modalBackdrop");
let modal = document.querySelector(".modal");

// modalBackdrop.on('click', function () {
//     modalBackdrop.style.display = 'none';
//     modal.style.display = 'none';
// })

// function fadeIn() {
//     modal.style.display = 'flex';
//     modalBackdrop.style.display = 'block';
//     modal.classList.remove('fade-out-modal')
//     modal.classList.add('fade-in-modal')
//     modalBackdrop.classList.remove('fade-out-back')
//     modalBackdrop.classList.add('fade-in-back')
// }

// function fadeOut() {
//     modal.classList.remove('fade-in-modal')
//     modal.classList.add('fade-out-modal')
//     modalBackdrop.classList.remove('fade-in-back')
//     modalBackdrop.classList.add('fade-out-back')
//     setTimeout(displayNone, 2000)
// }

// function displayNone() {
//     modal.style.display = 'none';
//     modalBackdrop.style.display = 'none';
// }

// $(".homeButton").on('click', function(){
//    document.querySelector(".menu").style.transform = "rotate(180deg)";
//    // need to reset rotation value to 0 after every click

// })

let transformed = false;

$(document).ready(function() {
   $( ".homeButton" ).on('click', function(){
      if(transformed == false) {
         document.querySelector(".menu").style.transform = "rotate(180deg)";
         transformed=true;
      }else if(transformed == true) {
         document.querySelector(".menu").style.transform = "rotate(0deg)";
         transformed = false;
     };
   });
 });


// homeButton.addEventListener("mousedown", ()=> {
//    homeButton.classList.add(".home-rotate");
// })