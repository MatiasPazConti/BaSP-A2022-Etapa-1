//  Alphanumeric CONST
const EMPTYSPACE = ' ';
const NUMBERS = '1234567890';
const LETTERS = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
//  errorFocus FUNCTION
function errorFocus(section) {
    var errorLabel = section.querySelector('.error-label');
    if (errorLabel != null) {
        section.removeChild(errorLabel);
        delete errorLabel;
    }
}
//  errorBlur FUNCTION
function errorBlur(section, input) {
    var errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    if (input.value == '') {
        errorLabel.innerHTML = 'Required field';
        section.appendChild(errorLabel);
    }
    else if ((section.getAttribute('id') == 'fname-section') || (section.getAttribute('id') == 'lname-section') ||
    (section.getAttribute('id') == 'town-section')) {
        //  First-Name & Last-Name & Town
        var nameValidation = true;
        for (i = 0; nameValidation && (i < input.value.length); i++){
            nameValidation = (LETTERS.indexOf(input.value.charAt(i), 0) != -1) || (input.value.charAt(i) == EMPTYSPACE);
        }
        var firstSpace = input.value.indexOf(EMPTYSPACE, 0);
        if (firstSpace != -1) {
            var invalidSpace = (firstSpace == 0) || (firstSpace == input.value.length - 1);
            var moreSpaces = input.value.indexOf(EMPTYSPACE, firstSpace + 1) != -1;
        }
        if ((input.value.length <= 3) || !nameValidation || ((firstSpace != -1) && (invalidSpace || moreSpaces))) {
            errorLabel.innerHTML = 'Invalid name';
            section.appendChild(errorLabel);
        }
        else {
            delete errorLabel;
        }
    }
    else if (section.getAttribute('id') == 'doc-section')
    {
        //  Documment
        var docValidation = true;
        for (i = 0; docValidation && (i < input.value.length); i++) {
            docValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;
        }
        if ((input.value.length <= 7) || !docValidation) {
            errorLabel.innerHTML = 'Invalid documment';
            section.appendChild(errorLabel);
        }
        else
        {
            delete errorLabel;
        }
    }
    else if (section.getAttribute('id') == 'birth-section')
    {
        //  Birth-Date
    }
    else if (section.getAttribute('id') == 'phone-section')
    {
        //  Phone-Number
        var phoneValidation = true;
        for (i = 0; phoneValidation && (i < input.value.length); i++) {
            phoneValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;
        }
        if ((input.value.length <= 10) || !phoneValidation) {
            errorLabel.innerHTML = 'Invalid documment';
            section.appendChild(errorLabel);
        }
        else
        {
            delete errorLabel;
        }
    }
    else if (section.getAttribute('id') == 'dir-section')
    {
        //  Adress
        var firstSpace = input.value.indexOf(EMPTYSPACE, 0);
        if (firstSpace == -1) {
            errorLabel.innerHTML = 'Invalid adress';
            section.appendChild(errorLabel);
        }
        else
        {
            var invalidSpace = (firstSpace == 0) || (firstSpace == input.value.length - 1);
            var moreSpaces = input.value.indexOf(EMPTYSPACE, firstSpace + 1) != -1;
            var dirValidation = true;
            for (i = 0; dirValidation && (i < firstSpace); i++) {
                dirValidation = LETTERS.indexOf(input.value.charAt(i), 0) != -1;    
            }
            for (i = firstSpace + 1; dirValidation && (i < input.value.length); i++) {
                dirValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;    
            }
            if ((input.value.length < 5) || !dirValidation || invalidSpace || moreSpaces) {
                errorLabel.innerHTML = 'Invalid adress';
                section.appendChild(errorLabel);
            }
            else
            {
                delete errorLabel;
            }
        }
    }
    else if (section.getAttribute('id') == 'postal-section')
    {
        //  Postal-Code
        var postalValidation = true;
        for (i = 0; postalValidation && (i < input.value.length); i++) {
            docValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;
        }
        if ((input.value.length < 4) || (input.value.length > 5) || !docValidation) {
            errorLabel.innerHTML = 'Invalid code';
            section.appendChild(errorLabel);
        }
        else
        {
            delete errorLabel;
        }
    }
    else if (section.getAttribute('id') == 'email-section')
    {
        //  Email
        var emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailValidation.test(input.value)) {
            errorLabel.innerHTML = 'Invalid email';
            section.appendChild(errorLabel);
        }
        else {
            delete errorLabel;
        }
    }
    else if ((section.getAttribute('id') == 'pass-section') || (section.getAttribute('id') == 'rpass-section'))
    {
        //  Password & Repeat-Password
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
//  errorRepeat FUNCTION
function errorRepeat(section, rSection) {
    var errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    errorLabel.setAttribute('id', 'repeat-label');
    if (rSection.querySelector('input').value != section.querySelector('input').value) {
        errorLabel.innerHTML = 'Password does not match';
        rSection.appendChild(errorLabel);
    }
    else
    {
        delete errorLabel
    }
}
window.onload = function () {
    // First-Name FOCUS and BLUR
    const fNameSection = document.getElementById('fname-section');
    const fNameInput = fNameSection.querySelector('input');
    fNameInput.onfocus = function() {
        errorFocus(fNameSection);
    }
    fNameInput.onblur = function() {
        errorBlur(fNameSection, fNameInput);
    }
    //  Last-Name FOCUS and BLUR
    const lNameSection = document.getElementById('lname-section');
    const lNameInput = lNameSection.querySelector('input');
    lNameInput.onfocus = function() {
        errorFocus(lNameSection);
    }
    lNameInput.onblur = function() {
        errorBlur(lNameSection, lNameInput);
    }
    //  Documment FOCUS and BLUR
    const docSection = document.getElementById('doc-section');
    const docInput = docSection.querySelector('input');
    docInput.onfocus = function() {
        errorFocus(docSection);
    }
    docInput.onblur = function() {
        errorBlur(docSection, docInput);
    }
    //  Birth-Date FOCUS and BLUR
    const birthSection = document.getElementById('birth-section');
    const birthInput = birthSection.querySelector('input');
    birthInput.onfocus = function() {
        errorFocus(birthSection);
    }
    birthInput.onblur = function() {
        errorBlur(birthSection, birthInput);
    }
    //  Phone-Number FOCUS and BLUR
    const phoneSection = document.getElementById('phone-section');
    const phoneInput = phoneSection.querySelector('input');
    phoneInput.onfocus = function() {
        errorFocus(phoneSection);
    }
    phoneInput.onblur = function() {
        errorBlur(phoneSection, phoneInput);
    }
    //  Direction FOCUS and BLUR
    const dirSection = document.getElementById('dir-section');
    const dirInput = dirSection.querySelector('input');
    dirInput.onfocus = function() {
        errorFocus(dirSection);
    }
    dirInput.onblur = function() {
        errorBlur(dirSection, dirInput);
    }
    //  Town FOCUS and BLUR
    const townSection = document.getElementById('town-section');
    const townInput = townSection.querySelector('input');
    townInput.onfocus = function() {
        errorFocus(townSection);
    }
    townInput.onblur = function() {
        errorBlur(townSection, townInput);
    }
    //  Postal-Code FOCUS and BLUR
    const postalSection = document.getElementById('postal-section');
    const postalInput = postalSection.querySelector('input');
    postalInput.onfocus = function() {
        errorFocus(postalSection);
    }
    postalInput.onblur = function() {
        errorBlur(postalSection, postalInput);
    }
    //  Email FOCUS and BLUR
    const emailSection = document.getElementById('email-section');
    const emailInput = emailSection.querySelector('input');
    emailInput.onfocus = function() {
        errorFocus(emailSection);
    }
    emailInput.onblur = function() {
        errorBlur(emailSection, emailInput);
    }
    //  Password FOCUS and BLUR
    const passSection = document.getElementById('pass-section');
    const passInput = passSection.querySelector('input');
    passInput.onfocus = function() {
        errorFocus(passSection);
    }
    passInput.onblur = function() {
        errorBlur(passSection, passInput);
        if (rPassSection.querySelector('#repeat-label') != null) {
            errorFocus(rPassSection);
        }
        errorRepeat(passSection, rPassSection);
    }
    //  Repeat-Password FOCUS and BLUR
    const rPassSection = document.getElementById('rpass-section');
    const rPassInput = rPassSection.querySelector('input');
    rPassInput.onfocus = function() {
        errorFocus(rPassSection);
    }
    rPassInput.onblur = function() {
        errorBlur(rPassSection, rPassInput);
        if (rPassSection.querySelector('.error-label') == null) {
            errorRepeat(passSection, rPassSection);
        }
    }
}