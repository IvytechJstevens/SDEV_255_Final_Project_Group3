// import cors from 'cors';

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        // Save the token to the local storage
        localStorage.setItem('token', data.token);
        // Redirect to the courses page
        window.location.href = 'index.html';
    } else {
        // Show an error message
        alert('Error: ' + data.message);
    }
});