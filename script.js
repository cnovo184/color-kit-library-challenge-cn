// ✅ Add External ColorKit Library
// Color Kit Library
let script = document.createElement("script");

script.src = "https://codepen.io/manikoth/pen/NPKVOxm.js";

document.head.appendChild(script);
// https://codepen.io/manikoth/pen/NPKVOxm.js

// Get Stuff

// Set variable for HTML `body` element
let bodyElement = document.querySelector("body");

// ✅ Check-Check: log out the `body` element in the console
console.log(bodyElement);

// ✅ Check-Check: get and attach the node for the background color with `.style.backgroundColor`
bodyElement.style.backgroundColor = "lightblue";

// Set Stuff

// ✅ Check-Check: assign a background color to "hard code it"
// Hint: Is the color a string, number, or boolean?
bodyElement.style.backgroundColor = "lightblue";

// dynamically set backgound color with `colorkit.random()` function/method
bodyElement.style.backgroundColor = colorkit.random();

// Sparkle effect for funzies
// replace❓ with variable for the `body` element
colorkit.sparkle(bodyElement);
