alert("In this game youre Sargeant BOB");
alert(" Welcome Sargeant BOB, youre leading a night mission");
alert("Your Objectve is to rescue a captured pilot from enemy territory");

let choice = prompt("Your team has reached the edge of an enemy camp. Do you (1) sneak in quietly or (2) attack them in suprise or (3) call in an airstrike? TYPE 1, 2, 3");

//path 1 to sneak in quietly
if (choice == "1") {
    alert("Your team sneaks through the camp undetected...");
    alert("you find the pilot tied up in a tent. you quietly untie him and prepare to leave.");
    let escape = prompt("Do you (1) sneak back the way you came or (2) steal enemy Truck to escape quickly or (3) GET REVENGE? TYPE 1, 2, or 3.");
    
    if (escape == "1") {
       alert("you try sneaking back, but a tribe member spots you.");
       alert("They want to help you!");
       let help = prompt("Do you (1) ACCEPT their help or (2) DECLINE and try to escape on your own? TYPE 1 or 2.");

       if (help == "1") {
           alert("The tribe members guide you safely out of the camp and back to your base.");
           document.write("<h2>Sargeant BOB Mission Successful. You rescued the pilot with the help of the tribe!</h2>");
       }

       else if (help == "2") {
           alert("You try to escape on your own, but are quickly surrounded by enemy soldiers.");
           alert("The enemy captures you and the pilot.");
           document.write("<h2>Sargeant BOB Mission Failed. You were captured by the enemy.</h2>");
       }
    }
    
    else if (escape == "2") {
        alert("you stole an enemy truck, but it makes a loud noise attracting attention.");
        alert("The enemy captures you and the pilot.");
        document.write("<h2>Sargeant BOB Mission Failed. You were captured by the enemy.</h2>");
    }

    else if (escape == "3") {
        alert("You decide to get revenge by setting fire to the enemy camp.");
        alert("The fire spreads quickly, but in the chaos, you and the pilot are caught.");
        let retry = prompt("do you want to (1) SURRENDER or (2) FIGHT? TYPE 1 or 2.");

        if (retry == "1") {
            alert("You surrender to the enemy. Mission Failed.");
            document.write("<h2>Sargeant BOB Mission Failed. You surrendered to the enemy.</h2>");
        }

        else if (retry == "2") {
            alert("You fight bravely, but are outnumbered and captured, but manage to escape.");
            document.write("<h2>Sargeant BOB Mission Accomplished. You were captured but managed to escape.</h2>");
        }
    }
}
    
//path 2 to attack in surprise
 if (choice == "2") {
    alert("Your team launches a surprise attack on the enemy camp...");
    alert("After a fierce battle, you manage to rescue the pilot.");
    let retreat = prompt("Do you (1) retreat through the forest or (2) head to the river for a boat escape? TYPE 1 or 2.");
    
    if (retreat == "1") {
        alert("You retreat through the forest, but the enemy is in hot pursuit.");
        alert("you try sneaking back, but a tribe member spots you.");
       alert("They want to help you!");
       let help = prompt("Do you (1) ACCEPT their help or (2) DECLINE and try to escape on your own? TYPE 1 or 2.");

       if (help == "1") {
           alert("The tribe members guide you safely out of the camp and back to your base.");
           document.write("<h2>Sargeant BOB Mission Successful. You rescued the pilot with the help of the tribe!</h2>");
       }

       else if (help == "2") {
           alert("You try to escape on your own, but are quickly surrounded by enemy soldiers.");
           alert("The enemy captures you and the pilot.");
           document.write("<h2>Sargeant BOB Mission Failed. You were captured by the enemy.</h2>");
       }
    }
    
     if (retreat == "2") {
        alert("At the river, you find no boats. The enemy catches up to you.");
        let swim = prompt("Do you (1) SURRENDER or (2) or try and swim TYPE 1 or 2.");

        if (swim == "1") {
            alert("You surrender to the enemy. Mission Failed.");
            document.write("<h2>Sargeant BOB Mission Failed. You surrendered to the enemy.</h2>");
        }

        else if (swim == "2") {
            alert("You attempt to swim across the river.");
            alert("The current is strong, but you manage to make it to the other side.");
            document.write("<h2>Sargeant BOB Mission Accomplished. You escaped by swimming across the river.</h2>");
        }
    }

}

//path 3 to call in airstrike
 if (choice == "3") {
    alert("You call in an airstrike on the enemy camp...");
    alert("The airstrike is successful, but the explosion causes a landslide.");
   let outcome = prompt("Do you (1) search the rubble for the pilot or (2) retreat to avoid further danger? TYPE 1 or 2.");
    
    if (outcome == "1") {
        alert("You search through the rubble and find the pilot, but he is badly injured.");
        alert("You manage to get him to safety. Mission Accomplished!");
        document.write("<h2>Sargeant BOB Mission Successful. You rescued the injured pilot!</h2>");
    }
    
    else if (outcome == "2") {
        alert("You decide to retreat to avoid further danger.");
        alert("Unfortunately, the pilot is left behind but you manage to escape safely.");
        document.write("<h2>Sargeant BOB Mission Failed. The pilot was captured by the enemy, YOU ARE NOW FIRED FOR INCOMPLETE TASK.</h2>");
    }
}

