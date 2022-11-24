function ani() {
    document.getElementById('sendButton').classList.add('animated');
    setTimeout(function () {
        document.getElementById('sendButton').classList.remove('animated')
    },300);
    dis();
}

function dis() {
    document.getElementById('textArea').setAttribute('disabled','');
    document.getElementById('textArea').style.opacity = '0.3';
    document.getElementById('textArea').style.cursor = 'not-allowed';
    document.getElementById('popup').style.opacity = '1';
    document.getElementById('popup').style.animationName = 'popUp';
    setTimeout(function () {
        document.getElementById('textArea').removeAttribute('disabled');
        document.getElementById('textArea').style.opacity = '1';
        document.getElementById('textArea').style.removeProperty('cursor');
        document.getElementById('popup').style.animationName = 'popOut';
        document.getElementById('popup').style.opacity = '0';
        document.getElementById('textArea').focus();
        $('#textArea').val('');
    },3000);
}