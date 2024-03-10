//Getting Array from user and Displaying
function getValue() {
    // Get the dimensions of the array from the user
    let rows = parseInt(prompt("Enter the number of rows:"));
    let cols = parseInt(prompt("Enter the number of columns:"));

    // Create a multi-dimensional array with the specified dimensions
    let array = new Array(rows);
    for (let i = 0; i < rows; i++) {
        array[i] = new Array(cols);
    }

    // Get the elements from the array
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            array[i][j] = (prompt(`Enter the element at index (${i}, ${j}):`));
        }
    }

    // Display the array
    let output = "[";
    for (let i = 0; i < rows; i++) {
        output += "[";
        for (let j = 0; j < cols; j++) {
            output += array[i][j];
            if (j < cols - 1) {
                output += ", ";
            }
        }
        output += "]";
        if (i < rows - 1) {
            output += ", ";
        }
    }
    output += "]";
    document.getElementById("output").innerHTML = `Arry = ${output}`;
}






//3. Accessing array elements
function accessIndex() {
    let x = [
        [20, 'Pranshu', 'Lucknow'],
        [21, 'Sameer', 'Varanasi'],
        [22, 'Kartikeya', 'Lakhimpur']
    ];

    let text = "<pre>"
    text += `x[0] = [${x[0]}]<br>`;
    text += `x[1][2] = ${x[1][2]} <br>`;    // third item of the second inner array
    text += `x[2][1] = ${x[2][1]} `;    // second item of the third inner array
    text += "</pre>";

    document.getElementById("accessindex").innerHTML = text;
}

function accessloops() {
    let x = [
        [20, 'Pranshu', 'Lucknow'],
        [21, 'Sameer', 'Varanasi'],
        [22, 'Kartikeya', 'Lakhimpur'],
        [28, 'Ramkumar', 'Delhi']
    ];

    let text = "<pre>"
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (typeof x[i][j] === 'string') {
                text += `"${x[i][j]}"`;
            }
            else {
                text += `${x[i][j]}`;
            }
            text += " ";
        }
        text += "\n";
    }
    text += "</pre>";
    document.getElementById("accessloop").innerHTML = text;
}





//Modifying Arrays 
function modifyArray() {
    let x = [
        [20, 'Pranshu', 'Lucknow'],
        [21, 'Sameer', 'Varanasi'],
        [22, 'Kartikeya', 'Lakhimpur'],
        [28, 'Ramkumar', 'Delhi']
    ];
    x[0][1] = "Pranay";   // change name to Pranay in first element
    x[2][2] = "Mumbai";     // change city to Mumbai in third element
    let text = "<pre>";
    for (let i = 0; i < x.length; i++){
        for (let j = 0; j < x[i].length; j++) {
            if (typeof x[i][j] === 'string') {
                text += `"${x[i][j]}"`;
            } else {
                text += x[i][j];
            }
            text += " ";
        }
        text += "\n";
    }
    text += "</pre>";
    document.getElementById('modify').innerHTML = text;
}







// //Display Array as Table
let clicked = false;
function createTable() {
    if (clicked) {  
        return;
    }
    let x = [
        [20, 'Pranshu', 'Lucknow'],
        [21, 'Sameer', 'Varanasi'],
        [22, 'Kartikeya', 'Lakhimpur'],
        [28, 'Ramkumar', 'Delhi']
    ];
    let tableDiv = document.getElementById("tableDiv");
    for (let a = 0; a < x.length; a++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";
        for (let b = 0; b < x[a].length; b++) {
            let cellDiv = document.createElement("div");
            cellDiv.className = "cell";
            cellDiv.textContent = x[a][b];
            rowDiv.appendChild(cellDiv);
        }
        tableDiv.appendChild(rowDiv);
    }
    clicked = true;     // value changed to true.
}