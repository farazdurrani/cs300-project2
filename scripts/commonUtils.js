function validateForm(){

    var msgText = $('#message-text').val();

    if(msgText.length < 10){
        alert('Message must be longer than 10 letters');
        return false;
    }

    alert('Thank you ' + $('#InputName').val() + '. Your message is successfully sent.')

    return true;
}