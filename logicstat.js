"use strict";
console.log("Logic Statements-If, Else-if, Else");
let sick = true;
if (sick) {
    console.log("Take medicines");
}
else {
    console.log("Eat ice-cream");
}
console.log(sick);
let sick2 = false;
if (sick2) {
    console.log("Eat Icecream");
}
else {
    console.log("Take medicines");
}
console.log(sick2);
let weather = "cloudy";
if (weather === "rainy") {
    console.log("Wear a raincoat");
}
else if (weather === "cloudy") {
    console.log("Wear a light jacket");
}
else {
    console.log("Wear sunglasses");
}
