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




//Start from()
function displayfrom() {
    //1. Converting a String to an Array:
    const str = "HELLO";
    const strArray = Array.from(str);
    document.getElementById("from-output-1").innerHTML = `Str to Array: ${arrprint(strArray)}`;

    //2. Using the Map Function:
    const numbers = [1, 2, 3, 4];
    const squaredNumbers = Array.from(numbers, function (indexelement) { return indexelement * indexelement });
    document.getElementById("from-output-2").innerHTML = `from() with map(): ${arrprint(squaredNumbers)}`;

    //3. Using thisArg:
    const nums = [1, 2, 3, 4];
    const doubledNumbers = Array.from(nums, function (x) {
        return x * this.multiplier;
    }, { multiplier: 2 });
    document.getElementById("from-output-3").innerHTML = `Using thisArg: ${arrprint(doubledNumbers)}`;

    //function to print a string representation of the array,
    function arrprint(arr) {
        let output = "[";
        for (i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                output += arrprint(arr[i]);
            }
            else if (typeof arr[i] === 'string') {
                output += `"${arr[i]}"`;
            }
            else {
                output += `${arr[i]}`;
            }
            if (i < arr.length - 1) {
                output += ", ";
            }
        }
        output += "]";
        return output;
    }
}
//END from()




//Start of()
function displayof() {
    //1. Creating an array of numbers:
    const numbers = Array.of(1, 2, 3, 4, 5);
    document.getElementById("of-output-1").innerHTML = `array of numbers: ${printarr(numbers)}`;
    //2. Creating an array of strings:
    const fruits = Array.of("apple", "banana", "cherry");
    document.getElementById("of-output-2").innerHTML = `array of strings: ${printarr(fruits)}`;
    // Creating an array with a 
    const singleValue = Array.of(42);
    document.getElementById("of-output-3").innerHTML = `single element: ${printarr(singleValue)}`;

    //Creating an empty array:
    const emptyArray = Array.of();
    document.getElementById("of-output-4").innerHTML = `empty array: ${printarr(emptyArray)}`;

    //common function print the out as array
    function printarr(arr) {
        let output = "[";
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                output += displayof(arr[i]);
            } else if (typeof arr[i] === 'string') {
                output += `"${arr[i]}"`;
            } else {
                output += `${arr[i]}`;
            }
            if (i < arr.length - 1) {
                output += ", ";
            }
        }
        output += "]"
        return output;
    }
}
//END of()




// Start pop()
function arypop() {
    const mixary = ["Ram", 55, "Mango", "apple", 100];
    mixary.pop();   // Remove the last element from the 'mixary' array using the 'pop' method.
    let Arytext = "["   // Initialize a string 'Arytext' with an opening square bracket "[".
    for (a = 0; a < mixary.length; a++) {  // Loop through each element in the 'mixary' array.
        if (typeof mixary[a] === `string`) {   // Check if the current element is a string.
            Arytext += `"${mixary[a]}"`;    // If the element is a string, enclose it in double quotes and add it to the 'Arytext' string.
        }
        else {
            Arytext += `${mixary[a]}`;  // If the element is not a string, add it as is to the 'Arytext' string.
        }
        Arytext += " ";     // Add a space after each element, regardless of its type.
    }
    Arytext += "]";     // Add a closing square bracket "]" to the 'Arytext' string.
    document.getElementById("pop_1").innerHTML = `After 1 pop = ${Arytext}`;

    mixary.pop();   // Again Remove the last element from the 'mixary' array again using the 'pop' method
    let Arytext2 = "["  // Initialize a new string 'Arytext2' with an opening square bracket "[".
    for (a = 0; a < mixary.length; a++) {     // Loop through each element in the modified 'mixary' array.
        if (typeof mixary[a] === `string`) {   // Check if the current element is a string.
            Arytext2 += `"${mixary[a]}"`;   // If the element is a string, enclose it in double quotes and add it to the 'Arytext2' string.  
        }
        else {
            Arytext2 += `${mixary[a]}`;     // If the element is not a string, add it as is to the 'Arytext2' string.
        }
        Arytext2 += " ";     // Add a space after each element, regardless of its type.
    }
    Arytext2 += "]";    // Add a closing square bracket "]" to the 'Arytext2' string.
    document.getElementById("pop_2").innerHTML = `After 2 pop = ${Arytext2}`;
}
// End pop()





