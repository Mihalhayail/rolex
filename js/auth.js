const registerForm = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("regEmail");
const passwordInput = document.getElementById("regPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const registerBtn = document.getElementById("registerBtn");

const usernameError = document.getElementById("usernameError");
const regEmailError = document.getElementById("regEmailError");
const regPasswordError = document.getElementById("regPasswordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const showPasswordIcons = document.querySelectorAll(".show-password");

// Validasi Email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validasi Username: Tidak boleh mengandung angka
function validateUsername(username) {
  const regex = /^[A-Za-z]+$/;
  return regex.test(username);
}

// Validasi Form
function validateForm() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  let isValid = true;

  if (!validateUsername(username)) {
    usernameError.textContent = "Username should not contain numbers.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  registerBtn.disabled = !isValid;
}

// Event listeners
usernameInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);

// Show/Hide Password
showPasswordIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = this.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      this.textContent = "Hide";
    } else {
      input.type = "password";
      this.textContent = "Show";
    }
  });
});

// Validasi pada saat submit
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  // Validasi Email
  if (!validateEmail(email)) {
    regEmailError.textContent = "Please enter a valid email address.";
    return;
  } else {
    regEmailError.textContent = "";
  }

  // Proses Registrasi (Simulasi atau bisa diganti dengan panggilan API)
  const registrationSuccess = true;  // Anggap pendaftaran berhasil (ganti dengan logika nyata)

  if (registrationSuccess) {
    alert("Registration successful!");

    // Reset form setelah pendaftaran berhasil
    registerForm.reset();
    registerBtn.disabled = true;

    // Arahkan pengguna ke halaman login setelah registrasi berhasil
    window.location.href = 'login.html';  // Ganti dengan URL halaman login kamu
  } else {
    alert("Registration failed!");
  }
});


