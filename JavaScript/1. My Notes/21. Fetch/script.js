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







document.getElementById('getDataButton').addEventListener('click', () => {
	// Get the selected date from the input field
	const selectedDate = document.getElementById('selectedDate').value;

	// URL for the COVID-19 data
	const apiUrl = 'https://data.covid19india.org/data.json';

	// Fetch COVID-19 data
	fetch(apiUrl)
		.then(response => {
			// Check if response is okay
			if (!response.ok) {
				throw new Error('Could not fetch data!');
			}
			return response.json();
		})
		.then((data) => {
			let found = false;

			// Loop through the data array to find the selected date
			for (let i = 0; i <= 564; i++) {
				// If the date matches, display the COVID-19 information
				if (data.cases_time_series[i].dateymd === selectedDate) {
					document.getElementById('output-1').innerHTML = (
						`Confirmed Cases: ${data.cases_time_series[i].dailyconfirmed} <br>
            Deceased: ${data.cases_time_series[i].dailydeceased} <br>
            Recovered: ${data.cases_time_series[i].dailyrecovered} <br><br>
            Total Confirmed: ${data.cases_time_series[i].totalconfirmed} <br>
            Total Deceased: ${data.cases_time_series[i].totaldeceased} <br>
            Total Recovered: ${data.cases_time_series[i].totalrecovered} <br>`
					);

					found = true; // Set flag to true if data is found
					break; // Exit loop once data is found
				}
			}

			// If no data is found for the selected date, display a message
			if (!found) {
				document.getElementById('output-1').innerHTML = ('No data available for the selected date!');
			}
		})
		.catch(error => {
			// Display an error message if there's an issue with fetching data
			document.getElementById('output-1').innerHTML = ('Error:', error);
		});
});








document.getElementById('getDataStateButton').addEventListener('click', () => {
	// Get the selected state from the input field
	const selectedstate = document.getElementById('selectedstate').value;

	// URL for the COVID-19 data
	const apiUrl = 'https://data.covid19india.org/data.json';

	// Fetch COVID-19 data
	fetch(apiUrl)
		.then(response => {
			// Check if response is okay
			if (!response.ok) {
				throw new Error('Could not fetch data!');
			}
			return response.json();
		})
		.then((data) => {
			// Loop through the data to find the selected state
			for (let i = 1; i <= 37; i++) {
				if (data.statewise[i].state === selectedstate) {
					// Display COVID-19 information for the selected state
					document.getElementById('output-2').innerHTML = (
						`Active Cases: ${data.statewise[i].active} <br>
            Confirmed: ${data.statewise[i].confirmed} <br>
            Deaths: ${data.statewise[i].deaths} <br>
            Recovered: ${data.statewise[i].recovered} <br>
            Last Updated: ${data.statewise[i].lastupdatedtime} <br>`
					);
				}
			}
		})
		.catch((error) => {
			// Handle errors if any
			console.log(`Error: ${error}`);
		});
});






//++++ Fetching Data to Table with search box	++++
// Hide the product table initially
document.getElementById('product-table').style.display = 'none';

// Add an event listener to fetch data when the button is clicked
document.getElementById('fetchDataButton').addEventListener('click', () => {
	// Async function to fetch data
	const Fetchdata = async () => {
		try {
			const url = 'https://fakestoreapi.com/products';
			const response = await fetch(url);
			const data = await response.json();

			let tbody = '';

			// Loop through the fetched data to create table rows
			data.map((value) => {
				tbody += `
          <tr>
            <td>${value.id}</td>
            <td>${value.title}</td>
            <td>${value.description}</td>
            <td>${value.category}</td>
            <td>${value.price}</td>
            <td><img src='${value.image}'/></td>
            <td>${value.rating.rate}</td>
          </tr>`;
			});

			// Display the table and update the table body with fetched data
			document.getElementById('product-table').style.display = 'block';
			document.getElementById('table-body').innerHTML = tbody;
		} catch (error) {
			document.getElementById('output-3').innerHTML = `${error}`
		}
	}

	// Call the Fetchdata function to fetch and display the data
	Fetchdata();
});




// ++++ Code for Serching Data +++++
const searchFun = () => {
	// Get the input value and convert it to uppercase for case-insensitive search
	let filter = document.getElementById('myInput').value.toUpperCase();

	// Get the table body and all table rows
	let myTable = document.getElementById('table-body');
	let TableRow = document.getElementsByTagName('tr');

	// Loop through each table row
	for (i = 0; i < TableRow.length; i++) {
		// Get the table data in the second column of each row
		let TableData = TableRow[i].getElementsByTagName('td')[1];

		if (TableData) {
			// Get the text content of the table data
			let innerValue = TableData.textContent || TableData.innerHTML;

			// Check if the search filter matches the content
			if (innerValue.toUpperCase().indexOf(filter) > -1) {
				// Display the row if there's a match
				TableRow[i].style.display = "";
			} else {
				// Hide the row if there's no match
				TableRow[i].style.display = "none";
			}
		}
	}
}
