$("#contactpage").submit(function (e) {
    e.preventDefault();
    var name = $("#Name").val();
    var email = $("#Email").val();
    var subject = $("#Subject").val();
    var phone = $("#Phone").val();
    var comments = $("#Comments").val();
    $allValid = false;
    let submitButton = document.getElementById("submitButton");

    if (name == "") {
        $("#names-feedback").html("Please enter your name");
        $allValid = false;
    } else {
        $("#names-feedback").html("");
        $allValid = true;
    }

    if (email == "") {
        $("#email-feedback").html("Please enter your email");
        $allValid = false;
    } else {
        $("#email-feedback").html("");
        $allValid = true;
    }


    if (subject == "") {
        $("#subject-feedback").html("Please enter your subject");
        $allValid = false;
    } else {
        $("#subject-feedback").html("");
        $allValid = true;
    }

    if (phone == "") {
        $("#tel-feedback").html("Please enter your phone");
        $allValid = false;
    } else {
        $("#tel-feedback").html("");
        $allValid = true;
    }

    if (comments == "") {
        $("#comments-feedback").html("Please enter your comments");
        $allValid = false;
    } else {
        $("#comments-feedback").html("");
        $allValid = true;
    }

    if ($allValid) {
        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        var messagesList = JSON.parse(localStorage.getItem("messagesList")) || [];
        var message = {
            id: new Date().getTime(),
            name: name,
            email: email,
            subject: subject,
            phone: phone,
            comments: comments
        };

        var templateParams = {
            name: name,
            email: email,
            subject: subject,
            phone: phone,
            message: comments,
            to: "KWIZERA Fabrice"
        };

        emailjs.send("service_s5gvxpc", "template_jlqlmjc", templateParams)
            .then(function (response) {
                messagesList.push(message);
                localStorage.setItem("messagesList", JSON.stringify(messagesList));
                $("#messageSentModal").modal("show");
                setTimeout(function () {
                    $("#Name").val("");
                    $("#Email").val("");
                    $("#Subject").val("");
                    $("#Phone").val("");
                    $("#Comments").val("");
                    submitButton.disabled = false;
                    submitButton.innerHTML = "Send";
                }, 2000);
            }, function (error) {
                console.log(error)
                alert(error)
            });
    }

});
