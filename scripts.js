
$(".aboutButton").on('click', function(){
    document.querySelector(".aboutText").innerHTML = 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`
    document.querySelector(".contentContainer").style.height = "60vh";
    document.querySelector(".contentContainer").style.transition = "height 1s";
    document.querySelector(".contentContainerBackground").style.opacity = ".1";
    document.querySelector(".contentContainerBackground").style.transition = "opacity 1s";
    document.querySelector(".aboutText").style.opacity = "1";
    document.querySelector(".aboutText").style.transition = "opacity 2s";
    document.querySelector(".aboutText").style.display = "flex";
    document.querySelector(".projectContainer").style.display = "none";

})

$(".projectsButton").on('click', function(){
    document.querySelector(".projectContainer").innerHTML =
        `<h1>Pithos</h1>
        <img class="pithosCap" src="./images/screencaps/pithos_screen1.png">
        <p>
        <h3>Project Description</h3>
        We wanted to create a space that would allow the user to experience an 'ordinary' 
        thing in an unusual way. We were interested in ecosystems, and wanted to connect our 
        ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, 
        and health; which are their own kinds of ecosystems, or containers. Pithos.</p>
        <h3>Technologies</h3>
        <p>HTML, CSS, JavaScript, jQuery, Google Maps API</p>
        <h3>Project Links</h3>
        <a href="https://github.com/jasonpbenson/FrontEndProject-Pithos">Github</a>
        <a href="">Demo</a>
        `
    document.querySelector(".contentContainer").style.height = "60vh";
    document.querySelector(".contentContainer").style.transition = "height 1s";
    document.querySelector(".contentContainerBackground").style.opacity = ".1";
    document.querySelector(".contentContainerBackground").style.transition = "opacity 1s";
    document.querySelector(".aboutText").style.display = "none";
    document.querySelector(".projectContainer").style.display = "inline";
    document.querySelector(".projectContainer").style.opacity = "1";
    document.querySelector(".projectContainer").style.padding = "1rem";
    document.querySelector(".pithosCap").style.width = "50vw";
    document.querySelector(".pithosCap").style.opacity = "1";
})

$(".homeButton").on('click', function(){
    document.querySelector(".contentContainer").style.height = "0px";
    document.querySelector(".contentContainer").style.transition = "height 1s";
    document.querySelector(".contentContainerBackground").style.opacity = "1";
    document.querySelector(".contentContainerBackground").style.transition = "opacity 1s";
    document.querySelector(".aboutText").style.opacity = "0";
    document.querySelector(".aboutText").style.transition = "opacity 2s";
    
})