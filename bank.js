document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // chack user mail & password
    if (userEmail == 'baaperpola@baap.com' && userPassword == 'baaperpola') {
        window.location.href = 'banking.html';
    }
})