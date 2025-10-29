'use strict';

// Choice test

let N1A1 = prompt("left, middle, or right?"); {

console.log("JavaScript is linked properly");
if (N1A1 ===  "left") {
    prompt("you chose the left path and met a dragon. AND YOU HAVE TO FIGHT Type 'fight' to battle it.");
    if (N1A1 === "fight") {
       alert("you fought bravely and won! You found a treasure chest full of gold!");
    }
}

else if (N1A1 === "middle") {
    prompt("you chose the middle path and fell into a pit. Type 'climb' to try to get out, or 'wait' to wait for help."); 
}

else if (N1A1 === "right") {
    prompt("you met a friendly fella who gave you a treasure map and asked you to follow it! Type 'follow' to follow the map.");
}

else if (N1A1 === "") {
    alert("what have you done?");
    alert("Why did you not choose a path?");
    alert("what now?");
    
    let N000 = prompt("1 2 3");

    if (N000 === "1") {
        alert("youre still here?");
    }

    else if (N000 === "2") {
        alert("Youre stuck here within white and void.");
    }

    else if (N000 === "3") {
        alert("Just give up.");
    }

    else {
        alert("01010011 01101111 01101101 01100101 01110100 01101000 01101001 01101110 01100111 00100000 01101001 01110011 00100000 01110111 01110010 01101111 01101110 01100111 00100000 01101000 01100101 01110010 01100101 00101110 00100000 01011001 01101111 01110101 00100111 01110010 01100101 00100000 01101110 01101111 01110100 00100000 01110011 01110101 01110000 01110000 01101111 01110011 01100101 01100100 00100000 01110100 01101111 00100000 01100010 01100101 00100000 01101000 01100101 01110010 01100101 00101110 00101110 00101110 00100000 01100001 01110010 01100101 00100000 01111001 01101111 01110101 00111111");
    }
}

else {
    alert("Invalid Choice");
}
}