// login.js

// Check if the user is already logged in
var loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
    // User is already logged in, retrieve information from localStorage
    loggedInUser = JSON.parse(loggedInUser);
    // Perform actions based on the user's status
    // For example, you can redirect to the profile page or update the UI
    alert("Welcome back, " + loggedInUser.username + "!");
    // Redirect to profile page or update UI as needed
    window.location.href = "html/profile.html";
} else {
    // User is not logged in, continue with login logic
    function login() {
        var username = $("#username").val();
        var password = $("#password").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/guvitest/php/login.php",
            data: { username: username, password: password },
            success: function (response) {
                if (response === "success") {
                    // Store user info in localStorage
                    var loggedInUser = { username: username };
                    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                    // Notify the user (this is just an example, modify as needed)
                    alert("Login successful! Welcome, " + username);

                    // Redirect to profile page or update UI as needed
                    window.location.href = "html/profile.html";
                } else {
                    alert("Login failed. Please check your credentials.");
                }
            },
            error: function (xhr, status, error) {
                console.error("AJAX request failed:", status, error);
                alert("An error occurred during the login process. Please try again.");
            }
        });
    }
}
