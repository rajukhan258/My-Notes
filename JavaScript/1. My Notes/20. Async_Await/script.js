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




///////////Start Using Async Await //////////////////////////

// Simulated asynchronous functions for processing an online order
function verifyStock(orderDetails) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Simulating checking stock availability
			if (orderDetails.quantity <= 10) {
				document.getElementById('async-output-1').innerHTML += ('Stock verified.') + "<br>";
				resolve(orderDetails);
			} else {
				reject('Insufficient stock.');
			}
		}, 1000);
	});
}

function processPayment(orderDetails) {
	return new Promise((resolve) => {
		setTimeout(() => {
			// Simulating payment processing
			document.getElementById('async-output-1').innerHTML += ('Payment processed successfully.') + "<br>";
			resolve(orderDetails);
		}, 1500);
	});
}

function shipOrder(orderDetails) {
	return new Promise((resolve) => {
		setTimeout(() => {
			// Simulating order shipping
			document.getElementById('async-output-1').innerHTML += ('Order shipped.') + "<br>";
			resolve(`Order for ${orderDetails.quantity} ${orderDetails.product} shipped.`);
		}, 2000);
	});
}

async function processOrder() {
	try {
		const stockVerified = await verifyStock(order);
		const paymentProcessed = await processPayment(stockVerified);
		const orderShipped = await shipOrder(paymentProcessed);
		document.getElementById('async-output-1').innerHTML += (orderShipped) + "<br>"; // Final success message after order processing
	} catch (error) {
		document.getElementById('async-output-1').innerHTML += ('Error occurred:', error) + "<br>"; // Handling errors
	}
}

// Order details
const order = {
	product: 'Laptop',
	quantity: 8,
	price: 1200,
};

document.getElementById('asyncruncode').addEventListener('click', () => {
	// Processing the order using async/await
	processOrder();
})


////////////END Using Async Await //////////////////////////








/////////             ////////////////
async function showMessage(){
try{
		document.getElementById('ex2-output-1').innerHTML +=(`Start .....<br>`);
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
			document.getElementById('ex2-output-1').innerHTML +=(`Promise 1 resolved in 3 Seconds <br>`);
		}, 3000);
	});
	document.getElementById('ex2-output-1').innerHTML +=(`Wait .....<br>`);

	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
			document.getElementById('ex2-output-1').innerHTML +=(`Promise 2 resolved in 2 seconds<br>`);
		}, 2000);
	});
	document.getElementById('ex2-output-1').innerHTML +=(`End<br>`);

} catch(error){
	document.getElementById('ex2-output-1').innerHTML +=(`Error : ${error}`);
}
}

document.getElementById('ex2').addEventListener('click', () => {
	showMessage();
})

	// await new Promise((resolve) => {
	// 	setTimeout(()=>{
	// 		console.log('After 2 seconds');
	// }, 2000); )};
	// }