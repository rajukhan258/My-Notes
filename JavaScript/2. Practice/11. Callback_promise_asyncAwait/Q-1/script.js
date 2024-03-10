// Function to copy text to the clipboard //////////////
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





//Normal/Synchronous Function Example ////////////////
function syncFunc() {
	// Function to register the user
	function register() {
		document.getElementById('sync-output-1').innerHTML += ('Register end <br>');
	}
	// Function to send a confirmation email
	function sendEmail() {
		document.getElementById('sync-output-1').innerHTML += ('Email end <br>');
	}
	// Function to log the user in
	function login() {
		document.getElementById('sync-output-1').innerHTML += ('logIn end <br>');
	}
	// Function to get user data after login
	function getUserDate() {
		document.getElementById('sync-output-1').innerHTML += ('Got User Data <br>');
	}
	// Function to display user data
	function displayData() {
		document.getElementById('sync-output-1').innerHTML += ('User data Displayed <br>');
	}

	// Call functions in a sequence to simulate a synchronous flow
	register();       // Registers the user
	sendEmail();      // Sends a confirmation email
	login();          // Logs the user in
	getUserDate();    // Retrieves user data
	displayData();    // Displays user data

	// Performs other application work
	document.getElementById('sync-output-1').innerHTML += ('Other Application Work!');
}





//Asynchronous Function Example /////////////////
function asycfunc() {
	// Function to register the user (takes 2 seconds)
	function register() {
		setTimeout(() => {
			console.log('Register end <br>');
		}, 3000);
	}

	// Function to send a confirmation email (takes 1 second)
	function sendEmail() {
		setTimeout(() => {
			document.getElementById('async-output-1').innerHTML += ('Email end <br>');
		}, 1000);
	}

	// Function to log the user in (takes 1 second)
	function login() {
		setTimeout(() => {
			document.getElementById('async-output-1').innerHTML += ('logIn end <br>');
		}, 2000);
	}

	// Function to get user data after login (takes 1 second)
	function getUserDate() {
		setTimeout(() => {
			document.getElementById('async-output-1').innerHTML += ('Got User Data <br>');
		}, 1000);
	}

	// Function to display user data (takes 1 second)
	function displayData() {
		setTimeout(() => {
			document.getElementById('async-output-1').innerHTML += ('User data Displayed <br>');
		}, 2000);
	}

	// Calling asynchronous functions
	register();        // Registers the user (takes 2 seconds)
	sendEmail();       // Sends a confirmation email (takes 1 second)
	login();           // Logs the user in (takes 1 second)
	getUserDate();     // Retrieves user data (takes 1 second)
	displayData();     // Displays user data (takes 1 second)

	// Other application work
	document.getElementById('async-output-1').innerHTML += ('Other Application Work!<br>');
}





//Async Callback Example  /////////////////////
function asyncCallback() {
	// Function to register the user with a callback
	function register(callback) {
		setTimeout(() => {
			document.getElementById('async-callback-output-1').innerHTML += ('Register end <br>');
			callback(); // Calls the provided callback after registering
		}, 1000);
	}

	// Function to send an email with a callback
	function sendEmail(callback) {
		setTimeout(() => {
			document.getElementById('async-callback-output-1').innerHTML += ('Email end <br>');
			callback(); // Calls the provided callback after sending the email
		}, 3000);
	}

	// Function to log the user in with a callback
	function login(callback) {
		setTimeout(() => {
			document.getElementById('async-callback-output-1').innerHTML += ('logIn end <br>');
			callback(); // Calls the provided callback after logging in
		}, 1000);
	}

	// Function to get user data with a callback
	function getUserDate(callback) {
		setTimeout(() => {
			document.getElementById('async-callback-output-1').innerHTML += ('Got User Data <br>');
			callback(); // Calls the provided callback after getting user data
		}, 2000);
	}

	// Function to display user data (no callback provided)
	function displayData() {
		setTimeout(() => {
			document.getElementById('async-callback-output-1').innerHTML += ('User data Displayed <br>');
		}, 1000);
	}

	// Using callbacks to ensure the sequence of execution
	register(() => {
		sendEmail(() => {
			login(() => {
				getUserDate(() => {
					displayData(); // Display user data after getting it
				});
			});
		});
	});

	document.getElementById('async-callback-output-1').innerHTML += ('Other Application Work!<br>'); // Executed immediately
}





