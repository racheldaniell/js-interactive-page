/* add JS file! */
/**  for DOM MANIPULATION  **/


// 1 - A SIMPLE MESSAGE BUTTON 

// First we need to find/get/grab the related piece in HTML
// declare a const variable to "grab" the html element 
// name it something intuitive in camelCase
// use the methods beginning in document.getElementBy... 



// write a function - something that will happen onClick 
// pay careful attention to syntax/punctuation here 


  // show a message when user clicks 


function myWriting() {
     window.alert("All work and no play makes Fluffy a bored kitten");
}
  
function  myDateFunction() {
   window.alert('The time is: '+Date());
   }

// 2 - CHANGE THE HTML ON SCREEN USING JS!

// declare and intialize a const variable to grab your HTML button
// declare and initialize a const variable to grab the HTML class/element/id you want to impact
// write a function to change text color
// THEN update HTML to have name of your function on click
// could create another button to undo this or create a radio button selection

// const myColorText = document.getElementById("color-text");

function myColorChange() {
   document.getElementById("color-text").style.color = "blue";
 }
 
 function myColorChange2() {
   document.getElementById("color-text").style.color = "red";
 }
 
// JS that will apply a whole new style code block from CSS

 function myStyleChange() {
   document.getElementById("changeable-text-02").setAttribute("class","styled-text-updated");
   // optional change to text of the reset button
   document.getElementById("reset-text").innerHTML="Reset";
  }

 function resetText() {
   document.getElementById("changeable-text-02").setAttribute("class", "styled-text");
  // optional change to text of the reset button
   document.getElementById("reset-text").innerHTML="Restored";
   }

   
// 3 - MORE COMPLEXITY - 3 PIECES WORKING TOGETHER

// Now add 3 things to work together 
// add 3 CONST variables to hold interactive content

/* first: declare variables for each interface item */
/* these can be const variables as they refer to the element item overall */

const myLabel = document.getElementById('name-label');
const myInput = document.getElementById('name-input');
const myButton = document.getElementById('name-submit');

 /* second: declare variable to hold user input */

 let petName;
 
/* third: write a function to do things with that user input! */

 function updatePetName() {
    petName = myInput.value;
    window.alert('WOW! Love that pet name! ' + petName);
  myLabel.innerText = 'You entered the pet name '+ petName + ' - Update it here: ';
  myButton.innerText = 'Change Pet Name';
 }

   // and there you have updated the name using the customized value of the input element!

   // you could also: use the user's name in a window alert using template literals syntax
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
