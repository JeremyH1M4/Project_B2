'use strict';

// Choice test

let N1A1 = prompt("left, middle, or right?"); {

console.log("JavaScript is linked properly");
if (N1A1 ===  "left") {
    prompt("you chose the left path and met a dragon. AND YOU HAVE TO FIGHT Type 'fight' to battle it.");
    if (N1A1 = "fight") {
       alert("you fought bravely and won! You found a treasure chest full of gold!");
    }
}

else if (N1A1 === "middle") {
    prompt("you chose the middle path and fell into a pit. Type 'climb' to try to get out, or 'wait' to wait for help."); 
}

else if (N1A1 === "right") {
    prompt("you met a friendly fella who gave you a treasure map and asked you to follow it! Type 'follow' to follow the map.");
}

else {
    alert("Invalid Choice")
}
}