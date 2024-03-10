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






//START Promise Creation using constructor: ///////////////

//USING CALLBACK
// Async function 'doSomething' with a callback
function doSomething(callback) {
	// Simulate a 1s delay before callback execution
	setTimeout(() => {
		const error = false; // Simulated no error
		const skills = ['HTML', 'CSS', 'JS']; // Simulated data

		// Call provided callback with error and skills
		callback(error, skills);
	}, 1000);
}
// Callback for handling 'doSomething' results/errors
function forcallback(error, result) {
	// Handle error or display result in HTML
	if (error) {
		// Display error in specified HTML element
		return document.getElementById('callback-output-1').innerHTML = error;
	} else {
		// Display skills in specified HTML element
		return document.getElementById('callback-output-1').innerHTML = result.join(", ");
	}
}
// Skills array
const skills = ['HTML', 'CSS', 'JS'];
// Click event listener for HTML element
document.getElementById('runcode').addEventListener('click', () => {
	// Trigger 'doSomething' with 'forcallback' as callback
	doSomething(forcallback);
});





//USING PROMISE 
function doPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (skill.length > 0) {
				resolve(skill); // Resolve the Promise with 'skill' array
			} else {
				reject('Something wrong has happened'); // Reject with an error message
			}
		}, 1000);
	});
}
// Array containing skills
const skill = ['HTML', 'CSS', 'JS'];
// Adding a click event listener to an HTML element
document.getElementById('runpromise').addEventListener('click', () => {

	// Using the 'doPromise' Promise
	doPromise()
		.then((value) => {
			document.getElementById('promise-output-1').innerHTML = (value).join(", ")
		})
		.catch((error) => {
			document.getElementById('promise-output-1').innerHTML = (error)
		});
});
//END Promise Creation using constructor: ///////////////





//START  Chaining Promises: ///////////////////////////
//orderDetails
const order = {
	product: 'Laptop',
	quantity: 8,
	price: 1200,
}
// Simulated asynchronous functions for processing an online order
function verifyStock(orderDetails) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Simulating checking stock availability
			if (orderDetails.quantity <= 10) {
				document.getElementById('chain-output-1').innerHTML += `Stock Verified. <br>`;
				resolve(orderDetails);
			} else {
				reject('Insufficient stock.');
			}
		}, 1000);
	});
}
function processpayment(orderDetails) {
	return new Promise((resolve) => {
		setTimeout(() => {
			// Simulating payment processing
			document.getElementById('chain-output-1').innerHTML += `payment processed successfully. <br>`;
			resolve(orderDetails);
		}, 1500);
	});
}
function shipOrder(orderDetails) {
	return new Promise((resolve) => {
		setTimeout(() => {
			// Simulating order shipping
			document.getElementById('chain-output-1').innerHTML += 'Order shipped. <br>';
			resolve(`Order for ${orderDetails.quantity} ${orderDetails.product} shipped`);
		}, 2000);
	});
}
document.getElementById('runchain').addEventListener('click', () => {
	// Processing the order using Promise chaining
	verifyStock(order)
		.then(processpayment)
		.then(shipOrder)
		.then((successMessage) => {
			document.getElementById('chain-output-1').innerHTML += `${successMessage} <br>`; // Final success message after order processing
		})
		.catch((error) => {
			document.getElementById('chain-output-1').innerHTML += ('Error occured:', error); // Handling errors in the chain
		});
});
//END Chaining Promises: /////////////////////////////







//START  Promise Methods////////////////////////
// Simulated weather API functions
function fetchTemperature() {
	return new Promise((resolve, reject) => {
		// Simulating API call delay
		setTimeout(() => {
			resolve('Temperature: 25 Deg');
		}, 2000);
	});
}

function fetchHumidity() {
	return new Promise((resolve) => {
		//simulate API call delay
		setTimeout(() => {
			resolve('Humidity: 70%');
		}, 1500);
	});
}

function fetchWindSpeed() {
	return new Promise((resolve, reject) => {
		// Simulating API call delay
		setTimeout(() => {
			resolve('Wind Speed: 25km/h');
		}, 1000);
	});
}

function fetchPrecipitation() {
	return new Promise((resolve, reject) => {
		//Simulating API call delay
		setTimeout(() => {
			reject('Couldnot fetch Precipitation');
		}, 2500);
	});
}

function fetchCloudCover() {
	return new Promise((resolve, reject) => {
		//Simulating API call delay
		setTimeout(() => {
			resolve('Cloud Cover: 40%');
		}, 1800);
	});
}

//START  Promise.all (Example)////////////////////////
//Adding event listener for Promise.all
document.getElementById("promiseall").addEventListener("click", () => {
	//Using Promise.all to fetch weather data concurrently
	Promise.all([fetchTemperature(), fetchHumidity(), fetchWindSpeed()])
		.then((result) => {
			document.getElementById("promiseall-output-1").innerHTML = (`Weather data fetched: ${result.join(", ")}`);
		})
		.catch((error) => {
			document.getElementById("promiseall-output-1").innerHTML = (`Failed to fetch Weather data: ${error}`);
		})
});
//END Promise.all (Example) ///////////////////////





//START Promise.allSettled /////////////////////
// Adding an event listener to ID 'promiseallsettled' 
document.getElementById('promiseallsettled').addEventListener('click', () => {
	// Executing Promise.allSettled() 
	Promise.allSettled([fetchWindSpeed(), fetchPrecipitation(), fetchCloudCover()])
		.then((result) => {
			// Loop through the results of allSettled promises
			for (let i = 0; i < result.length; i++) {
				// Check if the current promise was rejected, update its value if so
				if (result[i].status === "rejected") {
					result[i].value = "Error fetching Data";
				}
				// Display the status and value (resolved data or error message) on the webpage
				document.getElementById("promiseallsettled-output-1").innerHTML += `Status: ${result[i].status}, &nbsp;  Value: ${result[i].value} <br>`;
			}
		})
		.catch((error) => {
			// Display any error that might occur during promise execution
			document.getElementById("promiseallsettled-output-1").innerHTML = (error);
		});
});
//END Promise.allSettled //////////////////////





//START Promise.any() /////////////////////
// Adding an event listener to ID 'promiseany' 
document.getElementById('promiseany').addEventListener('click', () => {
	// Executing Promise.any() 
	Promise.any([fetchTemperature(), fetchWindSpeed(), fetchCloudCover()])
		.then((result) => {
			document.getElementById('promiseany-output-1').innerHTML = (result);
		}
		)
		.catch((error) => {
			// Display any error that might occur during promise execution
			document.getElementById('promiseany-output-1').innerHTML = (error);
		});
});
//END Promise.any() //////////////////////



//START Promise.race() /////////////////////
// Adding an event listener to ID 'promiseany' 
document.getElementById('promiserace').addEventListener('click', () => {
	// Executing Promise.race() 
	Promise.race([fetchTemperature(), fetchWindSpeed(), fetchCloudCover()])
		.then((result) => {
			document.getElementById('promiserace-output-1').innerHTML = (result);
		}
		)
		.catch((error) => {
			// Display any error that might occur during promise execution
			document.getElementById('promiserace-output-1').innerHTML = (error);
		});
});
//END Promise.race() //////////////////////
//END Promise Methods////////////////////////






//START

//END





//START

//END