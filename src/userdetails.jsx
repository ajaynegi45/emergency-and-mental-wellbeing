import Cookies from 'js-cookie';

function handleLogin(username, password) {
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => {
            if (response.ok) {
                return response.json(); // Assuming user details are returned
            } else {
                throw new Error('Invalid credentials');
            }
        })
        .then((user) => {
            // Save user details in a cookie
            Cookies.set('user', JSON.stringify(user), { expires: 7, secure: true }); // Secure and expires in 7 days
            window.location.href = '/dashboard'; // Redirect to dashboard
        })
        .catch((error) => alert(error.message));
}

