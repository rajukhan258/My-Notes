//<!-- Array Literals length-->
function showlength() {
    // getting the length of an array
    let numbers = [1, 2, 3, 4, 5];
    document.getElementById("length1").innerHTML = `Length of Array: <b>${numbers.length}<b/>`;
    // mixed array
    let arr = [1, 10.5, "Hello", true, [1, 2, 3], { a: 1, b: 2 }];
    document.getElementById("length2").innerHTML = `Length of Mixed Array: <b>${arr.length}</b>`;
}



//Constructors length
function arylength() {
    // array with 0 length
    let empty = new Array();
    document.getElementById('empty').innerHTML = `Length: <b>${empty.length}</b>`;

    // array with integer
    let numbers = new Array(1, 2, 3, 4, 5);
    document.getElementById('nums').innerHTML = `Length Integer: <b>${numbers.length}</b>`;

    // mixed array
    let mixed = new Array(1, "Hello", true, 2.5, [1, 2]);
    document.getElementById('mix').innerHTML = `Length Mixed: <b>${mixed.length}</b>`;

    //mixed array
    let arry = new Array(4);
    arry[0] = "Hello";
    arry[1] = false;
    arry[2] = null;
    arry[3] = undefined;
    document.getElementById('arry').innerHTML = `Length arry: <b>${arry.length}</b>`
}




//Creating an array using split
function arySplit() {
    let js = 'JavaScript'
    const charsInJavaScript = js.split('')
    document.getElementById("arysplit_1").innerHTML = `Array_1 = [${charsInJavaScript}]`;

    let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    const companies = companiesString.split(',')
    document.getElementById("arysplit_2").innerHTML = `Array_2 = [${companies}]`;
}





//Getting Array value from user
function getarry() {
    let arry = new Array(4);   //length already defined
    for (i = 0; i < arry.length; i++) {
        arry[i] = prompt(`Enter element #${i + 1}:`);
    }
    document.getElementById("getary").innerHTML = (`arry = [${arry}]`);
}





//Accessing array elements using Index
function aryaccess() {
    let arr = [1, 10, "Hello", true, 2.5];
    // accessing first element
    document.getElementById("ary0").innerHTML = `arr[0] = ${arr[0]}`;
    // accessing third element
    document.getElementById("ary2").innerHTML = `arr[2] = ${arr[2]}`;
    // accessing last element
    document.getElementById("arylast").innerHTML = `arr[last] = ${arr[arr.length - 1]}`;
}



//Accessing array elements using Loop
function aryloop() {
    const arr = [1, 10, "Hello", true, 2.5];
    document.getElementById("result").innerHTML = "<ul>";
    for(let i = 0; i < arr.length; i++){
        document.getElementById("result").innerHTML += `<li> arr[${i}] = ${arr[i]} </li>`;
    }
    document.getElementById("result").innerHTML += "</ul>";
}


//Accessing array elements using Loop 2
function accessloop(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
    text +=  "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;
}



//Accessing array elements using forEach loop
function accessthreefruit() {
    const myArray = ['Banana', 'Orange', 'Apple'];
    let text = "<ul>";
    myArray.forEach((element) => {
        text += `<li> Element: ${element} </li>`;
        });
    text += "</ul>";    
    document.getElementById("foreachresult").innerHTML = text;
}




// Modifying Arrays
function modifyarrays() {
    const numbers = [4, 9, 7, 3, 8];
    numbers[0] = "Ram";
    numbers[2] = 10;
    numbers[(numbers.length)-1] = true;
    document.getElementById("updatetext").innerHTML = `updated arry = [${numbers}]`;
}    


//Deleting Arrays
function deletearrays() {
    const numbers = [4, 9, 7, 3, 8];
    delete numbers[0]; //delete first element of the array
    delete numbers[2]; //delete third element of the array
    document.getElementById("deletedtext").innerHTML = `Updated array = [${numbers}]`;
}