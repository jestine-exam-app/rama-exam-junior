function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === "admin" && pass === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid login credentials";
  }
}