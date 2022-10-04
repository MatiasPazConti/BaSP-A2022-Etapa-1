const EMPTYSPACE = ' ';
const NUMBERS = '1234567890';
const LETTERS = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

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
        return false;
    }
    else {
        switch (section.getAttribute('id')) {
            case 'fname-section':
            case 'lname-section':
                var nameValidation = true;
                for (i = 0; nameValidation && (i < input.value.length); i++){
                    nameValidation = (LETTERS.indexOf(input.value.charAt(i), 0) != -1) || (input.value.charAt(i) == EMPTYSPACE);
                }
                var invalidSpace = input.value.indexOf(EMPTYSPACE, 0) != -1;
                if ((input.value.length <= 3) || !nameValidation || invalidSpace) {
                    errorLabel.innerHTML = 'Invalid name';
                    section.appendChild(errorLabel);
                    return false;
                }
                else {
                    delete errorLabel;
                    return true;
                }
            case 'doc-section':
                var docValidation = true;
                for (i = 0; docValidation && (i < input.value.length); i++) {
                    docValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;
                }
                if ((input.value.length <= 7) || !docValidation) {
                    errorLabel.innerHTML = 'Invalid document';
                    section.appendChild(errorLabel);
                    return false;
                }
                else
                {
                    delete errorLabel;
                    return true;
                }
            case 'birth-section':
                delete errorLabel;
                return true;
            case 'phone-section':
                var phoneValidation = true;
                for (i = 0; phoneValidation && (i < input.value.length); i++) {
                    phoneValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;
                }
                if ((input.value.length != 10) || !phoneValidation) {
                    errorLabel.innerHTML = 'Invalid number';
                    section.appendChild(errorLabel);
                    return false;
                }
                else
                {
                    delete errorLabel;
                    return true;
                }
            case 'address-section':
                var firstSpace = input.value.indexOf(EMPTYSPACE, 0);
                if (firstSpace == -1) {
                    errorLabel.innerHTML = 'Invalid address';
                    section.appendChild(errorLabel);
                    return false;
                }
                else
                {
                    var invalidSpace = (firstSpace == 0) || (firstSpace == input.value.length - 1);
                    var addressValidation = true;
                    for (i = 0; addressValidation && (i < firstSpace); i++) {
                        addressValidation = LETTERS.indexOf(input.value.charAt(i), 0) != -1;    
                    }
                    for (i = firstSpace + 1; addressValidation && (i < input.value.length); i++) {
                        addressValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;    
                    }
                    if ((input.value.length < 5) || !addressValidation || invalidSpace) {
                        errorLabel.innerHTML = 'Invalid address';
                        section.appendChild(errorLabel);
                        return false;
                    }
                    else
                    {
                        delete errorLabel;
                        return true;
                    }
                }
            case 'town-section':
                delete errorLabel;
                return true;
            case 'postal-section':
                var postalValidation = true;
                for (i = 0; postalValidation && (i < input.value.length); i++) {
                    docValidation = NUMBERS.indexOf(input.value.charAt(i), 0) != -1;
                }
                if ((input.value.length < 4) || (input.value.length > 5) || !docValidation) {
                    errorLabel.innerHTML = 'Invalid code';
                    section.appendChild(errorLabel);
                    return false;
                }
                else
                {
                    delete errorLabel;
                    return true;
                }
            case 'email-section':
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
            case 'pass-section':
            case 'rpass-section':
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
            default:
                delete errorLabel;
                return false;
        }
    }
}
function errorRepeat(section, rSection) {
    var errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    errorLabel.setAttribute('id', 'repeat-label');
    if (rSection.querySelector('input').value != section.querySelector('input').value) {
        errorLabel.innerHTML = 'Password does not match';
        rSection.appendChild(errorLabel);
        return false;
    }
    else
    {
        delete errorLabel
        return true;
    }
}
function changeDateStructure(date) {
    var dateArray = date.split('-');
    return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
}
function adjustInput(section, input) {
    if (section.querySelector('.error-label') != null) {
        input.classList.add('error-input');
    }
    else if (section.querySelector('.error-input') != null) {
        input.classList.remove('error-input');
    }
}
window.onload = function () {
    var validations = [false, false, false, false, false, false, false, false, false, false, false];

    const fNameSection = document.getElementById('fname-section');
    const fNameInput = fNameSection.querySelector('input');
    fNameInput.onfocus = function() {
        errorFocus(fNameSection);
        adjustInput(fNameSection, fNameInput);
    }
    fNameInput.onblur = function() {
        validations[0] = errorBlur(fNameSection, fNameInput);
        adjustInput(fNameSection, fNameInput);
    }

    const lNameSection = document.getElementById('lname-section');
    const lNameInput = lNameSection.querySelector('input');
    lNameInput.onfocus = function() {
        errorFocus(lNameSection);
        adjustInput(lNameSection, lNameInput);
    }
    lNameInput.onblur = function() {
        validations[1] = errorBlur(lNameSection, lNameInput);
        adjustInput(lNameSection, lNameInput);
    }

    const docSection = document.getElementById('doc-section');
    const docInput = docSection.querySelector('input');
    docInput.onfocus = function() {
        errorFocus(docSection);
        adjustInput(docSection, docInput);
    }
    docInput.onblur = function() {
        validations[2] = errorBlur(docSection, docInput);
        adjustInput(docSection, docInput);
    }

    const birthSection = document.getElementById('birth-section');
    const birthInput = birthSection.querySelector('input');
    birthInput.onfocus = function() {
        errorFocus(birthSection);
        adjustInput(birthSection, birthInput);
    }
    birthInput.onblur = function() {
        validations[3] = errorBlur(birthSection, birthInput);
        adjustInput(birthSection, birthInput);
    }

    const phoneSection = document.getElementById('phone-section');
    const phoneInput = phoneSection.querySelector('input');
    phoneInput.onfocus = function() {
        errorFocus(phoneSection);
        adjustInput(phoneSection, phoneInput);
    }
    phoneInput.onblur = function() {
        validations[4] = errorBlur(phoneSection, phoneInput);
        adjustInput(phoneSection, phoneInput);
    }

    const addressSection = document.getElementById('address-section');
    const addressInput = addressSection.querySelector('input');
    addressInput.onfocus = function() {
        errorFocus(addressSection);
        adjustInput(addressSection, addressInput);
    }
    addressInput.onblur = function() {
        validations[5] = errorBlur(addressSection, addressInput);
        adjustInput(addressSection, addressInput);
    }

    const townSection = document.getElementById('town-section');
    const townInput = townSection.querySelector('input');
    townInput.onfocus = function() {
        errorFocus(townSection);
        adjustInput(townSection, townInput);
    }
    townInput.onblur = function() {
        validations[6] = errorBlur(townSection, townInput);
        adjustInput(townSection, townInput);
    }

    const postalSection = document.getElementById('postal-section');
    const postalInput = postalSection.querySelector('input');
    postalInput.onfocus = function() {
        errorFocus(postalSection);
        adjustInput(postalSection, postalInput);
    }
    postalInput.onblur = function() {
        validations[7] = errorBlur(postalSection, postalInput);
        adjustInput(postalSection, postalInput);
    }

    const emailSection = document.getElementById('email-section');
    const emailInput = emailSection.querySelector('input');
    emailInput.onfocus = function() {
        errorFocus(emailSection);
        adjustInput(emailSection, emailInput);
    }
    emailInput.onblur = function() {
        validations[8] = errorBlur(emailSection, emailInput);
        adjustInput(emailSection, emailInput);
    }

    const passSection = document.getElementById('pass-section');
    const passInput = passSection.querySelector('input');
    passInput.onfocus = function() {
        errorFocus(passSection);
        adjustInput(passSection, passInput);
        adjustInput(rPassSection, rPassInput);
    }
    passInput.onblur = function() {
        validations[9] = errorBlur(passSection, passInput);
        if (rPassSection.querySelector('#repeat-label') != null) {
            errorFocus(rPassSection);
        }
        validations[10] = errorRepeat(passSection, rPassSection);
        adjustInput(passSection, passInput);
        adjustInput(rPassSection, rPassInput);
    }

    const rPassSection = document.getElementById('rpass-section');
    const rPassInput = rPassSection.querySelector('input');
    rPassInput.onfocus = function() {
        errorFocus(rPassSection);
        adjustInput(passSection, passInput);
        adjustInput(rPassSection, rPassInput);
    }
    rPassInput.onblur = function() {
        validations[10] = errorBlur(rPassSection, rPassInput);
        if (rPassSection.querySelector('.error-label') == null) {
            validations[9] = errorRepeat(passSection, rPassSection);
        }
        adjustInput(passSection, passInput);
        adjustInput(rPassSection, rPassInput);
    }

    var userPassword = localStorage.getItem('password');
    if (userPassword) {
        fNameInput.setAttribute('value', localStorage.getItem('firstName'));
        lNameInput.setAttribute('value', localStorage.getItem('lastName'));
        docInput.setAttribute('value', localStorage.getItem('document'));
        birthInput.setAttribute('value', localStorage.getItem('birthDate'));
        phoneInput.setAttribute('value', localStorage.getItem('phoneNumber'));
        addressInput.setAttribute('value', localStorage.getItem('address'));
        townInput.setAttribute('value', localStorage.getItem('town'));
        postalInput.setAttribute('value', localStorage.getItem('postalCode'));
        emailInput.setAttribute('value', localStorage.getItem('email'));
        passInput.setAttribute('value', userPassword);
        rPassInput.setAttribute('value', userPassword);
        validations = [true, true, true, true, true, true, true, true, true, true, true];
    }

    const signButton = document.querySelector('.signup-button');
    signButton.onclick = function(f) {
        f.preventDefault();
        var finalValidation = true;
        var errorAlert = 'Error! The following fields are invalid:';
        var firstError = true;
        for (i = 0; i < 11; i++) {
            if (finalValidation) {
                finalValidation = validations[i];
            }
            if (!validations[i]) {
                if (firstError) {
                    errorAlert = errorAlert + '\n';
                    firstError = false;
                }
                else {
                    errorAlert = errorAlert + ', ';
                }
                switch (i) {
                    case 0:
                        errorAlert = errorAlert + 'First Name';
                        break;
                    case 1:
                        errorAlert = errorAlert + 'Last Name';
                        break;
                    case 2:
                        errorAlert = errorAlert + 'Document';
                        break;
                    case 3:
                        errorAlert = errorAlert + 'Birth Date';
                        break;
                    case 4:
                        errorAlert = errorAlert + 'Phone Number';
                        break;
                    case 5:
                        errorAlert = errorAlert + 'Address';
                        break;
                    case 6:
                        errorAlert = errorAlert + 'Town';
                        break;
                    case 7:
                        errorAlert = errorAlert + 'Postal Code';
                        break;
                    case 8:
                        errorAlert = errorAlert + 'Email';
                        break;
                    case 9:
                    case 10:
                        errorAlert = errorAlert + 'Password';
                        break;
                }
            }
        }
        if (finalValidation) {
            var urlWithQP = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + fNameInput.value
            + '&lastName=' + lNameInput.value
            + '&dni=' + docInput.value
            + '&dob=' + changeDateStructure(birthInput.value)
            + '&phone=' + phoneInput.value
            + '&address=' + addressInput.value
            + '&city=' + townInput.value
            + '&zip=' + postalInput.value
            + '&email=' + emailInput.value
            + '&password=' + passInput.value;

            fetch(urlWithQP)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Data:', data);
                if (data.success) {
                    localStorage.setItem('firstName', fNameInput.value);
                    localStorage.setItem('lastName', lNameInput.value);
                    localStorage.setItem('document', docInput.value);
                    localStorage.setItem('birthDate', birthInput.value);
                    localStorage.setItem('phoneNumber', phoneInput.value);
                    localStorage.setItem('address', addressInput.value);
                    localStorage.setItem('town', townInput.value);
                    localStorage.setItem('postalCode', postalInput.value);
                    localStorage.setItem('email', emailInput.value);
                    localStorage.setItem('password', passInput.value);
                    alert(data.msg);
                }
                else {
                    for (i = 0; i < data.errors.length; i++) {
                        alert(data.errors[i].msg);
                    }
                }
            })
            .catch(function(error) {
                console.log('Error:', error);
            })
        }
        else {
            alert(errorAlert);
        }
    }
}