// Start push()
function arrpush() {
    const mixary = ["mango", "banana"];
    mixary.push(1000);  // Push the number 1000 to the 'mixary' array.
    let output = "[";   // Initialize a string 'output' with an opening square bracket "[".
    for (i = 0; i < mixary.length; i++) {   // Loop through each element in the 'mixary' array.
        if (typeof mixary[i] === `string`) {      // Check if the current element is a string.

            output += `"${mixary[i]}"`;     // If the element is a string, enclose it in double quotes and add it to the 'output' string.
        }
        else {
            output += `${mixary[i]}`;   // If the element is not a string (a number in this case), add it as is to the 'output' string.
        }
        output += ", "; // Add a comma and space after each element.
    }
    output += "]";  // Add a closing square bracket "]" to the 'output' string.
    document.getElementById('ary_1push').innerHTML = `1 element pushed = ${output}`;


    mixary.push("orange", 2500);    // Push two more elements (a string and a number) to the 'mixary' array.
    let output2 = "[";
    for (i = 0; i < mixary.length; i++) {   // Initialize a new string 'output2' with an opening square bracket "[".

        if (typeof mixary[i] === `string`) {      // Check if the current element is a string.

            output2 += `"${mixary[i]}"`;        // If the element is a string, enclose it in double quotes and add it to the 'output2' string.
        }
        else {
            output2 += `${mixary[i]}`;      // If the element is not a string (a number in this case), add it as is to the 'output2' string.
        }
        output2 += ", ";    // Add a comma and space after each element.
    }
    output2 += "]"; // Add a closing square bracket "]" to the 'output2' string.
    document.getElementById('ary_2push').innerHTML = `2 element pushed = ${output2}`;
}
//END push()




//Start shift()
function aryshift() {
    // Create an array 'a' containing a mix of strings and numbers
    const a = ["mango", 2000, "apple", 500, "watermelon"];

    // Remove the first element from the array 'a' (shift it off)
    a.shift();

    // Initialize a variable 'output' to store the transformed array as a string
    let output = "[";

    // Loop through the elements of array 'a'
    for (i = 0; i < a.length; i++) {
        // Check if the current element is a string
        if (typeof a[i] === `string`) {
            // If it's a string, add it to 'output' enclosed in double quotes
            output += `"${a[i]}"`;
        } else {
            // If it's not a string (a number), add it to 'output' as is
            output += `${a[i]}`;
        }
        // Add a comma and space after each element
        output += ", ";
    }

    // Complete the 'output' string with a closing square bracket
    output += "]";

    // Display the modified array as a string in the HTML element with the ID "shift_1"
    document.getElementById("shift_1").innerHTML = `After 1 shift = ${output}`;

    // Remove the first element from array 'a' again
    a.shift();

    // Initialize another variable 'output2' to store the transformed array as a string
    let output2 = "[";

    // Loop through the elements of the modified array 'a'
    for (i = 0; i < a.length; i++) {
        // Check if the current element is a string
        if (typeof a[i] === `string`) {
            // If it's a string, add it to 'output2' enclosed in double quotes
            output2 += `"${a[i]}"`;
        } else {
            // If it's not a string (a number), add it to 'output2' as is
            output2 += `${a[i]}`;
        }
        // Add a comma and space after each element
        output2 += ", ";
    }

    // Complete the 'output2' string with a closing square bracket
    output2 += "]";

    // Display the modified array as a string in the HTML element with the ID "shift_2"
    document.getElementById("shift_2").innerHTML = `After 2 shifts = ${output2}`;

}
//END shift()





//Start unshift()
function arrunshift() {
    // Initialize an array 'fruit' with two string elements
    const fruit = ["orange", "watermelon"];
    // Add an element at the beginning of the 'fruit' array
    fruit.unshift("apple");
    // Initialize a string 'display' with an opening bracket
    let display = "[";
    // Iterate through the 'fruit' array
    for (i = 0; i < fruit.length; i++) {
        // Check the type of each element
        if (typeof fruit[i] === `string`) {
            // If it's a string, add it with double quotes
            display += `"${fruit[i]}"`;
        } else {
            // If it's not a string, add it as is
            display += `${fruit[i]}`;
        }
        // Add a comma and space after each element
        display += ", ";
    }
    // Close the 'display' string with a closing bracket
    display += "]"
    // Set the content of an HTML element with the id "unshift" to show the modified 'fruit' array
    document.getElementById("unshift").innerHTML = `Unshifted Array: ${display}`;


    // Add a numeric value (2500) at the beginning of the 'fruit' array
    fruit.unshift(2500);
    // Initialize a string 'display2' with an opening bracket
    let display2 = "[";
    // Iterate through the 'fruit' array again
    for (i = 0; i < fruit.length; i++) {
        // Check the type of each element
        if (typeof fruit[i] === `string`) {
            // If it's a string, add it with double quotes
            display2 += `"${fruit[i]}"`;
        } else {
            // If it's not a string, add it as is
            display2 += `${fruit[i]}`;
        }
        // Add a comma and space after each element
        display2 += ", ";
    }
    // Close the 'display2' string with a closing bracket
    display2 += "]"
    // Set the content of an HTML element with the id "unshift2" to show the modified 'fruit' array
    document.getElementById("unshift2").innerHTML = `Unshifted Array: ${display2}`;

}
// END unshift()




