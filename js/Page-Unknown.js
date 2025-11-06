let button = document.getElementById("start");
     if (button) 
         button.addEventListener("click", function() {
             alert("'.'")
             alert("'. .'");
             alert("'. . .'");
             alert("'What brings you here?'");
             alert("'Don't you have a mission to complete?'");
             alert("'Why are you still here?'");
             alert(". . . ");
             alert("(You don't remember how you got here...)");
             alert("(The place feels oddly familiar)");
             let M000 = prompt("Why am I here? (1) Look Around");
             if (M000 === "1") {
                 window.location.href = "mystery2.html";
             } else if (M000 === "...") {
                 alert("Youre unable to comprehend where you are, you just stoop there doing nothing. Time passes by, but you dont notice, the sun doesn't seem to move, its all ways sunny, the grass eternal green. You do nothing about it, all you want to do is spend your life in this eternal penetentiary.");
             } else {
                 alert("There is nothing for you here. You sat there, though the its sunny out, it feels dreadfully cold. Its calm and quiet. But it feels like someone is watching you.");
                 let M100 = prompt("You decided to do something. decided to follow the paved path ahead of you.");
             }
            
         })