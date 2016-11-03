"use strict";
// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
/* ------------ VARIABLES --------------- */

 var numOfSections = document.getElementsByTagName("section");

 var outputTarget = document.getElementById("output-target");

 var inputField = document.getElementById("keypress-input");

 var colorButton = document.getElementById("add-color");

 var hulkButton = document.getElementById("make-large");

 var captureButton = document.getElementById("add-border");

 var roundButton = document.getElementById("add-rounding");



function listeners (event) {
 	outputTarget.innerHTML = "You clicked on the " + event.target.innerHTML + " section";
 }

 for (var i=0; i<numOfSections.length; i++) {
 	console.log("listId", numOfSections[i]);
 	numOfSections[i].addEventListener("click", listeners);
 }

// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

var h1Header = document.getElementById("page-title");

h1Header.addEventListener("mouseover", function() {
		console.log("You moved your mouse over the header");
});



// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

h1Header.addEventListener("mouseleave", function() {
		console.log("You left me!!");
});

// 4. When you type characters into the input field, the output element should mirror the text in the input field.

inputField.addEventListener("keyup", function() {
	outputTarget.innerHTML = inputField.value;
});

// 5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.

// 6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.

// 7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.

// 8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.

// 9. The first section's text should be bold.

// 10. The last section's text should be bold and italicized.

// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.