// start sorting
function sorTing() {
    const fruit = ["mango", "banana", "apple", "orange", "watermelon"];
    fruit.sort();   // sort the array in alphabetical order
    let text = "[";
    for (let i = 0; i < fruit.length; i++) {    // iterate over the array
        if (typeof fruit[i] === 'string') {      // check if the element is a string
            text += `"${fruit[i]}"`;    // if it is a string, add it to the text with quotes
        } else {
            text += fruit[i];   // if it is not a string, add it to the text without quotes
        }
        text += " ";    // add a space after each element
    }
    text += "]";     // add a closing bracket to the text
    document.getElementById('sortfruit').innerHTML = text;   // set the innerHTML of the element with the id "sortfruit" to the text


    //number sorting
    const num = [2, 321, 100, 1310, 43];
    num.sort();     // sort the array in ascending order
    let textnum = "[";
    for (let i = 0; i < num.length; i++) {  // iterate over the array
        textnum += `${num[i]}, `;    // add each element to the text with a comma and a space
    }
    document.getElementById("sortnumber").innerHTML = textnum + "]       //unexpected result";


    // Actual number sorting
    num.sort((firstElement, secondElement) => {     // Sort the array in ascending order using the arrow function syntax.
        return firstElement - secondElement;
    });
    let actualtext = "["    // Create a string to store the sorted numbers.
    for (let i = 0; i < num.length; i++) {  // iterate over the array
        actualtext += `${num[i]}, `;    // add each element to the text with a comma and a space
    }
    actualtext += "]"    // add a closing bracket to the text
    document.getElementById("actual_sortnum").innerHTML = actualtext;
}
// End sorting





// start reverse
function reverse() {
    const day = ["monday", "wednesday", "friday", "sunday"];    // Define an array called 'day' containing four string values.
    day.reverse();  // Reverse the order of elements in the 'day' array.
    let reversedDay = "[";  // Initialize a string 'reversedDay' with an opening square bracket "[".
    for (i = 0; i < day.length; i++) {  // Loop through each element in the 'day' array.
        if (typeof day[i] === `string`) {   // Check if the current element is a string.
            reversedDay += `"${day[i]}"`;   // If the element is a string, enclose it in double quotes and add it to the 'reversedDay' string.
        }
        reversedDay += ` `;      // Add a space after each element, regardless of its type.
    }
    reversedDay += "]"  // Add a closing square bracket "]" to the 'reversedDay' string.
    document.getElementById("reverseDay").innerHTML = reversedDay;


    const num = [1, 2, 3, 4, 5];    // Define an array called 'num' containing five numeric values.     
    num.reverse();  // Reverse the order of elements in the 'num' array.
    let reversedNum = "[";  // Initialize a string 'reversedNum' with an opening square bracket "[".
    for (j = 0; j < num.length; j++) {  // Loop through each element in the 'num' array.
        reversedNum += `${num[j]}, `;   // Add the current element to the 'reversedNum' string, along with a comma and space.    
    }
    reversedNum += "]"; // Add a closing square bracket "]" to the 'reversedNum' string.
    document.getElementById("reverseNum").innerHTML = reversedNum;
}
// ENd reversing



//start fill()
function displayFill() {
    // Define an array of fruits
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Guava", "Pineapple", "Grapes"];

    // Use the fill method to modify the array and store it in arr1
    const arr1 = fruits.fill("Apple");

    // Display the modified arr1 in the first output element
    document.getElementById("fill-output-1").innerHTML = loop(arr1);

    // Use the fill method to modify the array and store it in arr2
    const arr2 = fruits.fill("Mango", 2);

    // Display the modified arr2 in the second output element
    document.getElementById("fill-output-2").innerHTML = loop(arr2);

    // Use the fill method to modify the array and store it in arr3
    const arr3 = fruits.fill("Orange", 4, 6);

    // Display the modified arr3 in the third output element
    document.getElementById("fill-output-3").innerHTML = loop(arr3);

    // Define a function to format an array as a string
    function loop(arr) {
        let text = "[";
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                text += `"${arr[i]}"`;
            } else {
                text += `${arr[i]}`;
            }
            if (i < arr.length - 1) {
                text += ", ";
            }
        }
        text += "]";
        return text;
    }

}
//END fill()




//start copyWithin()
function displayCopyWithin() {
    const books = [0, 1, 2, 3, 4, 5, 6, 7]; // Original array
    // Create a copy and apply copyWithin to simulate operations
    const arr1 = books.slice().copyWithin(2);
    const arr2 = books.slice().copyWithin(2, 4);
    const arr3 = books.slice().copyWithin(2, 4, 6);
    // Common function to Display the results
    function displayloop(arr) {
        let output = "[";
        for (let element of arr) {
            if (typeof element === 'string') {
                output += `"${element}"`;
            } else {
                output += `${element}`;
            }
            if (arr.indexOf(element) < arr.length - 1) {
                output += ", ";
            }
        }
        output += "]";
        return output;
    }
    // Update the HTML content
    document.getElementById("copyWithin-output-1").innerHTML = `books = ${displayloop(books)}`;
    document.getElementById("copyWithin-output-2").innerHTML = `copyWithin(2) = ${displayloop(arr1)}`;
    document.getElementById("copyWithin-output-3").innerHTML = `copyWithin(2, 4) = ${displayloop(arr2)}`;
    document.getElementById("copyWithin-output-4").innerHTML = `copyWithin(2, 4, 6) = ${displayloop(arr3)}`;
}
// END copyWithin()




