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


// //Start getElementById:
// // Get element by ID
// const targetId = document.getElementById('sampleId-1');
// console.log(targetId);
// //END getElementById:



// // START getElementsByClassName:
// // Get element by ClassName
// const targetClass = document.getElementsByClassName('text-danger');
// console.log(targetClass);
// // END getElementsByClassName:



// // START getElementsByTagName()
// // Get element by TagName
// const targetTagName = document.getElementsByTagName('p');
// console.log(targetTagName);
// // END getElementsByTagName()



// // START querySelector(css selector)
// // Using querySelector
// const selectTag = document.querySelector('p');
// const selectClass = document.querySelector('.text-danger');
// const selectId = document.querySelector('#sampleId-1');
// const AdvSelect = document.querySelector('#DOMDefinition p');

// console.log(selectTag);
// console.log(selectClass);
// console.log(selectId);
// console.log(AdvSelect);
// // END querySelector(css selector)



// // START querySelectorAll(css selector)
// // Using querySelectorAll
// const selectAllTag = document.querySelectorAll('p');
// const selectAllClass = document.querySelectorAll('.text-danger');
// const selectAllId = document.querySelectorAll('#sampleId-1');
// const AdvAllSelect = document.querySelectorAll('#DOMDefinition p');

// console.log(selectAllTag);
// console.log(selectAllClass);
// console.log(selectAllId);
// console.log(AdvAllSelect);
// // END querySelectorAll(css selector)



// START

// END



// START

// END



// START

// END



// START

// END



// START

// END



// START

// END



// START

// END



// START

// END


