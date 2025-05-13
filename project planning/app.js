// Handle Register Form Submission
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      message.textContent = data.msg || 'Something went wrong!';
      if (response.status === 201) {
        // Redirect to login page after successful registration
        window.location.href = 'login.html';
      }
    } catch (error) {
      message.textContent = 'Error: ' + error.message;
    }
  });
}

// Handle Login Form Submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const loginMessage = document.getElementById('login-message');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      loginMessage.textContent = data.msg || 'Something went wrong!';

      if (response.status === 200) {
        // Store JWT token and redirect to dashboard
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html'; // Or any other protected page
      }
    } catch (error) {
      loginMessage.textContent = 'Error: ' + error.message;
    }
  });
}
