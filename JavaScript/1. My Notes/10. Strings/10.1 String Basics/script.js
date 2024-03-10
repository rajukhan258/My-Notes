//START # String literal
function literal() {
    // Single quotes
    let str1 = 'String from single quotes';
    // Double quotes
    let str2 = "String from Double quotes";
    // Backticks
    let str3 = `String from Backticks`;

    document.getElementById("literal-output-1").innerHTML = `typeof str1: ${typeof str1} <br> typeof str1: ${typeof str2} <br> typeof str1: ${typeof str3}`;
}
//END # String literal




//START String constructor
function Constructor() {
    // String object
    let stringConstructor = String('Hello World');

    document.getElementById("constructor-output-1").innerHTML = typeof stringConstructor;
}
// END String constructor





//START Multiline String
function Multiline() {
    // Creating a multiline string using backticks
    let webstack = `Languages:
        *HTML
        *CSS
        *JavaScript`;
    // Displaying the multiline string in an HTML element
    document.getElementById("Multiline-output-1").innerHTML = webstack;
}


function Multiline2() {
    // Creating a multiline string using escape characters
    let webStack = "Languages: \
  * HTML \
  * Javascript \
  * CSS ";
    // Displaying the multiline string in an HTML element
    document.getElementById("Multiline2-output-1").innerHTML = webStack;
}
//END Multiline String





//START Length Of String
function lengthOfString() {
    let str = "Hello World";

    //getting length
    let length = str.length;

    // Displaying output in an HTML element
    document.getElementById("Length-output-1").innerHTML = length;
}
//END Length Of String




//START Accessing characters in string
function Accessing() {
    let str = "Hello World!";

    // accessing characters
    let char1 = str[0];
    let char2 = str[6];

    // Displaying output in an HTML element
    document.getElementById("Accessing-output-1").innerHTML = `index 0: ${char1}<br> index 5: ${char2}`;
}
//END Accessing characters in string






//START Escape Character in Javascript
function escape() {
    // Using escape character \" to include double quotes inside the string
    let ocean = "Color of \"ocean\" is Blue.";

    // Displaying output in an HTML element
    document.getElementById("Escape-output-1").innerHTML = ocean;
}
//END Escape Character in Javascript