//start contcat()
function arrconcat() {
    // Method One
    const one = ["apple", "banana"];
    // Concatenate the 'one' array with several values
    let concat_1 = one.concat(2500, "banana", 5000);
    // Initialize a string 'display_1' with an opening bracket
    let display_1 = "[";
    // Iterate through the 'concat_1' array
    for (let i = 0; i < concat_1.length; i++) {
        // Check the type of each element
        if (typeof concat_1[i] === "string") {
            // If it's a string, add it with double quotes
            display_1 += `"${concat_1[i]}"`;
        } else {
            // If it's not a string, add it as is
            display_1 += `${concat_1[i]}`;
        }
        // Add a comma and space after each element
        display_1 += ", ";
    }
    // Close the 'display_1' string with a closing bracket
    display_1 += "]"

    // Set the content of an HTML element with the id "display1" to display 'concat_1'
    document.getElementById("display1").innerHTML = display_1;



    // Method Second
    const two = [3000, "orange", 4000];
    const three = [true, false];
    // Concatenate the 'one' array with 'two' and 'three' arrays
    let concat_2 = one.concat(two, three);
    // Initialize a string 'display_2' with an opening bracket
    let display_2 = "[";
    // Iterate through the 'concat_2' array
    for (let i = 0; i < concat_2.length; i++) {
        // Check the type of each element
        if (typeof concat_2[i] === "string") {
            // If it's a string, add it with double quotes
            display_2 += `"${concat_2[i]}"`;
        } else {
            // If it's not a string, add it as is
            display_2 += `${concat_2[i]}`;
        }
        // Add a comma and space after each element
        display_2 += ", ";
    }
    // Close the 'display_2' string with a closing bracket
    display_2 += "]"
    // Set the content of an HTML element with the id "display2" to display 'concat_2'
    document.getElementById("display2").innerHTML = display_2;
}
// END concat()




//Start Join()
function arrjoin() {
    const fruit = ["mango", 2550, "apple", 10000, "watermelon"];
    document.getElementById("output_1").innerHTML = fruit.join();   // default separator (,)
    document.getElementById("output_2").innerHTML = fruit.join(" ");    // blank separator
    document.getElementById("output_3").innerHTML = fruit.join("-"); // custom separator
}
//END join()




//start entries()
function displayentries() {
    // Example 1: Using entries() Method
    const fruits = Array.of("apple", "banana", "cherry");

    // Get an iterator for the array using the entries() method
    const iterator = fruits.entries();

    // Display the result of arrdisplay(iterator) in an HTML element with id "entries-output-1"
    document.getElementById("entries-output-1").innerHTML = arrdisplay(iterator);

    // Function to display key-value pairs from the iterator with appropriate formatting
    function arrdisplay(arr) {
        let text = "";

        // Iterate through the iterator using destructuring to get both index and value
        for (let [index, value] of iterator) {
            if (typeof value === 'string') {
                // If the value is a string, format it with double quotes
                text += `[ ${index}, "${value}"] <br>`;
            } else {
                // If the value is not a string, display it as is
                text += `[ ${index}, ${value}] <br>`;
            }
        }

        return text;
    }



    //Example 2: Using next() Method in Array Iterator Object
    const languages = ["Java", "C", "C++", "Python"];

    // Get an iterator for the array using the entries() method
    let iteratorElement = languages.entries();

    // Display the result of arrdisplayNextValue(iteratorElement) in an HTML element
    document.getElementById("entries-output-2").innerHTML = arrdisplayNextValue(iteratorElement);

    // Function to display key-value pairs from the iterator with appropriate formatting
    function arrdisplayNextValue(arr) {
        let text = "";
        let result = arr.next();

        while (!result.done) { //read as result.done is not true
            // Destructure the result into index and value
            let [index, value] = result.value;

            // Check if the value is a string, and format accordingly
            if (typeof value === 'string') {
                text += `[${index}, "${value}"]<br>`;
            } else {
                text += `[${index}, ${value}]<br>`;
            }

            result = arr.next(); // Get the next result
        }

        return text;
    }
}
//END entries()




//start slice()
function arrslice() {   // Define a function called 'arrslice'
    // Create an array of various data types
    const fruits = ["banana", 2023, "lemon", 5500, "kiwi", true];
    // Slice the original array and store the results in variables
    const sliced1 = fruits.slice();        // Copy the entire array
    const sliced2 = fruits.slice(2);       // Start from the 3rd element and copy the rest
    const sliced3 = fruits.slice(2, 4);    // Start from the 3rd element and copy up to the 4th element

    // Define a function 'arrslicedisplay' to format the array
    function arrslicedisplay(arr) {
        let text = "[";
        // Loop through the elements of the array
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                text += `"${arr[i]}"`;  // Enclose string elements in double quotes
            } else {
                text += arr[i];  // For non-string elements, append as is
            }
            if (i < arr.length - 1) {
                text += ', ';  // Add a comma and space if it's not the last element
            }
        }
        text += ']';  // Close the array with a closing square bracket
        return text;  // Return the formatted text
    }
    // Display the formatted array in HTML elements
    document.getElementById("slice-output-1").innerHTML = `Orignal array: ` + arrslicedisplay(sliced1);
    document.getElementById("slice-output-2").innerHTML = "Slice(2): " + arrslicedisplay(sliced2);
    document.getElementById("slice-output-3").innerHTML = `Slice(2, 4): ` + arrslicedisplay(sliced3);
}
//END slice()





