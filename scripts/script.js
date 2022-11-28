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
        $('textArea').val('');
    },3000);
}

function switchOn() {
    if (document.getElementById('themeSwitch').style.marginLeft === '50px') {
        document.getElementById('themeSwitch').style.marginLeft = '0'
        darkMode(false)
    } else {
        document.getElementById('themeSwitch').style.marginLeft = '50px'
        darkMode(true)
    }
}

function darkMode(boolean) {
    if (boolean) {
        document.documentElement.style.setProperty('--black', '#dddddd');
        document.documentElement.style.setProperty('--grey', '#bcbdbd');
        document.documentElement.style.setProperty('--hay', '#8ca0cd');
        document.documentElement.style.setProperty('--cyan', '#dd5c60');
        document.documentElement.style.setProperty('--white', '#0c101f');
        document.getElementById("themeSwitch").innerHTML = "Light";
    }
    else {
        document.documentElement.style.setProperty('--black', '#222222');
        document.documentElement.style.setProperty('--grey', '#434242');
        document.documentElement.style.setProperty('--hay', '#735F32');
        document.documentElement.style.setProperty('--cyan', '#22A39F');
        document.documentElement.style.setProperty('--white', '#F3EFE0');
        document.getElementById("themeSwitch").innerHTML = "Dark";
    }

}