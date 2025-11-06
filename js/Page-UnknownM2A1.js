let buttonM2A1 = document.getElementById("start2-1");
     if (buttonM2A1) 
         buttonM2A1.addEventListener("click", function() {
           let AA = prompt("The Paved Path ends here. It feels like a bad idea to step on the grass here. You decided to walk back to where you came from...");
             if (AA === "walk") {
               window.location.href = "Punishment.html"
             }
            
               else {
                  window.location.href = "mystery2.html";
         }
      })