// Form Validation
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showError() {
    emailInput.classList.add('error');
    errorIcon.style.display = 'block';
    errorMsg.style.display = 'block';
}

function resetError() {
    email.classList.remove('error');
    errorIcon.style.display = 'none';
    errorMsg.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        showError();
    }else {
        resetError();
    }
});

// Real-time validation while typing
emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value.trim())) {
        resetError();
    }
});