// function Hiding(id1, id2, id3, id4, id5, id6) {
//     var clickedItem = document.getElementById(id1);

//     var clickedItemImage = document.getElementById(id1+"-image")

//     var divOne = document.getElementById(id2);
//     var divTwo = document.getElementById(id3);
//     var divThree = document.getElementById(id4);
//     var divFour = document.getElementById(id5);
//     var divFive = document.getElementById(id6);
//     var parentContainer = document.getElementById("playlist-container")

//     if (divOne.style.display !== "none") {
//         clickedItem.style.maxWidth = 'none';
//         divOne.style.display = "none";
//         divTwo.style.display = "none";
//         divThree.style.display = "none";
//         divFour.style.display = "none";
//         divFive.style.display = "none";

//         parentContainer.style.height = "220px";

//         clickedItem.style.gridColumn = "span 3";
//         clickedItem.style.gridRow = "span 3";

//         clickedItemImage.style.width = "220px";
//         clickedItemImage.style.height = "100%";
//         clickedItem.style.transition = "0.5s";

//         getPlaylistText(id1);

//     } 
    
//     else {
        
//         divOne.style.display = "flex";
//         divTwo.style.display = "flex";
//         divThree.style.display = "flex";
//         divFour.style.display = "flex";
//         divFive.style.display = "flex";    
        
//         parentContainer.style.height = "auto";

//         clickedItem.style.transition = "0.5s";
//         // transition: 0.5s;

//         clickedItem.style.gridColumn = "span 1";
//         clickedItem.style.gridRow = "span 1";

//         clickedItemImage.style.width = "100px";
//         clickedItemImage.style.height = "100px";
//         returnTitle(id1);
//     }
// }

// function getPlaylistText(id1) {
//     var gettingInfo = document.getElementById(id1+'-text');

//     switch(id1) {
//         case 'playlist-one':
//             gettingInfo.innerHTML = "More details will go here";
//             break;

//         case 'playlist-two':
//             gettingInfo.innerHTML = "More details will go here";
//             break;

//         case 'playlist-three':
//             gettingInfo.innerHTML = "More details will go here";
//             break;

//         case 'playlist-four':
//             gettingInfo.innerHTML = "More details will go here";
//             break;

//         case 'playlist-five':
//             gettingInfo.innerHTML = "More details will go here";
//             break;

//         case 'playlist-six':
//             gettingInfo.innerHTML = "More details will go here";
//             break;

//         default:
//             gettingInfo.innerHTML = "Something went wrong!"
        
//     }
// }

// function returnTitle(id1) {
//     var gettingInfo = document.getElementById(id1+'-text');

//     switch(id1) {
//         case 'playlist-one':
//             gettingInfo.innerHTML = "Home";
//             break;
//         case 'playlist-two':
//             gettingInfo.innerHTML = "About";
//             break;

//         case 'playlist-three':
//             gettingInfo.innerHTML = "Contact";
//             break;

//         case 'playlist-four':
//             gettingInfo.innerHTML = "Project 1";
//             break;

//         case 'playlist-five':
//             gettingInfo.innerHTML = "Project 2";
//             break;

//         case 'playlist-six':
//             gettingInfo.innerHTML = "Project 3";
//             break;

//         default:
//             gettingInfo.innerHTML = "Something went wrong!"
        
//     }
// }



function properGreeting() {
    /**
     * Gets the Hour of the current and displays the message depending on the time of day
     */

    var message = document.getElementById('greeting-message');
    var d = new Date();
    var hour = d.getHours();

    if (hour < 12) {
        message.innerHTML = "Good Morning";
    } else if (hour < 18) {
        message.innerHTML = "Good Afternoon";
    } else {
        message.innerHTML = "Good Evening"
    }
}

properGreeting();


function heartCheckbox () {
    // /* 
    // * Something
    //  */
    // console.log("It was clicked")
    var redHeart = document.getElementById('red-heart');
    var greyHeart = document.getElementById('grey-heart');

    if (greyHeart.style.display === 'block') {
        greyHeart.style.display = "none";
        redHeart.style.display = "block";
    } else {
        greyHeart.style.display = "block";
        redHeart.style.display = "none";
    }

}

function returnHome () {
    var homeContainer = document.getElementById('home-container');
    var aboutMeContainer = document.getElementById('about-me-container');
    var contactMeContainer = document.getElementById('contact-me-container'); 
    var sectionTwoContainer = document.getElementById('section-two-container');
    var firesafeContainer = document.getElementById('firesafe-container');
    var froggyJumperContainer = document.getElementById('froggy-jumper-container');
    var spotifyPortfolioContainer = document.getElementById('spotify-portfolio-container');
    var dropdownContainer = document.getElementById('dropdown');

    homeContainer.style.display = "flex";
    aboutMeContainer.style.display = "none";
    contactMeContainer.style.display = "none";
    sectionTwoContainer.style.display = "none";
    firesafeContainer.style.display = "none";
    froggyJumperContainer.style.display = "none";
    spotifyPortfolioContainer.style.display = "none";
    dropdownContainer.style.display = "none";
}

function HidingContainers(chosenContainerID) {

    var clickedContainer = document.getElementById(chosenContainerID);
    var homeContainer = document.getElementById('home-container');

    clickedContainer.style.display = "flex";
    homeContainer.style.display = "none";

}


document.getElementById("backward-button").addEventListener("click", returnHome());




function dropdownMenu() {
    var menu = document.getElementById("dropdown");
    var techTools = document.getElementById("tech-tools");
    var homeContainer = document.getElementById('home-container');
    
    console.log("Testing");
    
    // menu.style.display = "block";
    // console.log(menu.style.marginLeft)
    
    if (menu.style.display == "block") {
        homeContainer.style.display = "flex";
        menu.style.display = "none";

    } else {
        homeContainer.style.display = "none";
        menu.style.display = "block";
        // menu.style.position = "fixed";
        menu.style.height = "fit-content";
        menu.style.marginTop = "5rem";
        menu.style.paddingBottom = "6rem"
        menu.style.backgroundColor = "black";
        menu.style.width = "auto";
        menu.style.overflowY = "scroll";
    }
}