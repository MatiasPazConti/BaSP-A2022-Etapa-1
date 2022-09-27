function errorFocus(section) {
    var errorLabel = section.querySelector('.error-label');
    if (errorLabel != null) {
        section.removeChild(errorLabel);
        delete errorLabel;
    }
}
function errorBlur(section, input) {
    var errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    if (input.value == '') {
        errorLabel.innerHTML = 'Required field';
        section.appendChild(errorLabel);
    }
    else {
        delete errorLabel;
    }
}
window.onload = function () {
    // First-Name Functions
    const fNameSection = document.getElementById('fname-section');
    const fNameInput = fNameSection.querySelector('input');
    fNameInput.onfocus = function() {
        errorFocus(fNameSection);
    }
    fNameInput.onblur = function() {
        errorBlur(fNameSection, fNameInput);
    }
    //  Last-Name Functions
    const lNameSection = document.getElementById('lname-section');
    const lNameInput = lNameSection.querySelector('input');
    lNameInput.onfocus = function() {
        errorFocus(lNameSection);
    }
    lNameInput.onblur = function() {
        errorBlur(lNameSection, lNameInput);
    }
    //  Documment Functions
    const docSection = document.getElementById('doc-section');
    const docInput = docSection.querySelector('input');
    docInput.onfocus = function() {
        errorFocus(docSection);
    }
    docInput.onblur = function() {
        errorBlur(docSection, docInput);
    }
    //  Birth-Date Functions
    const birthSection = document.getElementById('birth-section');
    const birthInput = birthSection.querySelector('input');
    birthInput.onfocus = function() {
        errorFocus(birthSection);
    }
    birthInput.onblur = function() {
        errorBlur(birthSection, birthInput);
    }
    //  Phone-Number Section
    const phoneSection = document.getElementById('phone-section');
    const phoneInput = phoneSection.querySelector('input');
    phoneInput.onfocus = function() {
        errorFocus(phoneSection);
    }
    phoneInput.onblur = function() {
        errorBlur(phoneSection, phoneInput);
    }
    //  Direction Section
    const dirSection = document.getElementById('dir-section');
    const dirInput = dirSection.querySelector('input');
    dirInput.onfocus = function() {
        errorFocus(dirSection);
    }
    dirInput.onblur = function() {
        errorBlur(dirSection, dirInput);
    }
    //  Town Section
    const townSection = document.getElementById('town-section');
    const townInput = townSection.querySelector('input');
    townInput.onfocus = function() {
        errorFocus(townSection);
    }
    townInput.onblur = function() {
        errorBlur(townSection, townInput);
    }
    //  Postal-Code Section
    const postalSection = document.getElementById('postal-section');
    const postalInput = postalSection.querySelector('input');
    postalInput.onfocus = function() {
        errorFocus(postalSection);
    }
    postalInput.onblur = function() {
        errorBlur(postalSection, postalInput);
    }
    //  Email Section
    const emailSection = document.getElementById('email-section');
    const emailInput = emailSection.querySelector('input');
    emailInput.onfocus = function() {
        errorFocus(emailSection);
    }
    emailInput.onblur = function() {
        errorBlur(emailSection, emailInput);
    }
    //  Password Section
    const passSection = document.getElementById('pass-section');
    const passInput = passSection.querySelector('input');
    passInput.onfocus = function() {
        errorFocus(passSection);
    }
    passInput.onblur = function() {
        errorBlur(passSection, passInput);
    }
    //  Repeat-Password Section
    const rPassSection = document.getElementById('rpass-section');
    const rPassInput = rPassSection.querySelector('input');
    rPassInput.onfocus = function() {
        errorFocus(rPassSection);
    }
    rPassInput.onblur = function() {
        errorBlur(rPassSection, rPassInput);
    }
}