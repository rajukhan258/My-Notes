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



// Start Math.PI
function pi() {
    // Storing the value of Math.PI in a variable called pi
    const pi = Math.PI;
    // Displaying the value of pi in an HTML element
    document.getElementById("pi-output-1").innerHTML = `PI = ${pi}`;

    // Initializing the radius of the circle
    let radius = 5;
    // Calculating the area of the circle
    let area = pi * radius * radius;

    // Displaying the calculated area in an HTML element
    document.getElementById("pi-output-2").innerHTML = `Area of circle = ${area.toFixed(2)} cm<sup>2</sup>`;
}
// END Math.PI




//START Math.E
function e() {
    // Storing the value of Math.E in a variable called e
    const e = Math.E;

    // Displaying the output in an HTML element
    document.getElementById('e-output-1').innerHTML = e;
}
//End Math.E




//START Math.LN2
function ln2() {
    // Storing the value of Math.LN2 in a variable called ln2
    const ln2 = Math.LN2;

    // Displaying the output in an HTML element
    document.getElementById('ln2-output-1').innerHTML = ln2;
}
//END Math.LN2




//START Math.LN10
function ln10() {
    // Storing the value of Math.LN10 in a variable called ln10
    const ln10 = Math.LN10;

    // Displaying the output in an HTML element
    document.getElementById('ln10-output-1').innerHTML = ln10;
}
//END Math.LN10




//START Math.LOG2E
function log2e() {
    // Storing the value of Math.LOG2E in a variable called log2e
    const log2e = Math.LOG2E;

    // Displaying the output in an HTML element
    document.getElementById('log2e-output-1').innerHTML = log2e;
}
//END Math.LOG2E




//START Math.LOG10E
function log10e() {
    // Storing the value of Math.LOG10E in a variable called log10e
    let log10e = Math.LOG10E;

    // Displaying the output in an HTML element
    document.getElementById('log10e-output-1').innerHTML = log10e;
}
//END Math.LOG10E





//START Math.SQRT1_2
function sqrt1_2() {
    // Storing the value of Math.SQRT1_2 in a variable called sqrt1_2
    const sqrt1_2 = Math.SQRT1_2;

    // Displaying the output in an HTML element
    document.getElementById('sqrt1_2-output-1').innerHTML = sqrt1_2;
}
//END Math.SQRT1_2




//START Math.SQRT2
function sqrt2() {
    // Storing the value of Math.SQRT2 in a variable called sqrt2
    const sqrt2 = Math.SQRT2;

    // Displaying the output in an HTML element
    document.getElementById('sqrt2-output-1').innerHTML = sqrt2;
}
//END Math.SQRT2




//START Math.round()
function round() {
    // Perform rounding operations on different numbers
    let roundOff1 = Math.round(3.2);
    let roundOff2 = Math.round(3.8);
    let roundOff3 = Math.round(-3.2);
    let roundOff4 = Math.round(-3.8);
    let roundOff5 = Math.round(2.5);
    let roundOff6 = Math.round(3.5);

    // Display the results in HTML element
    document.getElementById('round-output-1').innerHTML = `${roundOff1} <br> ${roundOff2} <br>${roundOff3} <br>${roundOff4} <br>${roundOff5} <br>${roundOff6}`;
}
//END Math.round()





//START Math.floor()
function floor() {
    // Perform floor operations on different numbers
    const floor1 = Math.floor(3.2);
    const floor2 = Math.floor(3.8);
    const floor3 = Math.floor(-3.2);
    const floor4 = Math.floor(-3.8);
    const floor5 = Math.floor(Math.PI);

    // Display the results in HTML element
    document.getElementById('floor-output-1').innerHTML = `${floor1} <br> ${floor2} <br>${floor3} <br>${floor4} <br>${floor5}`;
}
//END Math.floor()





