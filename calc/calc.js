// List of buttons
const buttons = document.querySelectorAll('button');

// Input for displaying calculations
const display = document.querySelector('.display')

// For each button, add an onclick method with the calculate function
buttons.forEach(
    function(button){
        button.addEventListener("click", calculate);
    }
);

// Perform the calculations on our calculator
function calculate(event){
    // What was clicked?
    const clickedValue = event.target.value;

    // Handle what was clicked
    // If it's an equal sign
    if(clickedValue === "="){
        // Is the display empty?
        if(display.value !== ""){
            // Calculate the value and display
            display.value = eval(display.value);
        }
    }
    // Did I click clear?
    else if(clickedValue === "C"){
        // Empty the Display
        display.value = "";
    }
    // Otherwise add it to the display
    else{
        // Add whatever I clicked to the display
        display.value += clickedValue;
    }
}