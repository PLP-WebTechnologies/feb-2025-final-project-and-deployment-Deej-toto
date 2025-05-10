function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    if (name === "" || email === "") {
        alert("Both fields are required.");
        return false;
    }
    return true;
}
