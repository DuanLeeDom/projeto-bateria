// representa o corpo do site em tudo basicamente
document.body.addEventListener('keyup', (event) => {
    playSound( event.code.toLowerCase() );
});

document.querySelector('.composer button').addEventListener('click', () => {
    // value para pegar o que foi digitado no campo
    let song = document.querySelector('#input').value;
    
    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        // toca um som especifico
        audioElement.currentTime = 0;
        audioElement.play();
    }   

    if (keyElement) {
        // adicionar uma class especifica para acionar a cor
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }

}