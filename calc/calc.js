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