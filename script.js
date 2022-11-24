function buttonCLick() {
    document.getElementById('sendButton').classList.add('animated');
    setTimeout(function () {
        document.getElementById('sendButton').classList.remove('animated')
    },300);
    showPopup();
}

function showPopup() {
    document.getElementById('textArea').setAttribute('disabled','');
    document.getElementById('textArea').style.opacity = '0.3';
    document.getElementById('textArea').style.cursor = 'not-allowed';
    document.getElementById('popup').style.opacity = '1';
    document.getElementById('popup').style.animationName = 'popUp';
    setTimeout(function () {
        document.getElementById('textArea').focus();
        document.getElementById('textArea').removeAttribute('disabled');
        document.getElementById('textArea').style.opacity = '1';
        document.getElementById('textArea').style.removeProperty('cursor');
        document.getElementById('popup').style.opacity = '0';
        document.getElementById('popup').style.animationName = 'popOut';
        $('#textArea').val('');
    },3000);
}