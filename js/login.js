function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Demo credentials
    if (email === "kpraveenkumar7022@gmail.com" && password === "12345") {
        alert("Login successful!");
        window.location.href = "index.html";

    } else {
        alert("Invalid email or password");
    }
}
