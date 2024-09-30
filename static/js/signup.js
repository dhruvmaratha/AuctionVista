// script.js

const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const phoneNumberInput = document.querySelector("#phone-number");
const captchaInput = document.querySelector("#captcha");
const termsAndConditionsCheckbox = document.querySelector(
  "#terms-and-conditions"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();
  const captcha = captchaInput.value.trim();
  const termsAndConditions = termsAndConditionsCheckbox.checked;

  if (username === "") {
    alert("Please enter a username");
    return;
  }

  if (email === "") {
    alert("Please enter an email address");
    return;
  }

  if (password === "") {
    alert("Please enter a password");
    return;
  }

  if (confirmPassword === "") {
    alert("Please confirm your password");
    return;
  }

  if (phoneNumber === "") {
    alert("Please enter a phone number");
    return;
  }

  if (captcha === "") {
    alert("Please enter the captcha code");
    return;
  }

  if (!termsAndConditions) {
    alert("Please agree to the terms and conditions");
    return;
  }

  // Submit the form data to the server
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("confirmPassword", confirmPassword);
  formData.append("phoneNumber", phoneNumber);
  formData.append("captcha", captcha);
  formData.append("termsAndConditions", termsAndConditions);

  fetch("/register", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Registration successful!");
        window.location.href = "/login";
      } else {
        alert("Registration failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// Validate username
usernameInput.addEventListener("input", () => {
  const username = usernameInput.value.trim();
  if (username.length < 3) {
    usernameInput.classList.add("invalid");
    document.querySelector(".username-availability").textContent =
      "Username must be at least 3 characters long";
  } else {
    usernameInput.classList.remove("invalid");
    document.querySelector(".username-availability").textContent = "";
  }
});

// Validate email
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailInput.classList.add("invalid");
    document.querySelector(".email-verification").textContent =
      "Invalid email address";
  } else {
    emailInput.classList.remove("invalid");
    document.querySelector(".email-verification").textContent = "";
  }
});

// Validate password
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value.trim();
  if (password.length < 8) {
    passwordInput.classList.add("invalid");
    document.querySelector(".password-strength").textContent =
      "Password must be at least 8 characters long";
  } else {
    passwordInput.classList.remove("invalid");
    document.querySelector(".password-strength").textContent = "";
  }
});

// Validate confirm password
confirmPasswordInput.addEventListener("input", () => {
  const confirmPassword = confirmPasswordInput.value.trim();
  if (confirmPassword !== passwordInput.value.trim()) {
    confirmPasswordInput.classList.add("invalid");
    document.querySelector(".password-strength").textContent =
      "Passwords do not match";
  } else {
    confirmPasswordInput.classList.remove("invalid");
    document.querySelector(".password-strength").textContent = "";
  }
});

// Validate phone number
phoneNumberInput.addEventListener("input", () => {
  const phoneNumber = phoneNumberInput.value.trim();
  if (!phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)) {
    phoneNumberInput.classList.add("invalid");
    document.querySelector(".phone-verification").textContent =
      "Invalid phone number";
  } else {
    phoneNumberInput.classList.remove("invalid");
    document.querySelector(".phone-verification").textContent = "";
  }
});

// Validate captcha
captchaInput.addEventListener("input", () => {
  const captcha = captchaInput.value.trim();
  if (captcha.length !== 6) {
    captchaInput.classList.add("invalid");
    document.querySelector(".captcha-verification").textContent =
      "Invalid captcha code";
  } else {
    captchaInput.classList.remove("invalid");
    document.querySelector(".captcha-verification").textContent = "";
  }
});
