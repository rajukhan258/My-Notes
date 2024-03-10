//START Object.assign()
function assing() {
    // Defining target and source objects
    const target = { a: 1, b: 2 };
    const source1 = { b: 3, c: 4 };
    const source2 = { d: 5 };
    // Using Object.assign to merge source objects into the target object
    const result = Object.assign(target, source1, source2);

    // Displaying the result and modified target object in the HTML
    document.getElementById("assign-output-1").innerHTML = `result = ${printObject(result)}`;
    document.getElementById("assign-output-2").innerHTML = `target = ${printObject(target)} //(target object is modified)`;

    // Function to print an object in a formatted way
    function printObject(obj) {
        let output = "{";
        let propcount = Object.keys(obj).length;
        let count = 0;

        for (let prop in obj) {
            // Checking if the property is an own property of the object
            if (obj.hasOwnProperty(prop)) {
                output += `${prop}:`;
            }
            // Checking the type of the property value
            if (typeof obj[prop] === `object`) {
                // If the value is an object, recursively call printObject
                output.innerHTML += printObject(obj[prop]);
            } else if (typeof obj[prop] === `string`) {
                // If the value is a string, wrap it in double quotes
                output += `"${obj[prop]}"`;
            } else {
                // Otherwise, append the value as is
                output += obj[prop];
            }
            // Incrementing the count and adding a comma if not the last property
            count++;
            if (count < propcount) {
                output += ", ";
            }
        }
        // Closing the curly brace and returning the formatted output
        return output + "}";
    }
}
//END Object.assign()




//START Object.create()
function objectcreate() {
    // Creating a prototype object
    const personPrototype = {
        greet: function () {
            return `Hello, ${this.name}.`;
        }
    };
    // Creating a new object with personPrototype as its prototype
    const newObject = Object.create(personPrototype);
    // Adding properties to the new object
    newObject.name = 'John';
    newObject.age = 30;

    //Accessing the inherited method from the prototype
    document.getElementById("create.output-1").innerHTML = newObject.greet();
}
//END Object.create()





//START Object.defineProperty()
function defineProperty() {
    //Creating an Object
    const person = {};

    //Adding a property with specific rules
    Object.defineProperty(person, "age", {
        value: 30,  //The value of the property
        writable: true, //It can be changed
        enumerable: true, //It shows up in a loop
        configurable: false //It can be deleted or have its rules changed 
    });

    document.getElementById("defineProperty-output-1").innerHTML = `<b>Before Update:</b> person.age = ${person.age}`;

    //Trying to change the peoperty value
    person.age = 31;    // This works because it's writable
    document.getElementById("defineProperty-output-2").innerHTML = `<b>After Update:</b> person.age = ${person.age} &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   // This works because it's writable`;

    //Adding another property with different rules changed
    Object.defineProperty(person, "gender", {
        value: "male",
        writable: false,   // It cannot be changed
        enumerable: true,
        configurable: false     //It cannot be deleted or have its ruled
    });

    document.getElementById("defineProperty-output-3").innerHTML = `<b>Before Update:</b> person.gender = ${person.gender}`;

    //Trying to change the property value or delete it
    person.gender = "Female";   //This won't work
    delete person.gender;   //This won't work either

    document.getElementById("defineProperty-output-4").innerHTML = `<b>After Update:</b> person.gender = ${person.gender} &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   //Output: Male (property remains unchanged)`;
}
//END Object.defineProperty()





//START Object.defineProperties()
function defineProperties() {
    //creating an Object
    const person = {};

    //Adding or modifying multiple properties with specific rules
    Object.defineProperties(person, {
        age: {
            value: 30,   //The value of the property
            writable: true,     //It can be changed
            enumerable: true,   //It shows up in a loop
            configurable: true  //It can be deleted or have its rules changed
        },
        gender: {
            value: "Male",
            writable: false,    //It cannot be changed
            enumerable: true,
            configurable: false     // It cannot be deleted or have its rules changed
        }
    });

    document.getElementById("defineProperties-output-1").innerHTML = `<b>Before Update:</b> person.age = ${person.age}, person.gender = ${person.gender}`;

    //Trying to change the "age" property value
    person.age = 35;    //This works because its writable

    //Trying to change the "gneder" property value or delete it
    person.gender = "Female";  //This won't work
    delete person.gender;   //This won't work either 

    document.getElementById("defineProperties-output-2").innerHTML = `<b>After Update:</b> person.age = ${person.age}&nbsp;&nbsp;&nbsp;   <em>// property "age" was changed</em>`;
    document.getElementById("defineProperties-output-3").innerHTML = `<b>Before Update:</b> person.gender = ${person.gender}&nbsp;&nbsp;&nbsp;&nbsp;<em>//property "gender" remains unchanged</em>`;
}
//END Object.defineProperties()






