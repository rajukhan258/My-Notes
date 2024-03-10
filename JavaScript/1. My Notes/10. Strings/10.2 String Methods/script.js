//START str.toLowerCase()
function toLowerCase() {
    // Declare a variable 'myString' and assign the string "Hello, World!" to it
    let myString = "Hello, World!";

    // Apply the toLowerCase() method to 'myString' to convert it to lowercase
    let lowerCaseString = myString.toLowerCase();

    // Set the inner HTML of an element with the ID 'toLowerCase-output-1' to the lowercase string
    document.getElementById("toLowerCase-output-1").innerHTML = lowerCaseString;
}
//END str.toLowerCase()





//START  str.toUpperCase()
function toUpperCase() {
    // Declare a variable 'myString' and assign the string "Hello, World!" to it
    let myString = "Hello, World!";

    // Apply the toUpperCase() method to 'myString' to convert it to uppercase
    let upperCaseString = myString.toUpperCase();

    // Set the inner HTML of an element with the ID 'toUperCase-output-1' to the uppercase string
    document.getElementById("toUperCase-output-1").innerHTML = upperCaseString;

}
//END  str.toUpperCase()






//START str.includes()
function includes() {
    // Initial string
    let myString = "Hello World";

    // Check if 'myString' includes "Hello"
    let checkHello = myString.includes("Hello");

    // Check if 'myString' includes "Goodbye"
    let checkGoodbye = myString.includes("Goodbye");

    // Display results in HTML elements
    document.getElementById("includes-output-1").innerHTML = `includes "Hello": ${checkHello}`;
    document.getElementById("includes-output-2").innerHTML = `includes "Goodbye": ${checkGoodbye}`;
}
//END str.includes()




//START str.startsWith()
function startsWith() {
    // Define the string
    let myString = "Hello World!";

    // Check if 'myString' starts with "He" and "Hi"
    let startsWithHello = myString.startsWith("He");
    let startsWithHi = myString.startsWith("Hi");

    // Display the results in HTML elements
    document.getElementById("startsWith-output-1").innerHTML = `Starts With "Hello": ${startsWithHello}`;
    document.getElementById("startsWith-output-2").innerHTML = `Starts with "Hi": ${startsWithHi}`;
}
//ENDstr.startsWith()





//START str.endsWith()
function endsWith() {
    // Define the string
    let myString = "Hello, World!";

    // Check if 'myString' ends with "rld!" and "Planet!"
    let endsWithWorld = myString.endsWith("rld!");
    let endsWithPlanet = myString.endsWith("Planet!");

    // Display the results in HTML elements
    document.getElementById("endsWith-output-1").innerHTML = endsWithWorld;
    document.getElementById("endsWith-output-2").innerHTML = endsWithPlanet;
}
//END str.endsWith()




//START str.search()
function search() {
    // Define the string
    let myString = "Hello, World!";

    // Search for "World" and "Universe" within 'myString'
    let searchResult1 = myString.search("World");
    let searchResult2 = myString.search("Universe");
    let indexUsingSearchRegex = myString.search(/W.*d/);

    // Display the search results in HTML elements
    document.getElementById("search-output-1").innerHTML = `Index of world: ${searchResult1}`;
    document.getElementById("search-output-2").innerHTML = `Index of Universe: ${searchResult2} (not found)`;
    document.getElementById("search-output-3").innerHTML = indexUsingSearchRegex;
}
//END str.search()




//START str.indexOf()
function indexOf() {
    // Define the string
    let myString = "Hello, World!";

    // Find the index of "World" and "Universe" within 'myString'
    let indexWorld = myString.indexOf("World");
    let indexUniverse = myString.indexOf("Universe");

    // Display the indices in HTML elements
    document.getElementById("indexOf-output-1").innerHTML = `Index Of "world": ${indexWorld}`;
    document.getElementById("indexOf-output-2").innerHTML = `Index OF "Universe": ${indexUniverse}`;
}
//END str.indexOf()




//START str.lastIndexOf()
function lastIndexOf() {
    let myString = "Hello, World!";

    //Find the last occurrence of each character
    let lastIndexL = myString.lastIndexOf("l");
    let lastIndexM = myString.lastIndexOf("M");

    // Display the indices in HTML elements
    document.getElementById("lastIndexOf-output-1").innerHTML = `last Index Of "l": ${lastIndexL}`;
    document.getElementById("lastIndexOf-output-2").innerHTML = `last Index Of "M": ${lastIndexM}`;
}
//END str.lastIndexOf()




//START str.match()
function match() {
    let myString = "The rain in Spain falls mainly in the plain";

    // Using match() with a regular expression to find all occurrences of 'ain'
    let matchResult = myString.match(/ain/g);

    // Display the match results in HTML elements
    document.getElementById("match-output-1").innerHTML = `[${matchResult.join(", ")}]`;
}
//END str.match()




