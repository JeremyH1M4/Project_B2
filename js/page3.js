alert("In this game youre Sargeant BOB");
alert(" Welcome Sargeant BOB, youre leading a night mission");
alert("Your Objectve is to rescue a captured pilot from enemy territory");

let choice = prompt("Your team has reached the edge of an enemy camp. Do you (1) sneak in quietly or (2) attack them in suprise or (3) call in an airstrike? TYPE 1, 2, or 3.");

//path 1 to sneak in quietly
if (choice == "1") {
    alert("Your team sneaks through the camp undetected...");
    alert("you find the pilot tied up in a tent. you quietly untie him and prepare to leave.");
    let escape = prompt("Do you (1) sneak back the way you came or (2) steal enemy Truck to escape quickly TYPE 1 or 2.");
    
    if (escape == "1") {
        alert("You and the pilot sneak back successfully and escape the camp undetected. Mission Accomplished!");
        document.write("<h2>Sargeant BOB Mission Successful. You rescued the pilot!</h2>");
    }
    
    else if (escape == "2") {
        alert("you stole an enemy truck, but it makes a loud noise attracting attention.");
        alert("The enemy captures you and the pilot.");
        document.write("<h2>Sargeant BOB Mission Failed. You were captured by the enemy.</h2>");
    }
}
    
//path 2 to attack in surprise
 if (choice == "2") {
    alert("Your team launches a surprise attack on the enemy camp...");
    alert("After a fierce battle, you manage to rescue the pilot.");
    let retreat = prompt("Do you (1) retreat through the forest or (2) head to the river for a boat escape? TYPE 1 or 2.");
    
    if (retreat == "1") {
        alert("You and your team successfully retreat through the forest and escape with the pilot. Mission Accomplished!");
        document.write("<h2>Sargeant BOB Mission Successful. You rescued the pilot!</h2>");
    }
    
    else if (retreat == "2") {
        alert("At the river, you find no boats. The enemy catches up to you.");
        document.write("<h2>Sargeant BOB Mission Failed. You were captured by the enemy at the DOCKS.</h2>");

    }

}

//path 3 to call in airstrike
 if (choice == "3") {
    alert("You call in an airstrike on the enemy camp...");
    alert("The airstrike is successful, but the explosion causes a landslide.");
    alert("The landslide traps you and the pilot under debris.");
    document.write("<h2>Sargeant BOB Mission Failed. You were trapped by a landslide.</h2>");
}

