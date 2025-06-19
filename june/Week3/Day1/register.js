function registerUser() {
    const user = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value,
      mobile: document.getElementById("mobile").value.trim(),
    };
  
    if (user.name && user.email && user.password && user.mobile) {
      localStorage.setItem("userData", JSON.stringify(user));
      alert("Registered Successfully!");
      window.location.href = "login.html";
    } else {
      alert("⚠️ Please fill in all fields.");
    }
  }
  