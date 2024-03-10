//Start Onjects Examples
function objectEx() {
    //Simple Object
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };

    // nested object
    const student = {
        name: 'John',
        age: 20,
        marks: {
            science: 70,
            math: 75
        }
    }

    document.getElementById("Ex-output-1").innerHTML = `Person Datatype: ${typeof person}`;
    document.getElementById("Ex-output-2").innerHTML = `student Datatype: ${typeof student}`;
}
//END Onjects Examples




//Start Object Literal
function Object_Literal() {
    // Creating an empty object called 'countires'
    let countires = {};

    // Creating an object called 'person' with properties
    let person = {
        // Adding properties to the 'person' object
        firstName: "John",
        lastName: "Doe",
        age: 50
    };

    // Creating an object called 'student' with nested properties
    const student = {
        name: 'John',
        age: 20,
        marks: {
            science: 70,
            math: 75
        }
    }

    // Displaying the data types of the objects in the HTML
    document.getElementById("Object_Literal-output-1").innerHTML = `countires Datatype: ${typeof countires}`;
    document.getElementById("Object_Literal-output-2").innerHTML = `Person Datatype: ${typeof person}`;
    document.getElementById("Object_Literal-output-3").innerHTML = `student Datatype: ${typeof student}`;
}
//END Object Literal




//Start Object.create method
function Object_create() {
    // Create an object named 'person' with properties and a method
    let person = {
        firstName: "Steve",
        lastName: "Jobs",
        fullName: function () {
            return `My name is ${this.firstName} ${this.lastName}.`;
        }
    }

    // Create a new object named 'newPerson' based on 'person' using Object.create
    let newPerson = Object.create(person);

    // Modify properties of 'newPerson'
    newPerson.firstName = "John";
    newPerson.lastName = "Smith";

    // Display the full name of 'newPerson' using the method from 'person'
    document.getElementById("Object_create-output-1").innerHTML = newPerson.fullName();
}
//END Object.create method




//Start Object_Constructor()
function Object_Constructor() {
    // Constructor function to create person objects
    function person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    // Create an instance of person1
    let person1 = new person("Steve", "Jobs", 25);
    // Display the properties of person1
    document.getElementById("Object-Constructor-output-1").innerHTML = printObjectProperties(person1);

    // Create another instance of person2
    let person2 = new person("John", "Smith", 35);
    // Display the properties of person2
    document.getElementById("Object-Constructor-output-2").innerHTML = printObjectProperties(person2);

    // Function to print object properties as a formatted string
    function printObjectProperties(obj) {
        let outputHTML = '{';
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                outputHTML += `${prop}: `;
                if (typeof obj[prop] === 'string') {
                    outputHTML += `"${obj[prop]}"`;
                } else {
                    outputHTML += obj[prop];
                }
                if (prop !== "age") {
                    outputHTML += ", ";
                }
            }
        }
        outputHTML += '}';
        return outputHTML;
    }
}

//Start prototype 
function Object_prototype() {
    // Constructor function to create Person objects
    function Person(firstname, lastname) {
        // Assigning properties to the object
        this.firstName = firstname;
        this.lastName = lastname;
    }

    // Adding a method to the prototype of Person
    Person.prototype.getFullName = function () {
        // Method to get the full name
        return `Hello, I am ${this.firstName} ${this.lastName}.`;
    };

    // Creating instances of the Person object
    const person1 = new Person("Allen", "Walker");
    const person2 = new Person("Elon", "Musk");

    // Displaying the output for person1 and person2
    document.getElementById("prototype-output-1").innerHTML = person1.getFullName();
    document.getElementById("prototype-output-2").innerHTML = person2.getFullName();
}
//End prototype
//END Object_Constructor()




//Start Object Using Class
function using_class() {
    // Class definition for creating Person objects
    class Person {
        // Constructor method to initialize object properties
        constructor(fname, lname) {
            this.firstName = fname;
            this.lastName = lname;
        }
        // Method to get the full name of the person
        fullName() {
            return `My name is ${this.firstName} ${this.lastName}.`;
        }
    }
    // Creating an instance of the Person class
    let person1 = new Person("John", "Smith");

    // Displaying the output for person1
    document.getElementById("Class-output-1").innerHTML = person1.fullName();
}
//END Object Using Class





//Start this keyword in javascript object
function thiskeyword() {
    var number = {
        num1: 10,
        num2: 15,
        // Method to calculate the sum of num1 and num2
        sum: function () {
            // 'this' refers to the current object, so this.num1 and this.num2 access the properties of the object
            return this.num1 + this.num2;
        }
    }
    // Get the output element by ID
    document.getElementById("this-output-1").innerHTML = `number.sum = ${number.sum()}`;
}

