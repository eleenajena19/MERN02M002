function loginUser() {
    const loginName = document.getElementById("loginName").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;
    const message = document.getElementById("message");
    const storedUser = JSON.parse(localStorage.getItem("userData"));
  
    if (storedUser && storedUser.name === loginName && storedUser.password === loginPassword) {
      message.textContent = "✅ Login Successfully!";
      message.style.color = "#00ffcc";
    } else {
      message.textContent = "❌ Invalid User!";
      message.style.color = "#ff6b6b";
    }
  }
  