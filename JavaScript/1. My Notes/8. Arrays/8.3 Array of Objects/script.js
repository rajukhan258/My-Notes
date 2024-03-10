
function runcode() {
    const people = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 }
    ];
    // Accessing and using the array of objects
    document.getElementById("output-1").innerHTML = people[0].name + " " + people[0].age + "<br>" + people[2].name + " " + people[2].age;

    // Iterating through the array of objects
    people.forEach(function (person) {
        let display = document.getElementById("output-2");
        display.innerHTML += `Name: ${person.name}, Age: ${person.age} <br>`;
    });


    // Second Example
    const favoriteFruits = [
        { name: "Apple", color: "Red" },
        { name: "Banana", color: "Yellow" },
        { name: "Grapes", color: "Purple" }
    ];

    // Accessing and using the array of objects
    document.getElementById("output-3").innerHTML = favoriteFruits[2].color;

    // Iterating through the array of objects
    let output = "";
    function printElements(element) {
        output += `Name: ${element.name}, color: ${element.color} <br>`;
    }
    favoriteFruits.forEach(printElements);
    document.getElementById("output-4").innerHTML = output;

    //short Code:
    // favoriteFruits.forEach(function (favoriteFruits) {
    //     let show = document.getElementById("output-4");
    //     show.innerHTML += `Name: ${favoriteFruits.name}, color: ${favoriteFruits.color} <br>`;
    // })
}


