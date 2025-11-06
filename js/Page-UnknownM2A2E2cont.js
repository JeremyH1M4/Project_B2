let buttonc = document.getElementById("startBt");
     if (buttonc) 
         buttonc.addEventListener("click", function() {
            let MQ = prompt("Its calm here. Do you think its safe? (1) Yes, (2) No");
                if (MQ === "1") {
                    alert("Thats good. You felt tired after all that walking you decided to take rest.");
                    alert("Why am I back here again?");
                    window.location.href = "page22.html";
                }
                else if (MQ === "2") {
                    alert("Nothing happens. Just you overthinking. Why would you think it's not safe...?")
                }
                else {
                    alert("...")
                }
         })