function validateForm() {

    var count = 0;

    if (!validateMessage()) {
        count++;
    }

    if (!validateFirstName()) {
        count++;
    }

    if (!validateSubject()) {
        count++;
    }

    if (count == 0) {
        alert('Thank you ' + $('#InputName').val() + '. Your message is successfully sent.')
        return true;
    }
    return false;
}

function validateMessage() {
    var msgText = $('#message-text').val();
    if (msgText.length < 10) {
        alert('Message must be longer than 10 letters');
        return false;
    }
    return true;
}

function validateFirstName() {

    if ($('#InputName').val().length < 3 || !((/^([^0-9]*)$/).test($('#InputName').val()))) {
        alert('Name cannot be less than 3 letters and it must not contain alphabets');
        return false;
    }
    return true;
}

function validateSubject() {
    if ($('#InputSubject').val().trim() == "") {
        alert('Subject Line cannot be empty');
        return false;
    }
    return true;
}