//START Math.ceil()
function ceil() {
    // Perform ceil operations on different numbers
    const ceil1 = Math.ceil(3.2);
    const ceil2 = Math.ceil(3.8);
    const ceil3 = Math.ceil(-3.2);
    const ceil4 = Math.ceil(-3.8);
    const ceil5 = Math.ceil(Math.PI);

    // Display the results in HTML element
    document.getElementById('ceil-output-1').innerHTML = `${ceil1} <br> ${ceil2} <br>${ceil3} <br>${ceil4} <br>${ceil5}`;
}
//END Math.ceil()





//START Math.abs()
function abs() {
    // Perform abs operations on different numbers
    const abs1 = Math.abs(5);
    const abs2 = Math.abs(-8);
    const abs3 = Math.abs(0);

    // Display the results in HTML element
    document.getElementById('abs-output-1').innerHTML = `${abs1} <br> ${abs2} <br>${abs3}`;
}
//END Math.abs()





//START Math.sign(x)
function sign() {
    // Perform sign operations on different numbers
    const sign1 = Math.sign(5);
    const sign2 = Math.sign(-8);
    const sign3 = Math.sign(0);

    // Display the results in HTML element
    document.getElementById('sign-output-1').innerHTML = `${sign1} <br> ${sign2} <br>${sign3}`;
}
//END Math.sign(x)





//START Math.random()
function random() {
    // random number between 0 - 1
    let random0To1 = Math.random();

    // random number between 0 - 10
    let random0To10 = Math.floor(Math.random() * 10);

    // random number from 1 - 10
    let random1To10 = Math.floor(Math.random() * 10) + 1;

    // random number between 15 - 25 formulae Math.floor(Math.random() * (max - min) + min)
    let random15To25 = Math.floor(Math.random() * (25 - 15) + 15);

    // Display the results in HTML element
    document.getElementById("random-output-1").innerHTML = `Random number b/w 0-1 = ${random0To1} <br> Random number b/w 0-10 = ${random0To10} <br> Random number from 1-10 = ${random1To10} <br> Random number b/w 15-25 = ${random15To25}`;
}
//END Math.random()




//START Math.trunc
function trunc() {
    // Perform trunc operations on different numbers
    const trunc1 = Math.trunc(5.6);
    const trunc2 = Math.trunc(-8.2);
    const trunc3 = Math.trunc(0.5);

    // Display the results in HTML element
    document.getElementById('trunc-output-1').innerHTML = `${trunc1} <br> ${trunc2} <br>${trunc3}`;
}
//END Math.trunc




//START Math.max()
function max() {
    // Calculate the maximum value among given numbers
    let max1 = Math.max(5, 2.5, 8, 10.2);
    let max2 = Math.max(-3, -9, -1, -5);

    // Create an array of numbers
    let arry = [1, 2, 3, 4, 5, 6];
    // Find the maximum value in the array using spread syntax
    let maxArry = Math.max(...arry);

    // Display the results in an HTML element
    document.getElementById('max-output-1').innerHTML = `max1 = ${max1}<br> max2 = ${max2}<br> maxArry = ${maxArry}`;
}
//END Math.max()




//START Math.min(x, y, ...n)
function min() {
    // Calculate the minimum value among given numbers
    let min1 = Math.min(5, 2.5, 8, 10.2);
    let min2 = Math.min(-3, -9, -1, -5);

    // Create an array of numbers
    let arry = [1, 2, 3, 4, 5, 6];
    // Find the minimum value in the array using spread syntax
    let minArry = Math.min(...arry);

    // Display the results in an HTML element
    document.getElementById('min-output-1').innerHTML = `min1 = ${min1}<br> min2 = ${min2}<br> minArry = ${minArry}`;
}
//END Math.min(x, y, ...n)




//START Math.pow()
function pow() {
    // Calculate powers using Math.pow() and the exponentiation operator
    let pow1 = Math.pow(2, 3);
    let pow2 = Math.pow(2, -3);
    let pow3 = Math.pow(16, 0.5);
    let pow4 = Math.pow(10, 0);
    let pow5 = 2 ** 3;

    // Display the results in an HTML element
    document.getElementById('pow-output-1').innerHTML = `${pow1}<br>${pow2}<br>${pow3}<br>${pow4}<br>${pow5}`;
}
//END Math.pow()




