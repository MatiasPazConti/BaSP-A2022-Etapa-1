window.onload = function() {
    //  Username Functions
    const userSection = document.getElementById('user-section');
    const userInput = userSection.querySelector('input');
    userInput.onfocus = function() {
        userInput.setAttribute('value', '');
        userInput.classList.add('color-black');
        var userLabel = userSection.querySelector('label');
        if (userLabel != undefined) {
            userSection.removeChild(userLabel);
        }
    }
    userInput.onblur = function() {
        var userLabel = document.createElement('label');
        userLabel.classList.add('error-label');
        var userInput = userSection.querySelector('input');
        if (userInput.value == '') {
            userLabel.innerHTML = 'Required field';
            userSection.appendChild(userLabel);
        }
    }
    //  Password Functions
    const passSection = document.getElementById('pass-section');
    const passInput = passSection.querySelector('input');
    passInput.onfocus = function() {
        passInput.setAttribute('value', '');
        passInput.classList.add('color-black');
        var passLabel = passSection.querySelector('label');
        if (passLabel != undefined) {
            passSection.removeChild(passLabel);
        }
    }
    passInput.onblur = function() {
        var passLabel = document.createElement('label');
        passLabel.classList.add('error-label');
        var passInput = passSection.querySelector('input');
        if (passInput.value == '') {
            passLabel.innerHTML = 'Required field';
            passSection.appendChild(passLabel);
        }
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