//START Object.freeze(obj)
function objectfreeze() {
    // Creating an object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };
    // Freezing the object
    Object.freeze(person);

    // Attempting to modify the object
    person.age = 31; // This won't work
    // Attempting to add a new property
    person.gender = "Male"; // This won't work
    // Attempting to delete a property
    delete person.name; // This won't work

    // Getting the HTML element to display the output
    let output = document.getElementById("freeze-output-1");
    // Initializing the output string
    output.innerHTML += "{";

    // Counting the number of properties in the object
    let propcount = Object.keys(person).length;
    let count = 0;

    // Iterating over the properties of the frozen object
    for (let key in person) {
        // Checking the type of the property value and formatting accordingly
        if (typeof person[key] === 'string') {
            output.innerHTML += `${key} : "${person[key]}"`;
        } else {
            output.innerHTML += `${key} : ${person[key]}`;
        }
        // Incrementing the count and adding a comma if not the last property
        count++;
        if (count < propcount) {
            output.innerHTML += ", ";
        }
    }
    // Closing the curly brace and displaying the formatted object in the HTML
    output.innerHTML += "}";
}
//END Object.freeze(obj)






//START Object.seal(obj): 
function sealedObject() {
    // Sample person object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Sealing the object using Object.seal
    Object.seal(person);

    // Attempting to add a new property (won't work in strict mode)
    person.NewPeoperty = "This won't work.";

    // Attempting to modify the value of an existing property (will work)
    person.age = 50;

    // Deleting a property (won't work in strict mode)
    delete person.gender;

    // Displaying the sealed object using the displaytext function
    document.getElementById("seal-output-1").innerHTML = displaytext(person);

    // Function to format the object for display
    function displaytext(obj) {
        let text = "{";
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                text += `${key}: "${obj[key]}", `;
            } else {
                text += `${key}: ${obj[key]}, `;
            }
        }
        text = text.slice(0, -2);
        return text + "}";
    }
}
//END Object.seal(obj): 





//START Object.getOwnPropertyDescriptor()
function PropertyDescriptor() {
    // Creating an object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };
    // Getting the property descriptor for the 'age' property
    const ageDescriptor = Object.getOwnPropertyDescriptor(person, 'age');

    // Getting the HTML element to display the output
    let output = document.getElementById("Descriptor-output-1");
    // Initializing the output string with an opening curly brace
    output.innerHTML = "{<br>";

    // Counting the number of properties in the property descriptor
    let propcount = Object.keys(ageDescriptor).length;
    let count = 0;

    // Iterating over the properties of the property descriptor
    for (let key in ageDescriptor) {
        // Checking the type of the property value and formatting accordingly
        if (typeof ageDescriptor[key] === 'string') {
            output.innerHTML += `${key}: "${ageDescriptor[key]}"`;
        } else {
            output.innerHTML += `${key}: ${ageDescriptor[key]}`;
        }
        // Incrementing the count and adding a comma and line break if not the last property
        count++;
        if (count < propcount) {
            output.innerHTML += ',<br> ';
        }
    }
    // Adding a line break and closing curly brace to the output
    output.innerHTML += "<br>}";
}
//END Object.getOwnPropertyDescriptor()





