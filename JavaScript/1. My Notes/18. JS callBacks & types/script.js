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



//START callback function
function callback() {
	// Function that performs a calculation using a callback
	function calculate(num1, num2, callbackFunction) {
		callbackFunction(num1, num2);
	}

	// Adds two numbers and displays the result
	function add(a, b) {
		document.getElementById('callback-output-1').innerHTML = a + b + "<br>";
	}

	// Subtracts two numbers and displays the result
	function subtract(a, b) {
		document.getElementById('callback-output-1').innerHTML += a - b;
	}

	// Perform addition using the 'calculate' function with the 'add' callback
	calculate(5, 3, add);
	// Perform subtraction using the 'calculate' function with the 'subtract' callback
	calculate(5, 3, subtract);
}
//END callback function




//START map callback function
let hasCodeRun = false;
function mapcallback() {
	if (hasCodeRun) {
		return;
	}
	let users = ['John', 'Harry', 'Anna'];

	// Function to greet a user
	function greet(user) {
		// Appending a greeting to an HTML element with id 'mapcallback-output-1'
		document.getElementById('mapcallback-output-1').innerHTML += `Hello ${user}. <br>`;
	}

	// Using forEach to iterate through each user in the 'users' array
	// Here, 'greet' function is passed as a callback to forEach
	users.forEach((greet));
	hasCodeRun = true;
}
//END map callback function




//START Anonymous callback function
let anonymousCodeRun = false;
function anonymous() {
	if (anonymousCodeRun) {
		return;
	}
	let users = ['John', 'Harry', 'Anna'];

	// Using map() to iterate over each user in the 'users' array
	// This function takes an anonymous function as an argument
	// The anonymous function appends a greeting to an HTML element with the ID 'anonymous-output-1'
	// However, note that map() returns a new array, but this usage doesn't capture or use the returned array
	users.map(function (user) {
		document.getElementById('anonymous-output-1').innerHTML += `Hello ${user}. <br>`;
	});
	anonymousCodeRun = true;
}



let anony = false;
function anonymousarrow() {
	if (anony) {
		return;
	}
	let users = ['John', 'Harry', 'Anna'];

	users.map((user) => {
		document.getElementById('anonymousarrow-output-1').innerHTML += `Hello ${user}. <br>`;
	});
	anony = true;
}
//END Anonymous callback function  anonymous-output-1




//START Types of callback function
let syncoHasRun = false;
function synco() {
	if (syncoHasRun) {
		return;
	}
	// Async calculation function
	function calculate(num1, num2, callbackFunction) {
		document.getElementById('synco-output-1').innerHTML += "Calculation Started" + "<br>";
		callbackFunction(num1, num2);
		document.getElementById('synco-output-1').innerHTML += "Calculation Ended" + "<br>";
	}

	// Add two numbers and display result
	function add(a, b) {
		document.getElementById('synco-output-1').innerHTML += a + b + "<br>";
	}

	// Subtract two numbers and display result
	function subtract(a, b) {
		document.getElementById('synco-output-1').innerHTML += a - b + "<br>";
	}

	// Start calculation with 'calculate' function, providing 5, 3 as numbers, and 'add' as the callback
	calculate(5, 3, add);

	syncoHasRun = true;
}





let asyncoHasRun = false;
function asynco() {
	if (asyncoHasRun) {
		return;
	}
	// Asynchronous calculation function
	function calculate(num1, num2, callbackFunction) {
		// Displaying a message indicating the start of the calculation
		document.getElementById('asynco-output-1').innerHTML += ("Calculation started <br>");

		// Simulating asynchronous behavior with setTimeout
		setTimeout(() => callbackFunction(num1, num2), 2000);

		// This line executes immediately after setTimeout is triggered, not after the callback execution
		document.getElementById('asynco-output-1').innerHTML += ("Calculation finished <br>");
	}

	// Function to add two numbers and display the result
	function add(a, b) {
		document.getElementById('asynco-output-1').innerHTML += (a + b);
	}

	// Initiating a calculation with calculate() function, providing 5, 3 as numbers, and 'add' as the callback function
	calculate(5, 3, add);

	asyncoHasRun = true;
}
//END Types of callback function






//START  Callback as Direct Argument
let calldirectarg = false;
function directarg() {
	if (calldirectarg) {
		return; // To avoid executing code if it has already run
	}

	// Function to perform asynchronous calculations
	function calculate(x, y, callback) {
		// Simulate an asynchronous operation using setTimeout
		setTimeout(() => {
			callback(x, y); // Invoke the callback function after 1 second
		}, 1000);
	}

	// Callback function to add two numbers and display the result
	function Addnum(a, b) {
		document.getElementById('directarg-output-1').innerHTML += `Add: ${a + b} <br>`;
	}

	// Callback function to subtract two numbers and display the result
	function sub(a, b) {
		document.getElementById('directarg-output-1').innerHTML += `Subtract: ${a - b} <br>`;
	}

	// passing callback functions as Direct Argument:
	calculate(5, 5, Addnum); // Perform addition calculation
	calculate(8, 5, sub);   // Perform subtraction calculation
	calldirectarg = true;
}
//END Callback as Direct Argument







//START Nested Callback (CallBack Hell & Pyramid of Doom)
let nestedcallback = false;
function nested_callback() {
	// Check if the nested callback execution has happened
	if (nestedcallback) {
		return; // Prevents repeated execution if already done
	}

	// Function to perform addition asynchronously and execute a callback
	function add(a, b, callback) {
		setTimeout(() => {
			document.getElementById('nestedcallback-output-1').innerHTML += `Add: ${a + b} <br>`;
			callback(); // Execute the provided callback function
		}, 1000);
	}

	// Function to perform subtraction and execute a callback
	function subtract(a, b, callback) {
		document.getElementById('nestedcallback-output-1').innerHTML += `Subtract: ${a - b} <br>`;
		callback(); // Execute the provided callback function
	}

	// Function to perform multiplication asynchronously and execute a callback
	function multiply(a, b, callback) {
		setTimeout(() => {
			document.getElementById('nestedcallback-output-1').innerHTML += `Multiply: ${a * b} <br>`;
			callback(); // Execute the provided callback function
		}, 3000);
	}

	// Function to perform division
	function divide(a, b) {
		if (b === 0) {
			// Display an error message if division by zero is attempted
			const errorMessage = 'Division not possible';
			document.getElementById('nestedcallback-output-1').innerHTML += errorMessage;
		} else {
			// Display the division result in the specified output element
			document.getElementById('nestedcallback-output-1').innerHTML += `Divide: ${a / b} `;
		}
	}

	// Initiating a nested callback sequence
	add(2, 4, () => {
		subtract(6, 2, () => {
			multiply(2, 2, () => {
				divide(4, 0); // Attempt division by zero
			});
		});
	});

	nestedcallback = true; // Marking nested callbacks as executed to prevent duplication

}
//END Nested Callback (CallBack Hell & Pyramid of Doom)




//START

//END