//END this keyword in javascript object





//start dot operator
function dot_operator() {
    // Simple Object
    var person = {
        // Properties of the person object
        firstName: "John",
        lastName: "Doe",
        age: 50
    };
    // Nested object (student object)
    const student = {
        // Properties of the student object
        name: 'John',
        age: 20,
        marks: {
            // Nested marks object with properties
            science: 70,
            math: 75
        }
    }
    // Displaying the output for accessing properties using dot notation
    document.getElementById("dot-output-1").innerHTML = `person.firstName = ${person.firstName}`;
    document.getElementById("dot-output-2").innerHTML = `student.marks.math = ${student.marks.math}`;
}
//END dot operator





//start bracket operator
function backet_operator() {
    const student = {
        // Properties of the student object
        "f name": 'John',
        age: 20,
        marks: {
            // Nested marks object with properties
            science: 70,
            math: 75
        }
    }


    // Example 1: Accessing property with a variable
    let propertyName = "marks";
    let NestedpropertyName = "math";
    let propertyValue = student[propertyName][NestedpropertyName];
    document.getElementById("bracket-output-1").innerHTML = `student[${propertyName}][${NestedpropertyName}] = ${propertyValue}`;

    // // Example 2: Accessing property with a space-separated string
    let spaceSeparatedPropertyName = "f name";
    let spaceSeparatedPropertyValue = student[spaceSeparatedPropertyName];

    document.getElementById("bracket-output-2").innerHTML = `student[${spaceSeparatedPropertyName}] = ${spaceSeparatedPropertyValue}`;
}
//END bracket operator




//Start Modifying Objects
function add_property() {
    // Student object with properties
    const student = {
        fname: 'John',
        age: 20,
        marks: {
            science: 70,
            math: 75
        }
    };

    // Displaying the object before modifications
    document.getElementById("added-output-1").innerHTML = `<b>Before:</b> ${printObjectProperties(student)}`;

    // Modifying the student object by adding new properties
    student["lname"] = "Smith"; //using bracket notation
    student.marks.computer = 90; //using dot notation

    // Displaying the object after modifications
    document.getElementById("added-output-2").innerHTML = `<b>After:</b> ${printObjectProperties(student)}`;

    // Displaying output as formatted string
    function printObjectProperties(obj) {
        let outputHTML = "{";
        let propCount = Object.keys(obj).length;

        let count = 0;
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                outputHTML += `${prop}: `;
                // Checking if the property is an object (nested object)
                if (typeof obj[prop] === 'object') {
                    outputHTML += printObjectProperties(obj[prop]);
                }
                // Handling string properties
                else if (typeof obj[prop] === 'string') {
                    outputHTML += `"${obj[prop]}"`;
                }
                // Handling other types of properties
                else {
                    outputHTML += `${obj[prop]}`;
                }
                count++;
                if (count < propCount) {
                    outputHTML += ", ";
                }
            }
        }
        outputHTML += "}";
        return outputHTML;
    }
}

function delete_property() {
    // Student object with properties
    const student = {
        fname: 'John',
        lname: `smith`,
        age: 20,
        marks: {
            science: 70,
            math: 75,
            computer: 90
        }
    };

    // Displaying the object before modifications
    document.getElementById("deleted-output-1").innerHTML = `<b>Before:</b> ${printObjectProperties(student)}`;

    // Modifying the student object by deleting properties
    delete student["lname"];    //using bracket notation
    delete student.marks.computer;  //using dot notation

    // Displaying the object after modifications
    document.getElementById("deleted-output-2").innerHTML = `<b>After:</b> ${printObjectProperties(student)}`;

    // Displaying output as formatted string
    function printObjectProperties(obj) {
        let outputHTML = "{";
        let propCount = Object.keys(obj).length;

        let count = 0;
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                outputHTML += `${prop}: `;
                // Checking if the property is an object (nested object)
                if (typeof obj[prop] === 'object') {
                    outputHTML += printObjectProperties(obj[prop]);
                }
                // Handling string properties
                else if (typeof obj[prop] === 'string') {
                    outputHTML += `"${obj[prop]}"`;
                }
                // Handling other types of properties
                else {
                    outputHTML += `${obj[prop]}`;
                }
                count++;
                if (count < propCount) {
                    outputHTML += ", ";
                }
            }
        }
        outputHTML += "}";
        return outputHTML;
    }
}
//END Modifying Objects






