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

$(".modal").click(function(){
   if(modalOn=true){
      $(".modal").fadeOut("slow") && $(".modalBackdrop").fadeOut("slow");
   }else if(modalOn=false){
      $(".modal").fadeIn("slow") && $(".modalBackdrop").fadeIn("slow");
   }
})

$(".modalBackdrop").on('click', function(){
   if(modalOn=true){
      $(".modal").fadeOut("slow") && $(".modalBackdrop").fadeOut("slow");
   }else if(modalOn=false){
      $(".modal").fadeIn("slow") && $(".modalBackdrop").fadeIn("slow");
   }
})

let modalOn = false;

$(".aboutButton").on('click', function(){
   modalOn = true;
   $(".modal").fadeIn("slow");
   $(".modalBackdrop").fadeIn("slow")
   modal.innerHTML = `
   <p class="briefStatement">Lorem ipsum dolor sit amet, consectetur 
   adipiscing elit, sed do eiusmod tempor 
   incididunt ut labore et dolore magna aliqua.
   </p>
   <div class="aboutTechContainer">
      <h2>front-end</h2>
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
      <h2> back-end</h2>
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
      <h2>et al</h2>
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
   $(".modal").fadeIn("slow");
   $(".modalBackdrop").fadeIn("slow");
   modal.innerHTML =  `
   <div class="pithosContainer">
      <img class="pithosLogo" src="./images/pithos-logo-1.png">
      <img class="pithosCap" src="./images/screencaps/pithos_screen1.png">
      <a href="https://github.com/jasonpbenson/FrontEndProject-Pithos">repo</a>
      <a href="https://jpbenson.com/pithos">demo</a>
      <h3>project description</h3>
      <p>Pithos is a space that allows the user to experience an 'ordinary' 
      thing in an unusual way. We were interested in ecosystems, and wanted to connect our 
      ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, 
      and health; which are their own kinds of ecosystems, or containers. Pithos.</p>
      <h3>built with</h3>
      <p>css3, html5, javascript, jquery</p>
   </div>
      <div class="emOceansContainer">
      <img class="emOceansLogo" src="./images/emOceans-logo-1.png">
      <img class="emOceansCap" src="./images/screencaps/emOceans_screen2.png">
      <a href="https://github.com/jasonpbenson/backEndProject">repo</a>
      <a href="https://jpbenson.com/emoceans">demo</a>
      <h3>project description</h3>
      <p>
      emOceans is a simple web application that allows you to take note of your mood 
      every day using color and language. Each day (and each mood, each memory) forms 
      a tiny drop in the vast and ever-shifting ocean that is every human. We hope to 
      make the observation and appreciation of those shifts and waves more accessible, 
      helpful, and more beautiful.
      </p>
      <h3>built with</h3>
      <p>css3, express, html5, javascript, jquery, mysql, nodejs</p>
   </div>
   `
})

$(".contact").on('click', function(){
   modalOn = true;
   $(".modal").fadeIn("slow");
   $(".modalBackdrop").fadeIn("slow")
   modal.innerHTML = `
   <div class="contactContainer">
      <h2>Jason Benson</h2>
      <h2>Resumé</h2>
      <h2><a href="https://github.com/jasonpbenson">GitHub</a></h2>
      <h2><a href="https://www.linkedin.com/in/jason-benson-960861180/">LinkedIn</a></h2>
   </div>
   `
})

$(".title").on('click', function(){
   modalOn = true;
   $(".modal").fadeIn("slow");
   $(".modalBackdrop").fadeIn("slow");
   modal.innerHTML = `
   <div class="gardenGuy">
   <img src="./images/gardenGuy.svg"/>
   </div>
   <div class="textScroll">
   <p>But the sea which no one tends is also a garden </p>
   </div>
   `
})