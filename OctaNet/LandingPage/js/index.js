document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    // This ensures the HTML elements are available when the script runs.
    // Get the login popup, overlay, and login button
const loginPopup = document.getElementById("loginPopup");
const overlay = document.getElementById("overlay");
const loginButton = document.getElementById("loginButton");

// Get the close button and login submit button inside the popup
const closeButton = document.getElementById("closeButton");
const loginSubmit = document.getElementById("loginSubmit");

// Event listener to open the login popup
loginButton.addEventListener("click", function() {
    loginPopup.style.display = "block";
    overlay.style.display = "block";
});

// Event listener to close the login popup when the close button is clicked
closeButton.addEventListener("click", function() {
    loginPopup.style.display = "none";
    overlay.style.display = "none";
});

// Event listener to close the login popup when the user clicks outside of it
overlay.addEventListener("click", function() {
    loginPopup.style.display = "none";
    overlay.style.display = "none";
});

// Event listener to prevent the popup from closing when clicking inside the popup
loginPopup.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Event listener for the login form submission (you can implement your own logic here)
loginSubmit.addEventListener("click", function() {
    // Add your login logic here
    // Get the username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform a simple check (replace with your actual login logic)
    if (username === "amar" && password === "12345") {
        // Successful login
        alert("Login successful");
        // You can redirect the user to another page or perform additional actions here.
    } else {
        // Invalid login
        alert("Login failed. Please check your username and password.");
    }
});

});