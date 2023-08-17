
// var button = document.getElementById("dot");
// var dot = document.getElementById("dot"); 
// var arrow = document.getElementsByClassName("arrow");
// var arrow1 = document.getElementsByClassName("arrow1");
// var arrow2 = document.getElementsByClassName("arrow2");

// var initialLeft = 0; 

// function moveDown(object) {
//     var currentLeft = parseInt(object.style.left || 0);
    
//     if (currentLeft >= ) {
//         object.style.left = initialLeft + '%';
//         arrow[0].style.display = "unset";
//         arrow1[0].style.display = "unset";
//     } else {
//         object.style.left = currentLeft + 49 + '%';
//         arrow[0].style.display = "unset";
//         arrow1[0].style.display = "unset";
//     }

//     if (currentLeft >= 75) {
//         arrow2[0].style.display = "unset";
//     } else {
//         arrow2[0].style.display = "unset";
//     }
// }
    

// button.onclick = function() {
//     moveDown(dot);
// }


// var button = document.getElementById("dot");
// var dot = document.getElementById("dot");
// var arrow = document.getElementsByClassName("arrow");
// var arrow1 = document.getElementsByClassName("arrow1");
// var arrow2 = document.getElementsByClassName("arrow2");

// var clickCount = 0;

// button.onclick = function() {
//     clickCount++;
//     moveDown(dot);

//     if (clickCount === 1) {
//         arrow[0].style.display = "unset";
//         arrow1[0].style.display = "unset";
//         arrow2[0].style.display = "unset";
//     } else if (clickCount === 2) {
//         arrow[0].style.display = "unset";
//         arrow1[0].style.display = "unset";
//         arrow2[0].style.display = "unset";
//     }
//       else {
//         clickCount = 0;
//         arrow[0].style.display = "unset";
//         arrow1[0].style.display = "unset";
//         arrow2[0].style.display = "unset";
//     }
// }
// var initialLeft = 0; 

//  function moveDown(object) {
//      var currentLeft = parseInt(object.style.left || 0);
//      id 
    
//      if (currentLeft >=50 ) {
//          object.style.left = initialLeft + '%';

//      } else {
//          object.style.left = currentLeft + 49 + '%';

//      }
//  }

 var button = document.getElementById("dot");
var dot = document.getElementById("dot");
var arrow = document.getElementsByClassName("arrow");
var arrow1 = document.getElementsByClassName("arrow1");
var arrow2 = document.getElementsByClassName("arrow2");

var clickCount = 0;
var initialLeft = 14;
var targetLeft = 14; 
var animationInProgress = false;

button.onclick = function() {
    clickCount++;
    
    if (clickCount === 1) {
        targetLeft = 48;
        arrow[0].style.display = "none";
        arrow1[0].style.display = "unset";
        arrow2[0].style.display = "none"; 
    } else if (clickCount === 2) {
        targetLeft = 81.5;  
        arrow[0].style.display = "none";
        arrow1[0].style.display = "none";
        arrow2[0].style.display = "unset";
    } else {
        clickCount = 14;
        targetLeft = 14;
        arrow[0].style.display = "unset";
        arrow1[0].style.display = "none";
        arrow2[0].style.display = "none";   
    }
    
    if (!animationInProgress) {
        moveElement();
    }
};

function moveElement() {
    animationInProgress = true;
    var currentLeft = parseFloat(dot.style.left || initialLeft);

    var diff = targetLeft - currentLeft;
    var step = diff * 0.3;  // You can adjust this value to control the animation speed

    if (Math.abs(step) < 0.3) {
        dot.style.left = targetLeft + '%';
        animationInProgress = false;
        return;
    }

    dot.style.left = currentLeft + step + '%';
    requestAnimationFrame(moveElement);
}