//Start splice()
function arrsplice() {
    const day = ["monday", "wednesday", "friday", "sunday"];
    day.splice(1, 0, "tuesday");

    let text = "[";
    // Loop through the elements of the array
    for (let i = 0; i < day.length; i++) {
        if (typeof day[i] === 'string') {
            text += `"${day[i]}"`;  // Enclose string elements in double quotes
        } else {
            text += day[i];  // For non-string elements, append as is
        }
        if (i < day.length - 1) {
            text += ', ';  // Add a comma and space if it's not the last element
        }
    }
    text += ']';  // Close the array with a closing square

    document.getElementById("splice-output-1").innerHTML = `day.splice(1, 0, "tuesday") = ` + text;


    day.splice(4, 1, "saturday");
    let text2 = "[";
    // Loop through the elements of the array
    for (let i = 0; i < day.length; i++) {
        if (typeof day[i] === 'string') {
            text2 += `"${day[i]}"`;  // Enclose string elements in double quotes
        } else {
            text2 += day[i];  // For non-string elements, append as is
        }
        if (i < day.length - 1) {
            text2 += ', ';  // Add a comma and space if it's not the last element
        }
    }
    text2 += ']';  // Close the array with a closing square
    document.getElementById("splice-output-2").innerHTML = `day.splice(4, 1, "saturday") = ` + text2;



    day.splice(3, 2);
    let text3 = "[";
    // Loop through the elements of the array
    for (let i = 0; i < day.length; i++) {
        if (typeof day[i] === 'string') {
            text3 += `"${day[i]}"`;  // Enclose string elements in double quotes
        } else {
            text3 += day[i];  // For non-string elements, append as is
        }
        if (i < day.length - 1) {
            text3 += ', ';  // Add a comma and space if it's not the last element
        }
    }
    text3 += ']';  // Close the array with a closing square

    document.getElementById("splice-output-3").innerHTML = `day.splice(3, 2); = ` + text3;


    day.splice(-1, 0, "Hello");
    let text4 = "[";
    // Loop through the elements of the array
    for (let i = 0; i < day.length; i++) {
        if (typeof day[i] === 'string') {
            text4 += `"${day[i]}"`;  // Enclose string elements in double quotes
        } else {
            text4 += day[i];  // For non-string elements, append as is
        }
        if (i < day.length - 1) {
            text4 += ', ';  // Add a comma and space if it's not the last element
        }
    }
    text4 += ']';  // Close the array with a closing square

    document.getElementById("splice-output-4").innerHTML = `day.splice(-1, 1, "Hello"); = ` + text4;


    day.splice(-2, 2);
    let text5 = "[";
    // Loop through the elements of the array
    for (let i = 0; i < day.length; i++) {
        if (typeof day[i] === 'string') {
            text5 += `"${day[i]}"`;  // Enclose string elements in double quotes
        } else {
            text5 += day[i];  // For non-string elements, append as is
        }
        if (i < day.length - 1) {
            text5 += ', ';  // Add a comma and space if it's not the last element
        }
    }
    text5 += ']';  // Close the array with a closing square

    document.getElementById("splice-output-5").innerHTML = `day.splice(-2, 2, "Hello"); = ` + text5;
}
//END splice()



//Start flat()
function displayflat() {
    //Example 1 - Basic Flattening:
    const num1 = [1, [2, [3, 4], 5]];
    const flatarr1 = num1.flat(); //default depth value is 1
    document.getElementById("flat-output-1").innerHTML = `Basic Flattening: ${arrprint(flatarr1)}`;

    //Example 2 - Removing Empty Slots:
    const num2 = [1, [2, , 3, null], 4];
    const flatarr2 = num2.flat();
    document.getElementById("flat-output-2").innerHTML = `Removing Empty Slots: ${arrprint(flatarr2)}`;

    //Example 3 - Flattening a 2D Array:
    const num3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const flatarr3 = num3.flat();
    document.getElementById("flat-output-3").innerHTML = `Flattening a 2D Array: ${arrprint(flatarr3)}`;

    //Example 4 - Flattening with specified depth:
    let num4 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
    const flatarr4 = num4.flat(2);
    document.getElementById("flat-output-4").innerHTML = `Flattening with specified depth: ${arrprint(flatarr4)}`;

    //Example 5 - Flattening All Levels:
    let num5 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
    const flatarr5 = num5.flat(Infinity);
    document.getElementById("flat-output-5").innerHTML = `Flattening All Levels: ${arrprint(flatarr5)}`;

    //common loop to print Array with baraces
    function arrprint(arr) {
        let output = "["
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                output += arrprint(arr[i]);
            } else if (typeof arr[i] === 'string') {
                output += `"${arr[i]}"`;
            } else {
                output += arr[i];
            }
            if (i < arr.length - 1) {
                output += ', ';
            }
        }
        output += ']';
        return output;
    }
}
//END flat()