//START Math.sqrt()
function sqrt() {
    // Calculate square roots and store the results in variables
    let a = Math.sqrt(0);
    let b = Math.sqrt(1);
    let c = Math.sqrt(9);
    let d = Math.sqrt(64);
    let e = Math.sqrt(-9);

    // Display the results in an HTML element
    document.getElementById("sqrt-output-1").innerHTML = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
}
//END Math.sqrt()





//START Math.cbrt()
function cbrt() {
    // Calculate cube roots and store the results in variables
    let a = Math.cbrt(0);
    let b = Math.cbrt(1);
    let c = Math.cbrt(27);
    let d = Math.cbrt(8);
    let e = Math.cbrt(-8);

    // Display the results in an HTML element
    document.getElementById("cbrt-output-1").innerHTML = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
}
//END Math.cbrt()





//START Math.log()
function log() {
    // Calculate natural logarithms for various numbers and store the results in variables
    let a = Math.log(2.7183);
    let b = Math.log(10);
    let c = Math.log(1);
    let d = Math.log(0);
    let e = Math.log(-1);

    // Display the results in an HTML element
    document.getElementById("log-output-1").innerHTML =
        a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
}
//END Math.log()





//START
function log10() {
    // Calculate base 10 logarithms for various numbers and store the results in variables
    let a = Math.log10(100);
    let b = Math.log10(1000);
    let c = Math.log10(1);
    let d = Math.log10(0);
    let e = Math.log10(-1);
    let f = Math.log10(0.01);

    // Display the results in an HTML element
    document.getElementById("log10-output-1").innerHTML =
        a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "<br>" + f;
}
//END




//START Math.log2()
function log2() {
    // Calculating logarithms to base 2 for various numbers
    let a = Math.log2(8);
    let b = Math.log2(64);
    let c = Math.log2(1);
    let d = Math.log2(0);
    let e = Math.log2(-10);

    // Display the results in an HTML element
    document.getElementById("log2-output-1").innerHTML =
        a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
}
//END  Math.log2()




//START Math.sin()
let coderun1 = false;
function sin() {
    if (coderun1) {
        return;
    }
    // Function to calculate sine in radians from degrees
    function calculatesine(degrees) {
        let sine = Math.sin(degrees * Math.PI / 180);    // Convert degrees to radians and calculate sine
        return sine; // Return the sine value
    }

    const angles = [0, 1, 30, 45, 60, 90, 120, 180, 360];   // Array of angles in degrees

    // Iterate through each angle and calculate sine
    angles.forEach(function (angle) {
        const sineValue = calculatesine(angle);   // Calculate sine for the current angle

        // Display the sine value for each angle in an HTML element
        document.getElementById("sin-output-1").innerHTML +=
            `sine of ${angle} degrees: ${sineValue} <br>`
    });
    coderun1 = true;
}
//END Math.sin()




//START Math.cos()
let coderun2 = false;
function cos() {
    // Function to calculate cosine in radians from degrees
    function calculateCosine(degrees) {
        let cosine = Math.cos(degrees * Math.PI / 180);    // Convert degrees to radians and calculate cosine
        return cosine; // Return the cosine value
    }

    const angles = [0, 1, 30, 45, 60, 90, 120, 180, 360];   // Array of angles in degrees

    // Iterate through each angle and calculate cosine
    angles.forEach(function (angle) {
        const cosineValue = calculateCosine(angle);   // Calculate cosine for the current angle

        // Display the cosine value for each angle in an HTML element
        document.getElementById("cos-output-1").innerHTML +=
            `Cosine of ${angle} degrees: ${cosineValue} <br>`
    });
    coderun2 = true;
}
//END Math.cos()





