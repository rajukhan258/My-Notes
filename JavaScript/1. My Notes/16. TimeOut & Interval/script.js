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



//START setTimeOut
let hasCodeRun = false;
function timeout() {
	if (hasCodeRun) {
		return;
	}
	// Set the initial text in the 'timer' element
	document.getElementById('timer').innerHTML = `Result will show after 3 sec.`;

	// Define a function using arrow syntax that will execute after 3 seconds
	let greet = () => {
		// Clear the text in the 'timer' element
		document.getElementById('timer').innerHTML = ``;
		// Display a greeting message in the 'timeout-output-1' element
		document.getElementById('timeout-output-1').innerHTML = 'Hi, Thanks for waiting!'
	};

	// Schedule the 'greet' function to execute after a delay of 3000 milliseconds (3 seconds)
	setTimeout(greet, 3000);
	hasCodeRun = true;
}
//END setTimeOut   



//START clearTimeOut .........................
// Declare a variable to store the timer ID
let startTimer;

// Function to display a message and start the timer
function display() {
	document.getElementById('clearTime-output-1').innerHTML = 'Press "STOP Timer", or I will disappear after 3 sec.';

	// Define a function using arrow syntax to execute after a delay
	let greet = () => {
		document.getElementById('clearTime-output-1').innerHTML = ''
	};

	// Set a timer to execute the 'greet' function after 3 seconds
	startTimer = setTimeout(greet, 3000);
}

// Function to stop the timer
function stopTimer() {
	clearTimeout(startTimer);
}
//END clearTimeOut ..........................






//START Window.setInterval()
function interval() {
	let timer = () => {
		const date = new Date();
		document.getElementById('interval-output-1').innerHTML = date.toLocaleTimeString();
	}
	 setInterval(timer, 1000);
}
//END Window.setInterval()




//START window.clearInterval(timerVariable)
let Runtimer;
function clrinterval() {
	function timer() {
		const date = new Date();
		document.getElementById("clrinterval-output-1").innerHTML = date.toLocaleTimeString();
	}
	RunTimer = setInterval(timer, 1000);
}
function clrintvw() {
	clearInterval(RunTimer);
}

//END window.clearInterval(timerVariable)



//START

//END