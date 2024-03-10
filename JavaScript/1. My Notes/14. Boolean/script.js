// Function to copy text to the clipboard
function copyToClipboard(buttonNumber) {
    const codeBlock = document.getElementById("code-block-" + buttonNumber);
    const textToCopy = codeBlock.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    const copyButton = document.getElementById("copy-button-" + buttonNumber);
    copyButton.innerHTML = `<i class="bi bi-clipboard-check-fill"></i>`;
    setTimeout(function () {
        copyButton.innerHTML = `<i class="bi bi-clipboard"></i>`;
    }, 2000); // Reset the button text after 2 seconds
}



//Start Basics
function basics() {
    let isTrue = true; // Declaring a boolean variable with value 'true'
    let isGreater = 10 > 5; // Comparing two numbers - returns 'true'

    document.getElementById('basic-output-1').innerHTML = (isTrue) + "<br>"; // Outputs: true
    document.getElementById('basic-output-1').innerHTML += (isGreater) + "<br>"; // Outputs: true

    // Using boolean values in conditional statements
    if (isTrue) {
        document.getElementById('basic-output-1').innerHTML += ("This will be printed because 'isTrue' is true.") + "<br>";
    } else {
        document.getElementById('basic-output-1').innerHTML += ("This won't be printed.") + "<br>";
    }

    // Using logical operators
    let a = true;
    let b = false;

    document.getElementById('basic-output-1').innerHTML += (a && b) + "<br>"; // Outputs: false (AND operator)
    document.getElementById('basic-output-1').innerHTML += (a || b) + "<br>"; // Outputs: true (OR operator)
    document.getElementById('basic-output-1').innerHTML += (!a) + "<br>"; // Outputs: false (NOT operator)
}
//END Basics



//start Boolean Constructor Function
function Constructor() {
    var positive = Boolean(true);
    var negative = Boolean(false);
    let output = document.getElementById('Constructor-output-1');

    output.innerHTML += (typeof positive) + "<br>";
    output.innerHTML += (typeof negative) + "<br>";

    var x = Boolean(10 > 20);
    var y = Boolean(15 === 15);
    var z = Boolean(20 < 30);
    output.innerHTML += (x) + ", ";
    output.innerHTML += (y) + ", ";
    output.innerHTML += (z);
}
//End Boolean Constructor Function

//start Boolean Constructor2 Function
function constructor2() {
    let result = document.getElementById('const-output-1');
    result.innerHTML += ("0 is " + Boolean(0)) + "<br>";
    result.innerHTML += ("1 is " + Boolean(1)) + "<br>";
    result.innerHTML += ("-15 is " + Boolean(-15)) + "<br>";
    result.innerHTML += ("1 < 2 is " + Boolean(1 < 2)) + "<br>";
    result.innerHTML += ("25 === 5*5 is " + Boolean(25 === 5 * 5)) + "<br>";
    result.innerHTML += ("Any valid string returns " + Boolean("Some string")) + "<br>";
    result.innerHTML += ("Empty string is " + Boolean('')) + "<br>";
    result.innerHTML += ("All object returns " + Boolean([])) + "<br>";
    result.innerHTML += ("All object returns " + Boolean({})) + "<br>";
    result.innerHTML += ("undefined is " + Boolean(undefined)) + "<br>";
    result.innerHTML += ("null is " + Boolean(null)) + "<br>";
    result.innerHTML += ("NaN is " + Boolean(NaN));
}
//END Boolean Constructor2 Function




//start Boolean object
function booleanObject() {
    var bool = true; // boolean
    var boolObj = new Boolean(true); // object
    document.getElementById('boobj-output-1').innerHTML = (typeof bool) + "<br>";
    document.getElementById('boobj-output-1').innerHTML += (typeof boolObj);
}
//end boolena object




//Start String
function boostring() {
    var str1 = "Hello world";
    var str2 = "";

    let output = document.getElementById("string-output-1");
    // negation operator
    output.innerHTML += (!!str1) + "<br>";
    output.innerHTML += (!!str2) + "<br>";

    // Boolean() function
    output.innerHTML += (Boolean(str1)) + "<br>";
    output.innerHTML += (Boolean(str2));
}
//END String




//start method
function method() {
    let boolValue = true; 
    let boolString = boolValue.toString(); // Converts the boolean value to a string
    document.getElementById('method-output-1').innerHTML = (boolString) + "<br>";

    let boolObject = new Boolean(false);
    let boolPrimitive = boolObject.valueOf(); // Retrieves the primitive value of the Boolean object
    document.getElementById('method-output-1').innerHTML += (boolPrimitive);
}
//start method