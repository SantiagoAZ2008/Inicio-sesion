script.js
  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    // Simulación de validación
    if (username === "usuario" && password === "contraseña") {
        message.textContent = "Ingreso exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const message = document.getElementById('register-message');

    // Simulación de validación
    if (username && password) {
        message.textContent = "Registro exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Por favor, complete todos los campos.";
        message.style.color = "red";
    }
}

