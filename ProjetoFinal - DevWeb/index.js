function detectButtonClicks() {
    const buttons = document.querySelectorAll('.drum');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const key = event.target.innerText.toUpperCase();
            fazerSom(key);
            botaoAnimacao(event.target);
        });
    });
}

function detectKeyPresses() {
    document.addEventListener('keydown', event => {
        const key = event.key.toUpperCase();
        const button = document.querySelector(`.${key.toLowerCase()}.drum`);
        if (button) {
            fazerSom(key);
            botaoAnimacao(button);
        }
    });
}

function fazerSom(key) {
    let soundFile;
    switch (key) {
        case 'A':
        case 'a':
            soundFile = 'a.mp3';
            break;
        case 'S':
        case 's':
            soundFile = 's.mp3';
            break;
        case 'D':
        case 'd':
            soundFile = 'd.mp3';
            break;
        case 'K':
        case 'k':
            soundFile = 'k.mp3';
            break;
        case 'F':
        case 'f':
            soundFile = 'f.mp3';
            break;
        case 'J':
        case 'j':
            soundFile = 'j.mp3';
            break;
        default:
            console.log('Tecla não mapeada:', key);
            return;
    }
    const audio = new Audio(`Acetss/sounds/${soundFile}`);
    audio.play();
}

function botaoAnimacao(button) {
    button.classList.add('pressed');
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);
}

// Inicializar as funções
detectButtonClicks();
detectKeyPresses();
