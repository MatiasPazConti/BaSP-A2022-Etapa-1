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
        return false;
    }
    else if (section.getAttribute('id') == 'user-section') {
        var emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailValidation.test(input.value)) {
            errorLabel.innerHTML = 'Invalid email';
            section.appendChild(errorLabel);
            return false;
        }
        else {
            delete errorLabel;
            return true;
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
            return false;
        }
        else {
            delete errorLabel;
            return true;
        }
    }
    else {
        delete errorLabel;
        alert('Invalid field!');
        return false;
    }
}
window.onload = function() {
    var userValidation = false;
    var passValidation = false;

    const userSection = document.getElementById('user-section');
    const userInput = userSection.querySelector('input');
    userInput.onfocus = function() {
        userInput.setAttribute('value', '');
        userInput.classList.add('color-black');
        errorFocus(userSection);
    }
    userInput.onblur = function() {
        userValidation = errorBlur(userSection, userInput);
    }

    const passSection = document.getElementById('pass-section');
    const passInput = passSection.querySelector('input');
    passInput.onfocus = function() {
        passInput.setAttribute('value', '');
        errorFocus(passSection);
    }
    passInput.onblur = function() {
        passValidation = errorBlur(passSection, passInput);
    }

    const loginButton = document.querySelector('.login-button');
    loginButton.onclick = function(f) {
        f.preventDefault();
        if (!userValidation && !passValidation) {
            alert('Invalid email and password!');
        }
        else if (!userValidation) {
            alert('Invalid email!');
        }
        else if (!passValidation) {
            alert('Invalid password!');
        }
        else {
            var urlWithQP = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + userInput.value + '&password=' + passInput.value;
            fetch(urlWithQP)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    alert(data.msg);
                })
                .catch(function(error) {
                    console.log('Error:', error);
                })
        }
    }
}