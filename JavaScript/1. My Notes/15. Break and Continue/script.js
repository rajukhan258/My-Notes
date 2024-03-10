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




//START Example 1: break in for loop
function forbreak() {
    for (let i = 0; i < 10; i++) {
        let text = (document.getElementById('forbreak-output-1'));
        if (i == 5) {
            text.innerHTML += `loop break at i = ${i} `;
            break;
        }
        text.innerHTML += (i) + '<br>';
    }
}
//END Example 1: break in for loop




//START Example 2: break in while loop
function whilebreak() {
    let count = 0;
    let text = document.getElementById('whilebreak-output-1');
    while (count < 10) {
        if (count == 5) {
            text.innerHTML += (`loop break at sum = ${count}`);
            break;
        }
        text.innerHTML += count + "<br>";
        count += 1;
    }
}
//END Example 2: break in while loop 



//START Example 3: break in switch statement
function switchbreak() {
    let x = 2;
    switch (x) {
        case 1:
            document.getElementById('switchbreak-output-1').innerHTML = "x = 1, did not match";
            break;
        case 2:
            document.getElementById('switchbreak-output-1').innerHTML = "x = 2, matched. the break statement terminates the switch statement when x is equal to 2";
            break;
        case 3:
            document.getElementById('switchbreak-output-1').innerHTML = "x = 1, did not match";
            break;
        default:
            document.getElementById('switchbreak-output-1').innerHTML = "Nothing Matched"
    }
}
//END Example 3: break in switch statement




//START Example 1: continue in for loop
let hasCodeRun = false;
function forcont() {
    if (hasCodeRun) {
        return;
    }
    for (let i = 1; i < 20; i++) {
        if (i % 2 != 0) {
            continue;
        }
        document.getElementById('forcont-output-1').innerHTML += `${i}, `;
    }
    document.getElementById('forcont-output-1').innerHTML += `<br> The <b><code>continue</code></b> statement skip at odd numbers and prints the even numbers`;
    hasCodeRun = true;
}
//END Example 1: continue in for loop




//START Example 2: continue in while loop
function whconti() {
    let i = 0;
    let text = document.getElementById('whcont-output-1');
    while (i < 20) {
        if (i % 2 === 0 && i % 4 === 0) {
            i++; // Increment 'i' to avoid an infinite loop
            continue; // Skips the current iteration when i divisible by both 2 and 4
        }
        text.innerHTML += (i) + ", ";
        i++;
    }
}
//END Example 2: continue in while loop   




//START Example 1: Using Labels with Nested Loops
function labelbreak() {
    outerLoop: for (let i = 0; i < 3; i++) {
        innerLoop: for (j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
                break outerLoop;
            }
            document.getElementById('labelbreak-output-1').innerHTML += `i = ${i}, j = ${j} <br>`;
        }
    }
}
//END Example 1: Using Labels with Nested Loops 




//START Example 2: Using Labels to Skip Iterations in a Nested Loop
function labelcont() {
    outerLoop: for (let i = 0; i < 3; i++) {
        innerLoop: for (j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
                continue outerLoop;
            }
            document.getElementById('labelcont-output-1').innerHTML += `i = ${i}, j = ${j} <br>`;
        }
    }
}
//END Example 2: Using Labels to Skip Iterations in a Nested Loop

