document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    if (name === "") {
        event.preventDefault();
        alert("Name is required!");
    }
});