//START Object.getOwnPropertyDescriptors(obj, prop)
function PropertyDescriptors() {
    // Creating an object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    }

    // Getting property descriptors for the 'person' object
    const ageDescriptors = Object.getOwnPropertyDescriptors(person);

    // Displaying the descriptors in an HTML element
    document.getElementById("Descriptors-output-1").innerHTML = display(ageDescriptors);

    // Function to format and display property descriptors
    function display(obj) {
        // Counting the number of properties in the object
        let propcount = Object.keys(obj).length;
        let count = 0;

        // Initializing the output string with an opening brace
        let output = "{<br>";

        // Looping through each property in the object
        for (let key in obj) {
            // Adding the property name and an opening brace
            output += `${key}: {`;

            // Looping through each property of the descriptor
            for (let prop in obj[key]) {
                // Checking if the property is 'value' and a string, then formatting accordingly
                if (prop === 'value' && typeof obj[key][prop] === 'string') {
                    output += `${prop}: "${obj[key][prop]}", `;
                } else {
                    output += `${prop}: ${obj[key][prop]}, `;
                }
            }

            // Removing the trailing comma and space, adding a closing brace
            output = output.slice(0, -2); // Remove the trailing comma and space
            output += "}";

            // Incrementing the count
            count++;

            // Adding a comma and line break if there are more properties
            if (count < propcount) {
                output += ',<br> ';
            }
        }

        // Adding a line break and closing brace
        output += "<br>}";
        return output;
    }
}
//END Object.getOwnPropertyDescriptors(obj, prop)





// START Object.getOwnPropertyNames()
function getOwnPropertyNames() {
    // Creating an object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Getting property names of the 'person' object
    const propertyNames = Object.getOwnPropertyNames(person);

    // Displaying the property names in an HTML element
    document.getElementById("PropertyNames-output-1").innerHTML = displayoutput(propertyNames);

    // Function to format and display property names
    function displayoutput(arr) {
        let text = [];

        // Looping through each property name
        for (let key of arr) {
            // Checking if the property name is a string, then format accordingly
            if (typeof key === 'string') {
                text.push(`"${key}"`);
            } else {
                text.push(key);
            }
        }

        // Joining the formatted property names with ', ' and enclosing in square brackets
        return `[${text.join(', ')}]`;
    }
}
// END Object.getOwnPropertyNames()






//START Object.getOwnPropertySymbols()
function getOwnPropertySymbols() {
    // Creating an object with symbol properties
    const person = {
        [Symbol("id")]: 1,
        [Symbol("name")]: "John",
        age: 30,
        gender: "Male"
    };

    // Get an array of all symbol properties from the 'person' object
    const getallsymbols = Object.getOwnPropertySymbols(person);

    // Display the symbol properties in an HTML element
    document.getElementById("Symbols-output-1").innerHTML = displaySymbolArray(getallsymbols);

    // Function to format and display an array of symbol properties
    function displaySymbolArray(arr) {
        let text = [];

        // Looping through each symbol in the array
        for (let symbol of arr) {
            // Converting the symbol to a string and adding to the 'text' array
            text.push(String(symbol));
        }

        // Joining the formatted symbol strings with ', ' and enclosing in square brackets
        return "[ " + text.join(", ") + " ]";
    }
}
//END Object.getOwnPropertySymbols()





//START Object.getPrototypeOf()
function getPrototype() {
    // Sample person object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Using Object.getPrototypeOf to get the prototype of the person object
    const getPrototypePerson = Object.getPrototypeOf(person);

    // Logging the result to the browser console
    console.log(getPrototypePerson);

    // Displaying a message for the user
    document.getElementById("getPrototype-output-1").innerHTML = `Press F12 to open the console to see the output.`;
}
//END Object.getPrototypeOf()






//START Object.setPrototypeOf()
function setPrototype() {
    // Sample objects
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    const employee = {
        jobTitle: "Developer",
        company: "XYZ Corp"
    };

    // Setting the prototype of the person object to the employee object
    Object.setPrototypeOf(person, employee);

    // Displaying the prototype of the person object
    document.getElementById("setPrototype-output-1").innerHTML = displaytext(Object.getPrototypeOf(person));

    // Function to format the prototype object for display
    function displaytext(obj) {
        let text = "{";
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                text += `${key}: "${obj[key]}", `;
            } else {
                text += `${key}: ${obj[key]}, `;
            }
        }
        text = text.slice(0, -2);
        return text + "}";
    }
}
//END Object.setPrototypeOf()





