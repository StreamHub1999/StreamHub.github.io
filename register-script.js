document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const registrationForm = document.getElementById('registration-form');
    
    // Password requirement indicators
    const lengthIndicator = document.getElementById('length');
    const uppercaseIndicator = document.getElementById('uppercase');
    const lowercaseIndicator = document.getElementById('lowercase');
    const numberIndicator = document.getElementById('number');
    const specialIndicator = document.getElementById('special');
    
    // Password validation function
    function validatePassword() {
        const password = passwordInput.value;
        
        // Check for length
        if (password.length >= 8) {
            lengthIndicator.classList.add('valid');
        } else {
            lengthIndicator.classList.remove('valid');
        }
        
        // Check for uppercase
        if (/[A-Z]/.test(password)) {
            uppercaseIndicator.classList.add('valid');
        } else {
            uppercaseIndicator.classList.remove('valid');
        }
        
        // Check for lowercase
        if (/[a-z]/.test(password)) {
            lowercaseIndicator.classList.add('valid');
        } else {
            lowercaseIndicator.classList.remove('valid');
        }
        
        // Check for numbers
        if (/[0-9]/.test(password)) {
            numberIndicator.classList.add('valid');
        } else {
            numberIndicator.classList.remove('valid');
        }
        
        // Check for special characters
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            specialIndicator.classList.add('valid');
        } else {
            specialIndicator.classList.remove('valid');
        }
    }
    
    // Event listeners for password validation
    passwordInput.addEventListener('keyup', validatePassword);
    passwordInput.addEventListener('input', validatePassword);
    
    // Form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match!');
            return;
        }
        
        // Validate all password requirements are met
        const password = passwordInput.value;
        const requirementsMet = 
            password.length >= 8 && 
            /[A-Z]/.test(password) && 
            /[a-z]/.test(password) && 
            /[0-9]/.test(password) && 
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        
        if (!requirementsMet) {
            alert('Please ensure all password requirements are met!');
            return;
        }
        
        // Submit the form (in a real implementation, you would handle the form submission here)
        console.log('Registration form submitted successfully!');
        console.log({
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: '********' // Don't log the actual password
        });
        
        // Simulate successful registration
        alert('Account created successfully! Redirecting to login page...');
        
        // Redirect to login page (in a real implementation)
        // window.location.href = 'login.html';
    });
});