document.addEventListener("DOMContentLoaded", function () {
    // Simulated user data (replace with actual login data)
    const user = {
        name: "John Doe",
        role: "Student"
    };

    document.getElementById("username").innerText = user.name;
    document.getElementById("userRole").innerText = user.role;
});

function logout() {
    alert("Logging out...");
    window.location.href = "login.html"; // Redirect to login page
}
