const messageInput = document.getElementById("message-input");
        // const btn = document.querySelector(".btn2")
        // btn.addEventListener("click", getMessage())
        messageInput.addEventListener("keydown", function(event){
            if (event.key == "Enter")
            getMessage();
        })

        function getMessage(){
            document.getElementById("message-output").innerHTML = messageInput.value;
            messageInput.value = "";
        }