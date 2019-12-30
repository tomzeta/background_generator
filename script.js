var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background =
    "linear-gradient(to " +
    getDirection() + 
    ", " +
    color1.value +
    ", " + 
    color2.value +
    ")";

    css.textContent = body.style.background + ";";
}

var right = true;

function getDirection(){
    if(right){
        return "right";
    } else {
        return "left";
    }
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();

