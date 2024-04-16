// Function to display a simple alert
function showAlert() {
  alert("Hello, this is a basic alert!");
}

// Function to change the text color of an element
function changeColor() {
  const element = document.getElementById("textElement");
  if (element) {
    element.style.color = "red";
  }
}

// Function to toggle visibility of an element
function toggleVisibility() {
  const element = document.getElementById("toggleElement");
  if (element) {
    element.style.display = element.style.display === "none" ? "block" : "none";
  }
}

// Function to handle form submission with basic validation
function handleSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (!username || !password) {
    alert("Please enter both username and password!");
    return;
  }
  
  // Proceed with form submission or other actions...
}

// Event listener to run code after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Attach event listeners to specific elements
  const showAlertButton = document.getElementById("showAlertButton");
  if (showAlertButton) {
    showAlertButton.addEventListener("click", showAlert);
  }
  
  const changeColorButton = document.getElementById("changeColorButton");
  if (changeColorButton) {
    changeColorButton.addEventListener("click", changeColor);
  }
  
  const toggleVisibilityButton = document.getElementById("toggleVisibilityButton");
  if (toggleVisibilityButton) {
    toggleVisibilityButton.addEventListener("click", toggleVisibility);
  }
  
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", handleSubmit);
  }
});
