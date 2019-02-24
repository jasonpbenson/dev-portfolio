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
   <div class="aboutTechContainer">
      <h2>front end</h2>
      <div class="frontEnd">
         <div class="techIcon">
            <i class="devicon-bootstrap-plain"></i>
            <p>bootstrap</p>
         </div>
         <div class="techIcon">
            <i class="devicon-css3-plain"></i>
            <p>css3</p>
         </div>
         <div class="techIcon">
            <i class="devicon-html5-plain"></i>
            <p>html5</p>
         </div>
         <div class="techIcon">
            <i class="devicon-javascript-plain"></i>
            <p>javascript</p>
         </div>
         <div class="techIcon">
            <i class="devicon-jquery-plain"></i>
            <p>jquery</p>
         </div>
         <div class="techIcon">
            <i class="devicon-react-original"></i>
            <p>react</p>
         </div>
      </div>
      <h2> back end</h2>
      <div class="backEnd">
         <div class="techIcon">
            <i class="devicon-express-original"></i>
            <p>express</p>
         </div>
         <div class="techIcon">
            <i class="devicon-nodejs-plain"></i>
            <p>nodejs</p>
         </div>
         <div class="techIcon">
            <i class="devicon-python-plain"></i>
            <p>python<p>
         </div>
      </div>
      <h2> server/db</h2>
      <div class="serverDb">
         <div class="techIcon">
            <i class="devicon-amazonwebservices-original"></i>
            <p>aws</p>
         </div>
         <div class="techIcon">
            <i class="devicon-apache-plain"></i>
            <p>apache</p>
         </div>
         <div class="techIcon">
            <i class="devicon-mysql-plain"></i>
            <p>mysql</p>
         </div>
      </div>
      <h2>et al.</h2>
      <div class="etAl">  
         <div class="techIcon">
            <i class="devicon-apple-original"></i>
            <p>apple</p>
         </div>
         <div class="techIcon">
            <i class="devicon-chrome-plain"></i>
            <p>chrome</p>
         </div>
         <div class="techIcon">
            <i class="devicon-git-plain"></i>
            <p>git</p>
         </div>
         <div class="techIcon">
            <i class="devicon-github-plain"></i>
            <p>github</p>
         </div>
         <div class="techIcon">
            <i class="devicon-google-plain"></i>
            <p>google</p>
         </div>
         <div class="techIcon">
            <i class="devicon-illustrator-plain"></i>
            <p>illustrator</p>
         </div>
         <div class="techIcon">
            <i class="devicon-jasmine-plain"></i>
            <p>jasmine</p>
         </div>
         <div class="techIcon">
            <i class="devicon-photoshop-plain"></i>
            <p>photoshop</p>
         </div>
         <div class="techIcon">
            <i class="devicon-slack-plain"></i>
            <p>slack</p>
         </div>
         <div class="techIcon">
            <i class="devicon-trello-plain"></i>
            <p>trello</p>
         </div>
         <div class="techIcon">
            <i class="devicon-visualstudio-plain"></i>
            <p>visualstudio</p>
         </div>
      </div> 
   </div>
   `
})

$(".projectsButton").on('click', function(){
   modalOn = true;
   fadeIn()
   modal.innerHTML =  `
   <div class="pithosContainer">
   <img class="pithosLogo" src="./images/pithos-logo-1.png">
   <img class="pithosCap" src="./images/screencaps/pithos_screen1.png">
   <a href="https://github.com/jasonpbenson/FrontEndProject-Pithos">Github</a>
   <a href="">Live Site</a>
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
   <img class="emOceansCap" src="./images/screencaps/emOceans_screen2.png">
   <a href="https://github.com/jasonpbenson/backEndProject">Github</a>
   <a href="">Live Site</a>
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
   <div class="contactContainer">
      <h2>Jason Benson</h2>
      <h2>410-812-4303</h2>
      <h2>jasonbenson3rd@gmail.com</h2>
      <h2><a href="">GitHub</a></h2>
      <h2><a href="">LinkdIn</a></h2>
   </div>
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