//START Object.hasOwnProperty(prop)
function hasOwnProp() {
    // Sample object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Checking if the 'name' property is a direct property of the 'person' object
    const hasNameProperty = person.hasOwnProperty("name");

    // Checking if the 'toString' property is a direct property of the 'person' object
    // (toString is inherited from the prototype chain, so it should return false)
    const hasToStringProperty = person.hasOwnProperty("toString");

    // Displaying the results
    document.getElementById("hasOwnProperty-output-1").innerHTML = `hasNameProperty: ${hasNameProperty}, <br> hasToStringProperty: ${hasToStringProperty}`;
}
//END Object.hasOwnProperty(prop)





//START Object.entries(obj)
let entriesloop = false;
function obejctentries() {
    if (entriesloop) {
        return;
    }
    // The person object with properties
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Getting the HTML element to display the output
    let output = document.getElementById("entries-output-1");

    // Array to store formatted [key, value] pairs as strings
    let array = [];

    // Iterating over the [key, value] pairs obtained from Object.entries
    for (let entry of Object.entries(person)) {
        // Destructuring the entry into key and value
        let [key, value] = entry;

        // Checking the type of the value and formatting accordingly
        if (typeof value === `string`) {
            array.push(`["${key}", "${value}"]`);
        } else {
            array.push(`["${key}", ${value}]`);
        }
    }

    // Displaying the formatted array in the HTML
    output.innerHTML += `[${array}]`;
    entriesloop = true;
}
//END Object.entries(obj)




//START Object.keys(obj)
function keys() {
    // Sample object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Using Object.keys to get an array of property names
    const keysArray = Object.keys(person);

    //Displaying the results
    document.getElementById("keys-output-1").innerHTML = `[${keysArray.join(", ")}]`;
}
//END Object.keys(obj) keys-output-1





//START Object.values(obj)
function values() {
    //Sample object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };
    //Using Object.values to get an array of property values
    const valuesArray = Object.values(person);
    //Displaying the results
    document.getElementById("values-output-1").innerHTML = `[${valuesArray.join(", ")}]`;
}
//END Object.values(obj)





//START Object.is(obj1, obj2):
function isObjectIs() {
    // Sample values
    const Value1 = 5;
    const Value2 = 5;

    const obj1 = { name: "John" };
    const obj2 = { name: "John" };

    // Using Object.is to compare values
    const isEqual1 = Object.is(Value1, Value2);
    const isEqual2 = Object.is(obj1, obj2);

    // Displaying the results
    document.getElementById("is-output-1").innerHTML = `Are Value1 and Value2 equal? ${isEqual1}<br>Are obj1 and obj2 equal? ${isEqual2}`
}
//END Object.is(obj1, obj2):





// Start Object.isExtensible()
function isExtensible() {
    // Sample object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Checking if the 'person' object is extensible
    const isExtensible = Object.isExtensible(person);

    // Displaying the result
    document.getElementById("isExtensible-output-1").innerHTML = `Is the "Person" Object Extensible? ${isExtensible}`;
}
//END Object.isExtensible()





//Start Object.isFrozen()
function isFrozen() {
    // Sample object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Freezing the 'person' object
    Object.freeze(person);

    // Checking if the 'person' object is frozen
    const isFrozen = Object.isFrozen(person);

    // Displaying the result
    document.getElementById("isFrozen-output-1").innerHTML =
        `Is the 'person' object frozen? ${isFrozen}`;
}
//END Object.isFrozen()





//START Object.isSealed()
function isSealed() {
    // Sample object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Sealing the 'person' object
    Object.seal(person);

    // Checking if the 'person' object is sealed
    const isSealed = Object.isSealed(person);

    // Displaying the result
    document.getElementById("isSealed-output-1").innerHTML =
        `Is the 'person' object sealed? ${isSealed}`;
}
//END Object.isSealed()





//START Object.preventExtensions()
function preventExtensions() {
    // Sample object
    const person = {
        name: "John",
        age: 30,
        gender: "Male"
    };

    // Preventing extensions on the 'person' object
    Object.preventExtensions(person);

    // Attempting to add a new property to the 'person' object
    person.newProperty = "This won't work.";

    // Displaying the result
    document.getElementById("preventExtensions-output-1").innerHTML =
        `Is the 'person' object extensible? ${Object.isExtensible(person)}`;
}
//END Object.preventExtensions()  
