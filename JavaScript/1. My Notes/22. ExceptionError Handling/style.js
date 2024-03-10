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





//start Exception Handling Statements
document.getElementById('Exception Handling').addEventListener('click', () => {
	const age = document.getElementById('age').value;
	try {
		if (isNaN(age) || age === '') {
			document.getElementById('output-1').innerHTML = 'Please enter your age.';
		} else if (age < 18) {
			throw new Error('Not Eligible');
		} else {
			document.getElementById('output-1').innerHTML = 'You are Eligible for voting.'
		}
	} catch (error) {
		document.getElementById('output-1').innerHTML = error;
	} finally {
		document.getElementById('output-2').innerHTML = `Your Age: ${age}`;
	}
});
//End Exception Handling Statements






// Start RangeError  ++++++++++++++++++++
document.getElementById('btn-2').addEventListener('click', () => {
	// Initializing a variable 'num' with the value 1
	let num = 1;

	// Trying to set the number of significant digits of 'num' to 500
	try {
		num.toPrecision(500); // This line might throw an error
	} catch (error) {
		// Displaying an error message 
		document.getElementById('output-3').innerHTML = `Oops, ${error.name}`;
	}
});

// END  RangeError +++++++++++++++++++++



// Start ReferenceError  ++++++++++++++++++++
document.getElementById('btn-4').addEventListener('click', () => {
	// Initializing a variable 'x' with the value 5
	let x = 5;

	try {
		// Trying to perform an operation where 'y' is not defined
		x = y + 1; // This line might throw a ReferenceError
	} catch (err) {
		// Displaying the error name 
		document.getElementById("output-4").innerHTML = err.name;
	}
});
// END  ReferenceError +++++++++++++++++++++




// Start SyntaxError  ++++++++++++++++++++
document.getElementById('btn-5').addEventListener('click', () => {
	try {
		// Trying to evaluate a string with a syntax error using the eval() function
		eval("'Hello"); // This line might throw a SyntaxError
	} catch (err) {
		// Displaying the error name 
		document.getElementById("output-5").innerHTML = err.name;
	}
});
// END  SyntaxError +++++++++++++++++++++




// Start TypeError  ++++++++++++++++++++
document.getElementById('btn-6').addEventListener('click', () => {
	// Initializing a variable 'num' with the value 1
	let num = 1;

	try {
		// Trying to call the toUpperCase() method on a number
		num.toUpperCase(); // This line might throw a TypeError
	} catch (err) {
		// Displaying the error name
		document.getElementById("output-6").innerHTML = err.name;
	}
});
// END  TypeError +++++++++++++++++++++





// Start URIError  ++++++++++++++++++++
document.getElementById('btn-7').addEventListener('click', () => {
	try {
		// Trying to decode an invalid URI using the decodeURI() function
		decodeURI("%%%"); // This line might throw an URIError
	} catch (err) {
		// Displaying the error name 
		document.getElementById("output-7").innerHTML = err.name;
	}
});
// END  URIError +++++++++++++++++++++