//Start flatMap()
function displayflatmap() {
    const nums = [1, 2, [3, 4], 5];
    // flattening the array using flat()
    let afterflattening = nums.flat(Infinity);
    // incrementing each element of array using map()
    const aftermapping = afterflattening.map(function (argument) {
        return argument + 2;
    });

    document.getElementById("flatMap-output-1").innerHTML = `flat() and map() executed seperately: ${arrprint(aftermapping)}`;

    //using flatMap()directly
    const afterFlatMapping = nums.flatMap(function (argument) {
        if (Array.isArray(argument)) {
            // Return the modified nested array
            return argument.map(function (innervalue) {
                return innervalue + 2;
            });
        } else {
            // Return the modified individual number
            return argument + 2;
        }
    });
    document.getElementById("flatMap-output-2").innerHTML = `flatMap(): ${arrprint(afterFlatMapping)}`;


    //Another Example
    const people = [
        { name: 'Alice', hobbies: ['reading', 'swimming'] },
        { name: 'Bob', hobbies: ['painting', 'hiking'] },
    ];

    const allHobbies = people.flatMap(function (person) {
        return person.hobbies
    });

    document.getElementById("flatMap-output-3").innerHTML = `All Hobbies: ${arrprint(allHobbies)}`;


    //function to print a string representation of the array,
    function arrprint(arr) {
        let output = "["
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                output += arrprint(arr[i]);
            } else if (typeof arr[i] === 'string') {
                output += `"${arr[i]}"`;
            } else {
                output += arr[i];
            }
            if (i < arr.length - 1) {
                output += ', ';
            }
        }
        output += ']';
        return output;
    }
}
//END flatMap()




//start forEach()
function displayForEach() {
    // First part
    const arr = [1, 2, 3, 4, 5];
    let sum = 0;
    function square(element) {  // Function to calculate the sum of squares of elements in the array
        sum += element * element;
    }
    arr.forEach(square);    // Use the forEach method to apply the square function to each element
    // Display the result in the "foreach-output-1" element in the DOM
    document.getElementById("foreach-output-1").innerHTML = `Sum of square of elements = ${sum}`;


    // Second part
    const mix = [1800, "apple", "Orange", 3000, true];
    let output = "";

    // Function to print elements with or without double quotes
    function printElements(element, index) {
        if (typeof element === "string") {
            output += `Array Element ${index}: "${element}"<br>`;
        } else {
            output += `Array Element ${index}: ${element}<br>`;
        }
    }
    mix.forEach(printElements); // Use the forEach method to apply the printElements function to each element
    document.getElementById("foreach-output-2").innerHTML = output;
}
// END forEach()



//start map()
function displayMap() {
    const numbers = [65, 10, 12, 4];    // Original array of numbers
    // Use the map() method to create a new array by multiplying each number by 10
    const newArr = numbers.map((num) => num * 10);
    // Function to create a formatted string representation of an array
    function displayloop(arr) {
        return `[${arr.map(element => (typeof element === 'string' ? `"${element}"` : element)).join(", ")}]`;
    }
    // Display the result in the "map-output-1" element in the DOM
    document.getElementById("map-output-1").innerHTML = `newArr = ${displayloop(newArr)}`;


    //Second
    // Array of objects representing persons with 'firstname' and 'lastname' properties
    const persons = [
        { firstname: "Malcom", lastname: "Reynolds" },
        { firstname: "Kaylee", lastname: "Frye" },
        { firstname: "Jayne", lastname: "Cobb" }
    ];

    // Use map() to create an array of full names by joining 'firstname' and 'lastname'
    const fullNames = persons.map(item => `${item.firstname} ${item.lastname}`);

    // Display the result in the "map-output-2" element in the DOM
    document.getElementById("map-output-2").innerHTML = `Full Names = ${fullNames.join(", ")}`;
}
// END map()



//start filter()
function displayFilter() {
    // Method One
    const arr1 = [1, 10, 2, 25, 5, 15];
    function filterNum(num) {   // Function to filter numbers greater than or equal to 10
        return num >= 10;
    }
    const filteredArr = arr1.filter(filterNum); // Use filter() to create a new array with filtered numbers
    // Display the filtered array using the loop() function
    document.getElementById("filter-output-1").innerHTML = `Filtered Array: ${loop(filteredArr)}`;


    //Method Second
    const fruits = ["apple", "banana", "cherry", "date", "fig"];
    // Use filter() to create a new array with filtered fruits
    const filteredFruits = fruits.filter((elements) => elements === "banana" || elements === "date" || elements === "fig");
    // Display the filtered fruits using the loop() function
    document.getElementById("filter-output-2").innerHTML = `Filtered Fruits: ${loop(filteredFruits)}`;

    // Common function to format an array as a string
    function loop(arr) {
        let text = "["
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] === `string`) {
                text += `"${arr[i]}"`;
            }
            else {
                text += `${arr[i]}`;
            }
            if (i < arr.length - 1) {
                text += `, `;
            }
        }
        text += "]";
        return text;
    }
}
//END filter()




