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


//Start Defining Numbers
function literals() {
    //Integer Literals:
    let integerLiteral = 42; // Integer number literal
    let negativeLiteral = -10; // Negative integer literal
    let binaryLiteral = 0b1010; // Binary number literal (0b prefix)
    let octalLiteral = 0o777; // Octal number literal (0o prefix)
    let hexadecimalLiteral = 0xFF; // Hexadecimal number literal (0x prefix)

    //Floating-Point Literals:
    let floatLiteral = 3.14; // Floating-point number literal
    let anotherFloat = -0.01; // Negative floating-point number literal
    let exponentialLiteral = 6.022e23; // Scientific notation (exponential form)

    //Special Values:
    let infinity = Infinity; // Represents infinity
    let negInfinity = -Infinity; // Represents negative infinity
    let notANumber = NaN; // Represents "Not-a-Number" value (results from invalid operations)

    //Exponential Notation:
    let bigNumber = 1.5e6; // 1.5 * 10^6 (1.5 million)
    let smallNumber = 2.5e-3; // 2.5 * 10^-3 (0.0025)

    document.getElementById('define-output-1').innerHTML =
        `integerLiteral = 42;    DateType: ${typeof integerLiteral}<br>
negativeLiteral = -10;    DateType: ${typeof negativeLiteral}<br>
binaryLiteral = 0b1010;    DateType: ${typeof binaryLiteral}<br>
octalLiteral = 0o777;    DateType: ${typeof octalLiteral}<br>
hexadecimalLiteral = 0xFF; ${typeof hexadecimalLiteral}<br>
floatLiteral = 3.14;    DateType: ${typeof floatLiteral}<br>
anotherFloat = -0.01;    DateType: ${typeof anotherFloat}<br>
exponentialLiteral = 6.022e23;    DateType: ${typeof exponentialLiteral}<br>
infinity = Infinity;    DateType: ${typeof infinity}<br>
negInfinity = -Infinity;    DateType: ${typeof negInfinity}<br>
notANumber = NaN;    DateType: ${typeof notANumber}<br>
bigNumber = 1.5e6;    DateType: ${typeof bigNumber}<br>
smallNumber = 2.5e-3;    DateType: ${typeof smallNumber}`;
}
//END Defining Numbers


//START Constructors
function Constructors() {
    // Creating a number object from a numeric value
    let num1 = Number(42);

    // Creating a number object from a string
    let num2 = Number("3.14");

    // Trying to create a number object from an invalid string
    let invalidNum = Number("hello");

    // Creating a number object using the new keyword
    let numObj1 = new Number(10);

    // Creating a number object from a string using new
    let numObj2 = new Number("99");

    document.getElementById('Constructor-output-1').innerHTML =
        `num1 = Number(42); ${typeof num1}<br>
num2 = Number("3.14"); ${typeof num2}<br>
invalidNum = Number("hello"); ${typeof invalidNum}<br>
numObj1 = new Number(10); ${typeof numObj1}<br>
numObj2 = new Number("99"); ${typeof numObj2}<br>`;
}
//END Constructors




//START Properties
function prop() {
    document.getElementById('prop-output-1').innerHTML = `
Number.EPSILON: ${Number.EPSILON}<br>
Number.MAX_VALUE: ${Number.MAX_VALUE}<br>
Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}<br>
Number.MIN_VALUE: ${Number.MIN_VALUE}<br>
Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}<br>
Number.NaN: ${Number.NaN}<br>
Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}<br>
Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}
`;
}
//END Properties



//START Methods
function methods() {
    let myNumber = 24.12345;
    let parsedFloat = Number.parseFloat("3.14 meters"); // Parse a float from a string
    let parsedInt = Number.parseInt("10");  // Parse an integer from a string
    let numAsString = myNumber.toString(); // Convert the number to a string
    let numValue = myNumber.valueOf(); // Get the primitive value of the number

    document.getElementById('methods-output-1').innerHTML = `
Number.isNaN(myNumber): ${Number.isNaN(myNumber)}<br>
Number.isFinite(myNumber): ${Number.isFinite(myNumber)}<br>
Number.isInteger(myNumber): ${Number.isInteger(myNumber)}<br>
Number.isSafeInteger(myNumber): ${Number.isSafeInteger(myNumber)}<br>
Number.parseFloat("3.14 meters"): ${parsedFloat}<br>
Number.parseInt("10"): ${parsedInt}<br>
myNumber.toExponential(2): ${myNumber.toExponential(2)}<br>
myNumber.toFixed(2): ${myNumber.toFixed(2)}<br>
myNumber.toLocaleString(): ${myNumber.toLocaleString()}<br>
myNumber.toPrecision(4): ${myNumber.toPrecision(4)}<br>
myNumber.toString(): ${numAsString}<br>
myNumber.valueOf(): ${numValue}
`;
}
//END Methods