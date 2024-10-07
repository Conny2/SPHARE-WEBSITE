const nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
    if (nameInput.value.length < 3) {
        nameInput.setCustomValidity("Name must be at least 3 characters long.");
    } else {
        nameInput.setCustomValidity("");
    }
});

function validateName(name) {
    return name.length >= 3;
}

function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return email.match(emailPattern);
}

if (!isValid) {
    nameInput.style.borderColor = "red";
} else {
    nameInput.style.borderColor = "green";
}