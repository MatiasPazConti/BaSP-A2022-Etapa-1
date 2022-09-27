//  errorFocus
function errorFocus(section) {
    var errorLabel = section.querySelector('.error-label');
    if (errorLabel != null) {
        section.removeChild(errorLabel);
        delete errorLabel;
    }
}
//  errorBlur
function errorBlur(section, input) {
    var errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    if (input.value == '') {
        errorLabel.innerHTML = 'Required field';
        section.appendChild(errorLabel);
    }
    else if (section.getAttribute('id') == 'user-section') {
        var emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailValidation.test(input.value)) {
            errorLabel.innerHTML = 'Invalid email';
            section.appendChild(errorLabel);
        }
        else {
            delete errorLabel;
        }
    }
    else if (section.getAttribute('id') == 'pass-section') {
        var passValidation = /^[a-z0-9]+$/i;
        console.log(input.value);
        console.log(input.value.length);
        if ((input.value.length < 8) || (input.value.length > 16) || !passValidation.test(input.value))
        {
            errorLabel.innerHTML = 'Invalid password';
            section.appendChild(errorLabel);
        }
        else {
            delete errorLabel;
        }
    }
    else {
        delete errorLabel;
    }
}
window.onload = function() {
    //  Username Functions
    const userSection = document.getElementById('user-section');
    const userInput = userSection.querySelector('input');
    userInput.onfocus = function() {
        userInput.setAttribute('value', '');
        userInput.classList.add('color-black');
        errorFocus(userSection);
    }
    userInput.onblur = function() {
        errorBlur(userSection, userInput);
    }
    //  Password Functions
    const passSection = document.getElementById('pass-section');
    const passInput = passSection.querySelector('input');
    passInput.onfocus = function() {
        passInput.setAttribute('type', 'password');
        passInput.setAttribute('value', '');
        passInput.classList.add('color-black');
        errorFocus(passSection);
    }
    passInput.onblur = function() {
        errorBlur(passSection, passInput);
    }
    //  Login-Button
    const loginButton = document.querySelector('.login-button');
    loginButton.onclick = function(f) {
        f.preventDefault();
        var userInput = userSection.querySelector('input');
        console.log('Username:', userInput.value);
        var passInput = passSection.querySelector('input');
        console.log('Password:', passInput.value);
    }
}