//Using promises Example////////////////////
function usingPromises() {
	// Function to register the user using a Promise
	function register() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated registration process completed
				document.getElementById('promise-output-1').innerHTML += ('Register end <br>');
				resolve(); // Resolves the promise after successful registration
			}, 1000);
		});
	}

	// Function to send an email using a Promise
	function sendEmail() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated email sending completed
				document.getElementById('promise-output-1').innerHTML += ('Email end <br>');
				resolve(); // Resolves the promise after email is sent
			}, 3000);
		});
	}

	// Function to log the user in using a Promise
	function login() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated login process completed
				document.getElementById('promise-output-1').innerHTML += ('logIn end <br>');
				resolve(); // Resolves the promise after successful login
			}, 1000);
		});
	}

	// Function to get user data using a Promise
	function getUserDate() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated retrieval of user data completed
				document.getElementById('promise-output-1').innerHTML += ('Got User Data <br>');
				resolve(); // Resolves the promise after retrieving user data
			}, 2000);
		});
	}

	// Function to display user data using a Promise
	function displayData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated displaying of user data completed
				document.getElementById('promise-output-1').innerHTML += ('User data Displayed <br>');
				resolve(); // Resolves the promise after displaying user data
			}, 1000);
		});
	}

	// Calling the promises in sequence
	register()
		.then(sendEmail)
		.then(login)
		.then(getUserDate)
		.then(displayData);

	// Additional work that doesn't wait for the promises to finish
	document.getElementById('promise-output-1').innerHTML += ('Other Application Work!<br>');
}





//Error handling in Promises ////////////////////
// Function to simulate user registration with a Promise
function promiseErrorHandle() {
	function register() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulating an error while registering
				return reject('Error while registering');
				// The following line won't execute as reject() is called above
				document.getElementById('prom-error-output-1').innerHTML += ('Register end <br>');
			}, 1000);
		});
	}

	// Function to simulate sending an email with a Promise
	function sendEmail() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated email sending completed
				document.getElementById('prom-error-output-1').innerHTML += ('Email end <br>');
				resolve();
			}, 3000);
		});
	}

	// Function to simulate user login with a Promise
	function login() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated login process completed
				document.getElementById('prom-error-output-1').innerHTML += ('logIn end <br>');
				resolve();
			}, 1000);
		});
	}

	// Function to simulate getting user data with a Promise
	function getUserDate() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated retrieval of user data completed
				document.getElementById('prom-error-output-1').innerHTML += ('Got User Data <br>');
				resolve();
			}, 2000);
		});
	}

	// Function to simulate displaying user data with a Promise
	function displayData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated displaying of user data completed
				document.getElementById('prom-error-output-1').innerHTML += ('User data Displayed <br>');
				resolve();
			}, 1000);
		});
	}

	// Calling the promises in sequence and handling errors
	register()
		.then(sendEmail)
		.then(login)
		.then(getUserDate)
		.then(displayData)
		.catch((error) => {
			// Catch any error thrown by any of the promises in the chain
			document.getElementById('prom-error-output-1').innerHTML += ('Error: ' + error);
		});

	// Additional work that doesn't wait for the promises to finish
	document.getElementById('prom-error-output-1').innerHTML += ('Other Application Work!<br>');
}






