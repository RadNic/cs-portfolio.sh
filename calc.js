// JavaScript File
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    if  (dropdown.value == "+"){ //addition 
        answer = parseInt(input1.value) + parseInt(input2.value); //input1 is the first number entered, input2 is the second number entered
        display.innerHTML = answer;
    }
    if  (dropdown.value == "-"){ //dropdown is how you choose the sign or operation that you want to use
        answer = parseInt(input1.value) - parseInt(input2.value); 
        display.innerHTML = answer;
    }
    if  (dropdown.value == "x"){ //mulitplication
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer; 
    }
    if  (dropdown.value == "/"){ //division
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "^"){ //to the power of
        answer = Math.pow (parseInt(input1.value), parseInt(input2.value))
        display.innerHTML = answer;
    }
    if (dropdown.value == "sqrt"){ //square root
        answer = Math.sqrt (parseInt(input1.value)); //only one input because you only need one number to square root or cube root
        display.innerHTML = answer;
    }
    if (dropdown.value == "cbrt"){ //cube root
        answer = Math.cbrt (parseInt(input1.value));
        display.innerHTML = answer;
    }
}