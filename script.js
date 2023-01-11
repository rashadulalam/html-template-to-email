const submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", () => {
    const contactName = document.getElementById("contactName");
    const contactEmail = document.getElementById("contactEmail");
    const contactMessage = document.getElementById("contactMessage");

    const nameValue = contactName.value;
    const emailValue = contactEmail.value;
    const messageValue = contactMessage.value;

    
    if(nameValue && emailValue && messageValue) {
        var templateParams = {
            nameValue: nameValue,
            emailValue: emailValue,
            messageValue: messageValue
        };

    emailjs.send('service_8eoo6ni', 'template_068iu0m', templateParams)
    .then(function(response) {

        if(response.status == 200) {
            contactName.value = "";
            contactEmail.value = "";
            contactMessage.value = "";

            document.getElementById("success_msg").innerText = "Email sent successfully!";
        } else {
            contactName.value = "";
            contactEmail.value = "";
            contactMessage.value = "";
            document.getElementById("success_msg").innerHTML = "<p class='text-danger'>Email sent failed!</p>";
        }

    }, function(error) {
       console.log('FAILED...', error);
    });


    }
});