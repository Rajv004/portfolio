(function () {
    emailjs.init("nQUJXvqRiB6FKloLQ");
})();

document.getElementById("send-message").addEventListener("click", (e) => {
    const name = document.getElementById("full-name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value;
    const emailJson = {
        name,
        subject,
        email, phone, budget, message
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (name.length <= 0) {
        popupShow("danger", "Please enter your full name.. !")
    } else if (subject.length <= 0) {
        popupShow("danger", "Please enter subject.. !")
    } else if (email.length <= 0) {
        popupShow("danger", "Please enter your email.. !")
    } else if (message.length <= 0) {
        popupShow("danger", "Please enter your message.. !")
    } else if (!emailRegex.test(email)) {
        popupShow("danger", "Please enter valid email.. !")
    } else {
        emailjs.send("service_ha17qre", "template_r3o0mmw", emailJson)
            .then(function (response) {
                popupShow("success", "Please enter valid email.. !")
            }, function (error) {
                popupShow("danger", "Something went wrong. Please try again.. !");
            });
    }


})

function popupShow(type, message) {
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.textContent = message;
    if (type == "success") {
        popup.classList.add("success");
    }
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 5000);
}