//Start looping through an Object ///////////////////////
//Start Using for...in loop
let forinloopHasRun = false;
function forinloop() {
    if (forinloopHasRun) {
        return;
    }
    // Car object with properties
    const car = {
        name: "Ford",
        color: "Black",
        model: "Avenger"
    }
    // Loop through the keys of the 'car' object using 'for...in'
    for (let key in car) {
        // Get the output element by ID
        let output = document.getElementById("forIn-output-1");
        // Display the current key
        output.innerHTML += `${key}: `;
        // Check the type of the property value
        if (typeof car[key] === 'string') {
            // If the property value is a string, enclose it in double quotes
            output.innerHTML += `"${car[key]}"<br>`;
        } else {
            // If the property value is not a string, display it as is
            output.innerHTML += `${car[key]}<br>`;
        }
    }
    // Set the flag to true to indicate that the loop has run
    forinloopHasRun = true;
}
//END Using for...in loop







//Using Object.keys() loop
// A flag to track whether the objectkeys function has already run
let objectkeysloopHasRun = false;
// Function to demonstrate looping through keys of an object using Object.keys()
function objectkeys() {
    // Check if the function has already run, if yes, return to prevent re-execution
    if (objectkeysloopHasRun) {
        return;
    }
    // Car object with properties
    let car = {
        name: "Ford",
        color: "Black",
        model: "Avenger"
    }
    // Get the output element by ID
    let output = document.getElementById("objectkeys-output-1");
    output.innerHTML += "[";
    // Loop through the keys of the 'car' object using Object.keys()
    for (let key of Object.keys(car)) {
        // Check the type of the key (string or not)
        if (typeof key === 'string') {
            // If the key is a string, enclose it in double quotes and wrap it in an array
            output.innerHTML += `"${Array.of(key)}"`;
        } else {
            // If the key is not a string, wrap it in an array
            output.innerHTML += `${Array.of(key)}`;
        }
        // Check if it's not the last key ('model') to append a comma
        if (key !== [...Object.keys(car)].pop()) {
            output.innerHTML += ", ";
        }
    }
    // Close the array and set the flag to true to indicate that the function has run
    output.innerHTML += "]";
    objectkeysloopHasRun = true;

    // Display the length of keys in another output element
    let output2 = document.getElementById("objectkeys-output-2");
    output2.innerHTML += `length = ${Object.keys(car).length}`;
}

//ENDUsing Object.keys() loop







//Using  Using Object.values() loop
// A flag to track whether the objectvalues function has already run
let objectvaluesLoopHasRun = false;

// Function to demonstrate looping through values of an object using Object.values()
function objectvalues() {
    // Check if the function has already run, if yes, return to prevent re-execution
    if (objectvaluesLoopHasRun) {
        return;
    }
    // Car object with properties
    let car = {
        name: "Ford",
        color: "Black",
        model: "Avenger"
    }
    // Get the output element by ID
    let output = document.getElementById("objectvalue-output-1");
    output.innerHTML += "[";
    // Loop through the values of the 'car' object using Object.values()
    for (let value of Object.values(car)) {
        // Check the type of the value (string or not)
        if (typeof value === 'string') {
            // If the value is a string, enclose it in double quotes and wrap it in an array
            output.innerHTML += `"${Array.of(value)}"`;
        } else {
            // If the value is not a string, wrap it in an array
            output.innerHTML += Array.of(value);
        }
        // Check if the current value is not the last one to append a comma
        if (value !== [...Object.values(car)].pop()) {
            output.innerHTML += ', ';
        }
    }
    // Close the array and set the flag to true to indicate that the function has run
    output.innerHTML += "]";
    objectvaluesLoopHasRun = true;
}

//END  Using Object.values() loop







//Start Using Object.entries() loop
// A flag to track whether the objectentries function has already run
let objectentriesloopHasRun = false;
// Function to demonstrate looping through entries of an object using Object.entries()
function objectentries() {
    // Check if the function has already run, if yes, return to prevent re-execution
    if (objectentriesloopHasRun) {
        return;
    }
    // Car object with properties
    let car = {
        name: "Ford",
        color: "Black",
        model: "Avenger"
    }
    // Get the output element by ID
    let output = document.getElementById("objectentries-output-1");
    // An array to store formatted key-value pairs
    let array = [];
    // Loop through the entries of the 'car' object using Object.entries()
    for (let entry of Object.entries(car)) {
        // Destructure the entry into key and value
        let [key, value] = entry;
        // Check the type of the value (string or not)
        if (typeof value === 'string') {
            // If the value is a string, enclose it in double quotes in the formatted string
            array.push(`["${key}", "${value}"]`);
        } else {
            // If the value is not a string, include it as is in the formatted string
            array.push(`["${key}", ${value}]`);
        }
    }
    // Display the array content in the output element
    output.innerHTML += `[${array}]`;
    // Set the flag to true to indicate that the function has run
    objectentriesloopHasRun = true;
}
//END Using Object.entries() loop

//END looping through an Object /////////////////////////////