var button = document.getElementById("dot");
var dot = document.getElementById("dot");
var arrow = document.getElementsByClassName("arrow");
var arrow1 = document.getElementsByClassName("arrow1");
var arrow2 = document.getElementsByClassName("arrow2");

var clickCount = 0;
var initialLeft = 14.3;
var targetLeft = 14.3; 
var animationInProgress = false;

button.onclick = function() {
    clickCount ++;
    
    if (clickCount === 1) {
        targetLeft = 47.5;
        arrow[0].style.display = "none";
        arrow1[0].style.display = "unset";
        arrow2[0].style.display = "none"; 
    } else if (clickCount === 2) {
        targetLeft = 82.1;  
        arrow[0].style.display = "none";
        arrow1[0].style.display = "none";
        arrow2[0].style.display = "unset";
    } else {
        clickCount = 0; 
        targetLeft = 14.3;
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
    var step = diff * 0.1;

    if (Math.abs(step) < 0.1) {
        dot.style.left = targetLeft + '%';
        animationInProgress = false;
        return;
    }

    dot.style.left = currentLeft + step + '%';
    requestAnimationFrame(moveElement);
}


// $('#main-slider').liquidSlider({
//     slideEaseDuration: 1000, 
//     autoSlideInterval: 50000, 
//   });