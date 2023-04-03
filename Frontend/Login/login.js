function checkPasswordMatch() {
    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password != confirmPassword) {
        document.getElementById("password-match").innerHTML = "Passwords do not match!";
        document.getElementById("sign-up-button").disabled = true;
    } else {
        document.getElementById("password-match").innerHTML = "";
        document.getElementById("sign-up-button").disabled = false;
    }
}

// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;

// console.log("username",document.getElementById("username"))

// get references to the login and signup forms
var loginForm = document.getElementById('loginform');
var signupForm = document.getElementById('signform');

// add event listeners to the forms
loginForm.addEventListener('submit', function(event) {
    // prevent the form from submitting
    event.preventDefault();

    // get the form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // do something with the form values
    console.log('Username:', username);
    console.log('Password:', password);
});

signform.addEventListener('submit', function(event) {
    // prevent the form from submitting
    event.preventDefault();

    // get the form values
    var new_username = document.getElementById('new-username').value;
    var new_password = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // do something with the form values
    console.log('Full name:', new_username);
    console.log('Email:', new_password); 
    console.log('Confirm password:', confirmPassword);
});

