// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem(email);

    // Check if user exists
    if (storedUser) {
        const user = JSON.parse(storedUser);  //JSON string, so we convert it back to a JavaScript object

        // Check if password matches
        if (user.password === password) {
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to homepage
        } else {
            alert("Incorrect password.");
        }
    } else {
        alert("Email not found.");
    }
});

// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting normally
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if all fields are filled
    if (username && email && password) {
        // Check if email already exists
        if (localStorage.getItem(email)) {
            alert("Email already exists. Please login.");
            return;
        }

        // Create user object
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Store user data in localStorage
        localStorage.setItem(email, JSON.stringify(user)); //

        alert("Signup successful! Please login.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill all the fields.");
    }
});
