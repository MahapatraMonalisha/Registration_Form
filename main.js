function validateForm() {
    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const success = document.getElementById("success");

    const nameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(username)) {
        nameError.textContent = "Enter your username.";
        isValid = false;
    }

    if (email === "" || !email.match(/\S+@\S+\.\S+/)) {
        emailError.textContent = "Enter your email address.";
        isValid = false;
    }

    if (password === "" || password.length < 8 || !/\d/.test(password)) {
        passwordError.textContent =
            "Enter your password.";
        isValid = false;
    }

    if (isValid) {
        success.style.display = 'block';        
    }

    return isValid;
}