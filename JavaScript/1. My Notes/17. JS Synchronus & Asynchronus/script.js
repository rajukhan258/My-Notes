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



let hasRunCode = false;
function syncprogram(){
	if (hasRunCode){
		return;
	}

	let today = new Date();
	document.getElementById('sync-output-1').innerHTML = today.toLocaleTimeString();

	for(let i = 0; i < 2; i++){
		document.getElementById('sync-output-2').innerHTML += i + '<br>';
	}

	document.getElementById('sync-output-3').innerHTML = 'Hello World!'
	hasRunCode = true;
}




function asyncprogram(){
	let i = 0;
	setTimeout(() => {
		document.getElementById('async-output-1').innerHTML = "Timeout";
	}, 2000);
	
	setTimeout(()=>{
		document.getElementById('async-output-2').innerHTML = i++;
	}, 1000);

	document.getElementById('async-output-3').innerHTML = "Hello World!";
}