//start reduce()
function displayReduce() {
    // Calculate sum of elements in num array
    const num = [1, 2, 3, 4, 5];
    const sum = num.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    document.getElementById("reduce-output-1").innerHTML = `Sum: ${sum}`;

    // Find max value in num2 array
    const num2 = [24, 53, 78, 91, 12];
    const max = num2.reduce((acc, curr) => Math.max(acc, curr)); //using arrow function
    document.getElementById("reduce-output-2").innerHTML = `Max: ${max}`;
}
//END reduce()



//start reduceRight()
function displayReduceRight() {
    // Calculate sum of elements in num array
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduceRight(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 5);
    document.getElementById("reduceRight-output-1").innerHTML = `Sum: ${sum}`;


    // Find max value in num2 array
    const num2 = [24, 53, 78, 91, 12];
    const max = num2.reduce((acc, curr) => Math.max(acc, curr)); //using arrow function
    document.getElementById("reduceRight-output-2").innerHTML = `Max: ${max}`;
}
//END reduceRight()




// start indexOf()
function showindexof() {
    const names = ["sanjay", "Aman", "Rehman", "Aman", "Rahul"];

    // Find and display the index of "Aman" in the array
    document.getElementById("indexof-output-1").innerHTML = `indexOf("Aman") = ${names.indexOf("Aman")}`;

    // Find and display the index of "Aman" starting from index 2
    document.getElementById("indexof-output-2").innerHTML = `indexOf("Aman", 2) = ${names.indexOf("Aman", 2)}`;

    // Find and display the index of "Neha" in the array (not found, result is -1)
    document.getElementById("indexof-output-3").innerHTML = `indexOf("Neha") = ${names.indexOf("Neha")}`;
}
//END indexOf()



// start lastindexOf()
function showlastindexof() {
    const name = ["sanjay", "Aman", "Rehman", "Aman", "Rahul"];

    // Find and display the lastindex of "Aman" in the array
    document.getElementById("lastindexOf-output-1").innerHTML = `lastIndexOf("Aman") = ${name.lastIndexOf("Aman")}`;

    // Find and display the lastindex of "Aman" starting from index 2
    document.getElementById("lastindexOf-output-2").innerHTML = `lastIndexOf("Aman", 2) = ${name.lastIndexOf("Aman", 2)}`;

    // Find and display the lastindex of "Neha" in the array (not found, result is -1)
    document.getElementById("lastindexOf-output-3").innerHTML = `lastIndexOf("Neha") = ${name.lastIndexOf("Neha")}`;
}
//END indexOf()



// Start includes()
function showincludes() {
    const name = ["sanjay", "Aman", "Rehman", "Aman", "Rahul"];

    // Check if the array includes "Aman" (case-sensitive), and display the result
    document.getElementById("includes-output-1").innerHTML = `includes("Aman") = ${name.includes("Aman")}`;

    // Check if the array includes "aman" (case-sensitive), and display the result
    document.getElementById("includes-output-2").innerHTML = `includes("aman") = ${name.includes("aman")}`;

}
// END includes()



// start isarray()
function checkArray() {
    // Create an array with elements "a", "b", "c", "d", and "e"
    const arr = ["a", "b", "c", "d", "e"];
    // Check if the variable "arr" is an array and display the result in the HTML element with id "isarray-output-1"
    document.getElementById("isarray-output-1").innerHTML = Array.isArray(arr);
    // Check if the string "abc" is an array and display the result in the HTML element with id "isarray-output-2"
    document.getElementById("isarray-output-2").innerHTML = Array.isArray("abc");

}
// END isarray()




//start find()
function displayfind() {
    //method first
    const arr1 = [1, 2, 4, 2, 1];
    function checkNumber(num) {
        return num === 3;
    }
    // Use the find() method to find the first element in arr1 that matches the condition
    const foundNumber = arr1.find(checkNumber);
    document.getElementById("find-output-1").innerHTML = "Found: " + foundNumber;



    // Second Method
    const fruits = ["apple", "banana", "cherry", "date", "fig"];
    // Use the find() method to find the first occurrence of "cherry" in the fruits array
    const foundWord = fruits.find(word => word === "cherry");
    if (foundWord !== undefined) {
        // If "cherry" is found, display "Found: cherry" in HTML
        document.getElementById("find-output-2").innerHTML = `Found: ${foundWord}`;
    } else {
        // If "cherry" is not found, display "Not Found" in HTML
        document.getElementById("find-output-2").innerHTML = "Not Found:";
    }
}
//END find()



