// profile.js

// Check if the user is already logged in
var loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
    // User is logged in, retrieve information from localStorage
    loggedInUser = JSON.parse(loggedInUser);

    // Display the username on the profile page
    document.getElementById("usernameDisplay").innerText = "Username: " + loggedInUser.username;

    // You can add additional logic to display other profile information
    // For example, retrieve and display age, DOB, contact, etc.
} else {
    // User is not logged in, handle this case (e.g., redirect to login page)
    window.location.href = "../index.html";
}

// Logout function
function logout() {
    // Clear the loggedInUser from localStorage
    localStorage.removeItem("loggedInUser");

    // Redirect to the login page
    window.location.href = "../index.html";
}

// Update Profile function
function updateProfile() {
    var age = $("#age").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var email = $("#email").val();
    var contact = $("#contact").val();

    $.ajax({
        type: "POST",
        url: "http://localhost:8888/guvitest/php/updateProfile.php",
        data: { age: age, dob: dob, gender: gender, email: email, contact: contact },
        success: function (response) {
            alert(response);
        }
    });
}
