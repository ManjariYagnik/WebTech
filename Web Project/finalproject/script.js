function expandDropdown(id) {
    document.getElementById(id).classList.add("show");
}

function collapseDropdown(id) {
    document.getElementById(id).classList.remove("show");
}

savePassword = () => {
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-password").value;
    const fName = document.getElementById("fname").value; // Corrected ID
    const lName = document.getElementById("lname").value; // Corrected ID
    const phone = document.getElementById("login-phone").value; // Corrected ID

    let entries = JSON.parse(localStorage.getItem('savedEntries')) || [];

    entries.push({ fName, lName, email, pass });

    localStorage.setItem("savedEntries", JSON.stringify(entries));

    // Clear input fields after saving
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("login-phone").value = "";

    window.location.href = "index.html";
}

