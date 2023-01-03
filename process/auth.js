
$("#loginForm").submit(function (e) {
    e.preventDefault();
    var email = $("#recipient-name").val();
    var password = $("#message-text").val();

    $allValid = false;

    if (email == "") {
        $("#msg").html("Please enter your email");
        $allValid = false;
    } else {
        $("#msg").html("");
        $allValid = true;
    }

    if (password == "") {
        $("#passmsg").html("Please enter your password");
        $allValid = false;
    } else {
        $("#passmsg").html("");
        $allValid = true;
    }


    if ($allValid) {
        $("#loginModal").modal("hide");
        $("#loginSuccessModal").modal("show");
    }
});