//Async Await Example //////////////
function asyncawait() {
	// Function to simulate user registration with a Promise
	function register() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated registration process completed
				document.getElementById('asyncawait-output-1').innerHTML += ('Register end <br>');
				resolve();
			}, 1000);
		});
	}

	// Function to simulate sending an email with a Promise
	function sendEmail() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated email sending completed
				document.getElementById('asyncawait-output-1').innerHTML += ('Email end <br>');
				resolve();
			}, 3000);
		});
	}

	// Function to simulate user login with a Promise
	function login() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated login process completed
				document.getElementById('asyncawait-output-1').innerHTML += ('logIn end <br>');
				resolve();
			}, 1000);
		});
	}

	// Function to simulate getting user data with a Promise
	function getUserDate() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated retrieval of user data completed
				document.getElementById('asyncawait-output-1').innerHTML += ('Got User Data <br>');
				resolve();
			}, 2000);
		});
	}

	// Function to simulate displaying user data with a Promise
	function displayData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated displaying of user data completed
				document.getElementById('asyncawait-output-1').innerHTML += ('User data Displayed <br>');
				resolve();
			}, 1000);
		});
	}

	// An async function using await to handle promises sequentially
	async function authenticate() {
		await register();       // Wait for registration to complete
		await sendEmail();      // Wait for email sending to complete
		await login();          // Wait for login process to complete
		await getUserDate();    // Wait for user data retrieval to complete
		await displayData();    // Wait for displaying user data to complete
	}

	// Call the async function and perform actions after completion
	//async function return promise so we can use .then()
	authenticate().then(() => {
		// Additional action after authentication completes
		document.getElementById('asyncawait-output-1').innerHTML += ('Authentication Completed <br>');
	});

	// Additional work that doesn't wait for the promises to finish
	document.getElementById('asyncawait-output-1').innerHTML += ('Other Application Work!<br>');
}






//Async Await Error Handing Example //////////////
function asyncawaitError() {
	// Function to simulate user registration with a Promise
	function register() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated registration process completed
				document.getElementById('asyncawait-error-output-1').innerHTML += ('Register end <br>');
				resolve();
			}, 1000);
		});
	}

	// Function to simulate sending an email with a Promise
	function sendEmail() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated email sending completed
				return reject('Error while sending email.');
				document.getElementById('asyncawait-error-output-1').innerHTML += ('Email end <br>');
			}, 3000);
		});
	}

	// Function to simulate user login with a Promise
	function login() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated login process completed
				document.getElementById('asyncawait-error-output-1').innerHTML += ('logIn end <br>');
				resolve();
			}, 1000);
		});
	}

	// Function to simulate getting user data with a Promise
	function getUserDate() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated retrieval of user data completed
				document.getElementById('asyncawait-error-output-1').innerHTML += ('Got User Data <br>');
				resolve();
			}, 2000);
		});
	}

	// Function to simulate displaying user data with a Promise
	function displayData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulated displaying of user data completed
				document.getElementById('asyncawait-error-output-1').innerHTML += ('User data Displayed <br>');
				resolve();
			}, 1000);
		});
	}

	// An async function using await to handle promises sequentially
	async function authenticate() {
		await register();       // Wait for registration to complete
		await sendEmail();      // Wait for email sending to complete
		await login();          // Wait for login process to complete
		await getUserDate();    // Wait for user data retrieval to complete
		await displayData();    // Wait for displaying user data to complete
	}


	//async function return promise so we can use .then()
	// Call the async function and perform actions after completion or error
	authenticate().then(() => {
		// Additional action after authentication completes (won't execute due to previous rejection)
		document.getElementById('asyncawait-error-output-1').innerHTML += ('Authentication Completed <br>');
	}).catch((error) => {
		// Catch any error thrown by the authenticate() function itself
		document.getElementById('asyncawait-error-output-1').innerHTML += ('Error: ' + error);
	});

	// Additional work that doesn't wait for the promises to finish
	document.getElementById('asyncawait-error-output-1').innerHTML += ('Other Application Work!<br>');
}