//start findIndex()
function displayFindIndex() {
    //method one
    const arr1 = [1, 10, 2, 25, 5, 15];
    // Define a function checkNum that checks if a number is greater than 10
    function checkNum(num) {
        return num > 10;
    }
    // Use the findIndex() method to find the index of the first number greater than 10 in arr1
    const foundIndex = arr1.findIndex(checkNum);
    if (foundIndex !== -1) {
        // If foundIndex is not -1, it means a number greater than 10 was found in the array
        document.getElementById("findIndex-output-1").innerHTML = `Found number greater than 10 at index: ${foundIndex}`;
    } else {
        // If foundIndex is -1, it means no number greater than 10 was found in the array
        document.getElementById("findIndex-output-1").innerHTML = "No number greater than 10 found.";
    }


    // method second
    const fruits = ["apple", "banana", "cherry", "date", "fig"];

    // Use the findIndex() method to find the index of "Guava" in the fruits array
    const foundFruit = fruits.findIndex(word => word === "Guava");

    if (foundFruit !== -1) {
        // If foundFruit is not -1, it means "Guava" was found in the array
        document.getElementById("findIndex-output-2").innerHTML = `Found Guava at index: ${foundFruit}`;
    } else {
        // If foundFruit is -1, it means "Guava" was not found in the array
        document.getElementById("findIndex-output-2").innerHTML = "Guava not found.";
    }
}
// END findIndex()



//start some()
function checksome() {
    // Create an array of ages
    const totalages = [10, 13, 18, 15, 20];
    // Define a function to check if an age is greater than or equal to 18
    function checkAdult(age) {  //here age (parameter)
        return age >= 18;
    }
    // Use the `some()` method to check if there is at least one adult in the array of ages
    document.getElementById("some-output-1").innerHTML = totalages.some(checkAdult);



    // Create an array of words
    const fruits = ["apple", "banana", "cherry"];
    // Use the `some()` method to check if there is at least one word with a length greater than 10 characters
    const hasLongWord = fruits.some((word) => word.length > 10); //here word (paraemter)
    // Display the result in the HTML element with id "some-output-2"
    document.getElementById("some-output-2").innerHTML = hasLongWord;
}
// END some()



//start every()
function chekevery() {
    // Method first
    const arr1 = [1, 2, 3, 4, 5];   // Create an array arr1 with some numbers
    // Define a function isEven that checks if a number is even
    function isEven(num) {
        return num % 2 === 0;
    }
    // Use the every() method to check if every element in arr1 is even and display the result in HTML
    document.getElementById("every-output-1").innerHTML = arr1.every(isEven);


    // Method second
    const arr2 = [22, 42, 86, 100, 4];  // Create another array arr2 with more numbers
    // Use the every() method to check if every element in arr2 is divisible by 2 (even) and display the result in HTML
    const isDivisible = arr2.every(eachelement => eachelement % 2 === 0);
    document.getElementById("every-output-2").innerHTML = isDivisible;
}
//END every()



//Start Keys()
function keysFunction() {
    let languages = ["JavaScript", "Java", "C++", "Python"];

    // Get an iterator for the array keys using the keys() method
    let iterator = languages.keys();

    // Get a reference to an HTML element with the id "keys-output-1" to display the output
    let text = document.getElementById("keys-output-1");

    // Iterate through the keys using a for...of loop
    for (let index of iterator) {
        // Display the index followed by a line break in the HTML element
        text.innerHTML += index + "<br>";
    }
}
//END Keys()




//start tostring()
function displayToString() {
    const arr = [1, "star", 34, true, 23];
    document.getElementById("stringoutput").innerHTML = arr.toString();
}
//END tostring()



//start toLocalString()
function localDisplayToString(){
// Example 1: Using toLocaleString() Method
const mixarr = [1, "HTML", new Date()];

// Use the toLocaleString() method to create a localized string representation
let stringFromArray = mixarr.toLocaleString();

// Display the localized string in an HTML element with id "toLocalString-output-1"
document.getElementById("toLocalString-output-1").innerHTML = stringFromArray;


// Example 2: toLocaleString() Method with Parameters
let prices = [689, 100, 4577, 56];

// Use the toLocaleString() method with parameters to format prices as currency in the "en-US" locale
let resultingString = prices.toLocaleString("en-US", { style: "currency", currency: "INR" });

// Display the resulting localized string in an HTML element with id "toLocalString-output-2"
document.getElementById("toLocalString-output-2").innerHTML = resultingString;
}
//END toLocalString() 





//start value()
function displayValue() {
    let languages = ["JavaScript", "Java", "C++"];
    let iterratorObject = languages.values();   // Create an Array Iterator object that contains the values of the array
    let text = "";  // Initialize an empty string to store the concatenated values with line breaks
    for (let element of iterratorObject) {    // Loop through the iterator and concatenate the values with line breaks
        text += element + "<br>";
    }
    document.getElementById("value-outout-1").innerHTML = text;
}
//END value()



//Start ValueOf()
function displayValueof() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const myarr = fruits.valueOf(); // Create an array by calling .valueOf() 
    let text = "["; // Initialize a string to store the concatenated values in an array-like format
    for (let elements of myarr) {   // Loop through the elements of myarr
        text += `"${elements}"`;    // Add double quotes around each element
        // Check if the current element is not the last element in myarr
        if (myarr.indexOf(elements) < myarr.length - 1) {
            text += ", ";   // Add a comma and space if it's not the last element
        }
    }
    text += "]";     // Close the array format with a closing bracket
    document.getElementById("valueof-outout-1").innerHTML = text;
}
//END valueOf()


















