document.addEventListener('DOMContentLoaded', () => {
    const pads = document.querySelectorAll('.drum-pad');
    const sounds = {
        leftCrash: new Audio('sounds/leftCrash.mp3'),
        rightCrash: new Audio('sounds/rightCrash.mp3'),
        kickbass: new Audio('sounds/kickbass.mp3'),
        snare: new Audio('sounds/snare.mp3'),
        tom1: new Audio('sounds/tom1.mp3'),
        tom2: new Audio('sounds/tom2.mp3'),
        tom3: new Audio('sounds/tom3.mp3'),
    };

    function playSound(sound) {
        const audio = sounds[sound];
        if (audio) {
            audio.currentTime = 0; // Reset the sound to start
            audio.play();
        }
    }

    pads.forEach(pad => {
        pad.addEventListener('click', () => {
            const sound = pad.getAttribute('data-sound');
            playSound(sound);
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
        if (pad) {
            const sound = pad.getAttribute('data-sound');
            playSound(sound);
        }
    });
});
