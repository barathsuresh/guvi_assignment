function signup() {
    var username = $("#username").val();
    var password = $("#password").val();
    var age = $("#age").val();
    var dob = $("#dob").val();
    var contact = $("#contact").val();

    $.ajax({
        type: "POST",
        url: "http://localhost:8888/guvitest/php/signup.php",
        data: { 
            username: username, 
            password: password, 
            age: age, 
            dob: dob, 
            contact: contact, 
        },
        success: function (response) {
            alert(response);
            window.location.href = "../index.html";
        }
    });
}

