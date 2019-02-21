// 'menu' rotation================================================

let transformed = false;

$( ".homeButton" ).on('click', function(){
   if(transformed == false) {
      document.querySelector(".menu").style.transform = "rotate(180deg)";
      transformed=true;
   }else if(transformed == true) {
      document.querySelector(".menu").style.transform = "rotate(0deg)";
      transformed = false;
   };
});

//  'modal' functions============================================

let modal = document.querySelector(".modal");
let modalBackdrop = document.querySelector(".modalBackdrop")

function fadeIn() {
   modal.style.display = 'block';
   modalBackdrop.style.display = 'block';
   modal.classList.remove('fade-out-modal')
   modal.classList.add('fade-in-modal')
   modalBackdrop.classList.remove('fade-out-back')
   modalBackdrop.classList.add('fade-in-back')
}

function fadeOut() {
   modal.classList.remove('fade-in-modal')
   modal.classList.add('fade-out-modal')
   modalBackdrop.classList.remove('fade-in-back')
   modalBackdrop.classList.add('fade-out-back')
   setTimeout(displayNone, 2000)
}

function displayNone() {
   modal.style.display = 'none';
   modalBackdrop.style.display = 'none';
}

$(".modal").on('click', function(){
   if(modalOn=true){
      fadeOut()
   }
})

$(".modalBackdrop").on('click', function(){
   if(modalOn=true){
      fadeOut()
   }
})

let modalOn = false;

$(".aboutButton").on('click', function(){
   modalOn = true;
   fadeIn()
   modal.innerHTML = `
   <p>Lorem ipsum dolor sit amet, consectetur 
   adipiscing elit, sed do eiusmod tempor 
   incididunt ut labore et dolore magna aliqua.
   </p>
   `
})

$(".projectsButton").on('click', function(){
   modalOn = true;
   fadeIn()
   modal.innerHTML =  `
   <div class="pithosContainer">
   <img class="pithosLogo" src="./images/pithos-logo-1.png">
   <a href="https://github.com/jasonpbenson/FrontEndProject-Pithos">Github</a>
   <a href="">Live Site</a>
   <img class="pithosCap" src="./images/screencaps/pithos_screen1.png">
   <h3>project description</h3>
   <p>Pithos is a space that allows the user to experience an 'ordinary' 
   thing in an unusual way. We were interested in ecosystems, and wanted to connect our 
   ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, 
   and health; which are their own kinds of ecosystems, or containers. Pithos.</p>
   <h3>tech</h3>
   <p>HTML, CSS, JavaScript, jQuery, Google Maps API</p>
   </div>
   <div class="emOceansContainer">
   <img class="emOceansLogo" src="./images/emOceans-logo-1.png">
   <a href="https://github.com/jasonpbenson/backEndProject">Github</a>
   <a href="">Live Site</a>
   <img class="emOceansCap" src="./images/screencaps/emOceans_screen2.png">
   <h3>project description</h3>
   <p>
   emOceans is a simple web application that allows you to take note of your mood 
   every day using color and language. Each day (and each mood, each memory) forms 
   a tiny drop in the vast and ever-shifting ocean that is every human. We hope to 
   make the observation and appreciation of those shifts and waves more accessible, 
   helpful, and more beautiful.
   </p>
   <h3>tech</h3>
   <p>HTML, CSS, JavaScript, jQuery, Express, EJS, MySQL, chroma.js, datamuse API</p>
   </div>
   `
})

$(".contact").on('click', function(){
   modalOn = true;
   fadeIn()
   modal.innerHTML = `
   <h1>Jason Benson</h1>
   <h2>410-812-4303</h2>
   <h2>jasonbenson3rd@gmail.com</h2>
   <h2><a href="">GitHub</a></h2>
   <h2><a href="">LinkdIn</a></h2>
   `
})

$(".title").on('click', function(){
   modalOn = true;
   fadeIn()
   modal.innerHTML = `
   <div class="gardenGuy">
   <img src="./images/gardenGuy.svg"/>
   </div>
   <div class="textScroll">
   <p>But the sea which no one tends is also a garden </p>
   </div>
   `
})