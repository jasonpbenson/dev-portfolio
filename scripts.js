$('.outerWrapper').on('click', function (){
    document.querySelector(".modal1").style.display = 'none';
})

$('.contact').on('click', function(){

})


$(".aboutButton").on('click', function(){
    document.querySelector(".aboutText").innerHTML = 
        `<div class="aboutContainer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.
        </div>
        `
    document.querySelector(".contentContainer").style.height = "65vh";
    document.querySelector(".contentContainer").style.transition = "height 1s";
    document.querySelector(".contentContainerBackground").style.opacity = ".1";
    document.querySelector(".contentContainerBackground").style.transition = "opacity 1s";
    document.querySelector(".aboutContainer").style.outline = "solid 1px #00b4ff";
    document.querySelector(".aboutContainer").style.padding = "1rem";
    document.querySelector(".aboutText").style.opacity = "1";
    document.querySelector(".aboutText").style.transition = "opacity 2s";
    document.querySelector(".aboutText").style.display = "flex";
    document.querySelector(".projectContainer").style.display = "none";

})

$(".projectsButton").on('click', function(){
    document.querySelector(".projectContainer").innerHTML =
        `<div class="pithosContainer">
        <h1>pithos</h1>
        <img class="pithosCap" src="./images/screencaps/pithos_screen1.png">
        <a href="https://github.com/jasonpbenson/FrontEndProject-Pithos">Github</a>
        <a href="">live site</a>
        <h3>project description</h3>
        <p>Pithos is a space that allows the user to experience an 'ordinary' 
        thing in an unusual way. We were interested in ecosystems, and wanted to connect our 
        ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, 
        and health; which are their own kinds of ecosystems, or containers. Pithos.</p>
        <h3>technologies</h3>
        <p>HTML, CSS, JavaScript, jQuery, Google Maps API</p>
        </div>
        <div class="emOceansContainer">
        <h1>emOceans</h1>
        <img class="emOceansCap" src="./images/screencaps/emOceans_screen2.png">
        <a href="https://github.com/jasonpbenson/backEndProject">Github</a>
        <a href="">live site</a>
        <h3>project description</h3>
        <p>
        emOceans is a simple web application that allows you to take note of your mood 
        every day using color and language. Each day (and each mood, each memory) forms 
        a tiny drop in the vast and ever-shifting ocean that is every human. We hope to 
        make the observation and appreciation of those shifts and waves more accessible, 
        helpful, and more beautiful.
        </p>
        <h3>technologies</h3>
        <p>HTML, CSS, JavaScript, jQuery, Express, EJS, MySQL, chroma.js, datamuse API</p>
        `
    document.querySelector(".contentContainer").style.height = "65vh";
    document.querySelector(".contentContainer").style.transition = "height 1s";
    document.querySelector(".contentContainerBackground").style.opacity = ".1";
    document.querySelector(".contentContainerBackground").style.transition = "all 1s";
    document.querySelector(".aboutText").style.display = "none";
    document.querySelector(".projectContainer").style.display = "inline";
    document.querySelector(".projectContainer").style.opacity = "1";
    document.querySelector(".pithosContainer").style.outline = "solid 1px #00b4ff";
    document.querySelector(".pithosContainer").style.padding = "1rem";
    document.querySelector(".emOceansContainer").style.outline = "solid 1px #00b4ff";
    document.querySelector(".emOceansContainer").style.padding = "1rem";
    document.querySelector(".projectContainer").style.padding = "1rem";
    document.querySelector(".pithosCap").style.width = "50vw";
    document.querySelector(".emOceansCap").style.width = "50vw";
})

$(".homeButton").on('click', function(){
    document.querySelector(".contentContainer").style.height = "0px";
    document.querySelector(".contentContainer").style.transition = "height 1s";
    document.querySelector(".contentContainerBackground").style.opacity = "1";
    document.querySelector(".contentContainerBackground").style.transition = "opacity 1s";
    document.querySelector(".aboutText").style.opacity = "0";
    document.querySelector(".aboutText").style.transition = "opacity 2s";
    
})