//START Math.tan()
let coderun3 = false;
function tan() {
    if (coderun3) {
        return;
    }
    // Function to calculate tangent in radians from degrees
    function calculateTangent(degrees) {
        let tangent = Math.tan(degrees * Math.PI / 180);    // Convert degrees to radians and calculate tangent
        return tangent; // Return the tangent value
    }

    const angles = [0, 1, 30, 45, 60, 90, 120, 180, 360];   // Array of angles in degrees

    // Iterate through each angle and calculate tangent
    angles.forEach(function (angle) {
        const tangentValue = calculateTangent(angle);   // Calculate tangent for the current angle

        // Display the tangent value for each angle in an HTML element
        document.getElementById("tan-output-1").innerHTML +=
            `Tangent of ${angle} degrees: ${tangentValue} <br>`
    });
    coderun3 = true;
}
//END Math.tan()





//START Math.asin()
let coderun4 = false;
function asin() {
    if (coderun4) {
        return;
    }
    function calculateArcsine(radians) {
        let anglesInRadian = Math.asin(radians);   // Calculate arcsine in radians
        let degrees = anglesInRadian * 180 / Math.PI;   // Convert to degrees
        return degrees;
    }

    const radianAngles = [-1, -0.5, 0, 0.5, 1]; // Array of values between -1 and 1 in radians

    radianAngles.forEach(function (value) {
        const arcsineValue = calculateArcsine(value); // Calculate arcsine for the current value
        document.getElementById("asin-output-1").innerHTML += `Arcsine of ${value}: ${arcsineValue} degrees.<br>`;
    });
    coderun4 = true;
}
//END Math.asin()





//START  Math.acos()
let coderun5 = false;
function acos() {
    if (coderun5) {
        return;
    }
    function calculateArccosine(radians) {
        let anglesInRadian = Math.acos(radians);   // Calculate arccosine in radians
        let degrees = anglesInRadian * 180 / Math.PI;   // Convert to degrees
        return degrees;
    }
    const radianAngles = [-1, -0.5, 0, 0.5, 1];    // Array of values between -1 and 1 in radians

    radianAngles.forEach(function (value) {
        const arccosineValue = calculateArccosine(value); // Calculate arccosine for the current value

        document.getElementById("acos-output-1").innerHTML += `Arcsine of ${value}: ${arccosineValue} degrees.<br>`;
    });
    coderun5 = true;
}
//END  Math.acos()





//START Math.atan()
let coderun6 = false;
function atan() {
    if (coderun6) {
        return;
    }
    function calculateArctangent(radians) {
        // Calculate arctangent in radians
        let anglesInRadian = Math.atan(radians);

        // Convert to degrees
        let degrees = anglesInRadian * 180 / Math.PI;
        return degrees;
    }
    // Array of values between -1 and 1 in radians
    const radianAngles = [Math.E, -1, -0.5, 0, 0.5, 1];

    radianAngles.forEach(function (value) {
        const arctangentValue = calculateArctangent(value); // Calculate arctangent for the current value
        document.getElementById("atan-output-1").innerHTML += `atan of ${value}: ${arctangentValue} degrees.<br>`;
    });
    coderun6 = true;
}
//END Math.atan()




//START
let coderun7 = false;
function atan2() {
    if (coderun7) {
        return;
    }
    function calculateArctan2(y, x) {
        let angleInRadian = Math.atan2(y, x);   // Calculate arctangent using x and y coordinates
        let degrees = angleInRadian * 180 / Math.PI;   // Convert to degrees
        return degrees;
    }

    const coordinates = [
        { x: 1, y: 1 },
        { x: -1, y: -1 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: -1 }
    ];    // Array of coordinate objects

    coordinates.forEach(function (coord) {
        const arctan2Value = calculateArctan2(coord.y, coord.x); // Calculate arctan2 for the current coordinates

        document.getElementById("atan2-output-1").innerHTML += `Arctan2 of (${coord.x}, ${coord.y}): ${arctan2Value} degrees <br>`;
    });
    coderun7 = true;
}
//END




//START

//END





//START

//END




//START

//END 