//START str.replace()
function replace() {
    let myString = "Hello, World!";

    // Replace "World" with "Guys" in 'myString'
    let replacedString = myString.replace("World", "Guys");

    // Replace all occurrences of "ello" with "i" using a regular expression in 'myString'
    let replaceString2 = myString.replace(/ello/g, "i");

    // Display the replaced strings in HTML elements
    document.getElementById("replace-output-1").innerHTML = replacedString;
    document.getElementById("replace-output-2").innerHTML = replaceString2;
}
//END str.replace()





//START  str.trim()
function trim() {
    // Define the string with leading and trailing spaces
    let myString = "   Hello, World!   ";

    // Remove leading and trailing spaces from 'myString'
    let trimmedString = myString.trim();

    // Display the trimmed string in an HTML element
    document.getElementById("trim-output-1").innerHTML = trimmedString;
}
//END  str.trim()




//START str.charAt()
function charAt() {
    let myString = "Hello, World!";

    // Retrieves the character at index 7 (W)
    let character = myString.charAt(7);

    // Display the character in an HTML element
    document.getElementById("charAt-output-1").innerHTML = `Character at Index 4: ${character}`;
}
//END str.charAt()





//START str.charCodeAt()
function charCodeAt() {
    let myString = "Hello, World!";

    // Retrieves the Unicode value at index 7 (W)
    let charCode = myString.charCodeAt(7);

    // Display Uni-Code in an HTML element
    document.getElementById("charCodeAt-output-1").innerHTML = `Uni-Code for character at Index 7: ${charCode}`;
}
//END str.charCodeAt()





//START String.fromCharCode()
function fromCharCode() {
    // Creates a string from Unicode value 65 (A)
    let char1 = String.fromCharCode(65);

    // Creates a string from Unicode values for "Hello"
    let char2 = String.fromCharCode(72, 101, 108, 108, 111);

    // Display output in an HTML element
    document.getElementById("fromCharCode-output-1").innerHTML = char1;
    document.getElementById("fromCharCode-output-2").innerHTML = char2;
}
//END String.fromCharCode()





//START str.concat()
function concat() {
    let str1 = "Hello ";
    let str2 = "Guys! ";
    let str3 = "How are you?";

    let concat1 = str1.concat(str2);    // Concatenates str1 and str2
    let concat2 = str1.concat(str2, str3);  // Concatenates str1, str2 and str3

    // Display output in an HTML element
    document.getElementById("concat-output-1").innerHTML = concat1;
    document.getElementById("concat-output-2").innerHTML = concat2;
}
//END str.concat()





//START str.split()
function split() {
    // Original sentences
    let sentence = "This is a sample sentence.";
    let anotherSentense = "The octopus boldly explores.";

    // Splitting the sentences into arrays based on different criteria
    let words = sentence.split(" ");
    let words2 = anotherSentense.split("o");

    // Displaying the results in HTML elements
    document.getElementById("split-output-1").innerHTML = words;
    document.getElementById("split-output-2").innerHTML = words2;
}
//END str.split()






//START str.repeat()
function repeat() {
    let str = "Hello ";

    // Repeats the string "Hello " three times
    let repeatedString = str.repeat(3);

    // Displaying the results in HTML elements
    document.getElementById("repeat-output-1").innerHTML = repeatedString;
}
//END str.repeat()





//START str.slice()
function slice() {
    let str = "Hello, World!";

    // Extracts characters from from given indeces
    let slicedString = str.slice(7);
    let slicedString2 = str.slice(0, 5);

    // Displaying the results in HTML elements
    document.getElementById("slice-output-1").innerHTML = slicedString;
    document.getElementById("slice-output-2").innerHTML = slicedString2;
}
//END str.slice()





//START str.substr()
function substr() {
    let str = "Hello, World!";

    // Starts at index 7 and extracts 5 characters
    let substr = str.substr(7, 5);

    // Displaying the results in HTML elements
    document.getElementById("substr-output-1").innerHTML = substr;
}
//END str.substr()





//START str.substring()
function substring() {
    let str = "Hello, World!";

    // Extracts characters from index 
    let subString1 = str.substring(1);
    let subString2 = str.substring(7, 12);

    // Displaying the results in HTML elements
    document.getElementById("substring-output-1").innerHTML = subString1;
    document.getElementById("substring-output-2").innerHTML = subString2;
}
//END str.substring()





//START str.toString()
function tostring() {
    // Assigns a numeric value to the variable num
    let num = 42;

    // Converts the numeric value to its string representation
    let stringRepresentation = num.toString();

    // Displays the string representation in an HTML element
    document.getElementById("toString-output-1").innerHTML = stringRepresentation;
}
//END str.toString()






//START str.valueOf()
function valueof() {
    let strObject = new String("Hello");

    // Retrieves the primitive value of the String object
    let primitiveValue = strObject.valueOf();

    // Displays the string representation in an HTML element
    document.getElementById("valueOf-output-1").innerHTML = primitiveValue;
}
//END str.valueOf()





//START
//END