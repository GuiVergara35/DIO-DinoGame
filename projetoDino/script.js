const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function spaceBar(event) { //function que define se a barra de espaço foi apertada
    if (event.keyCode === 32) {
        if(!isJumping) {        
        pulapirata();
        }
    }
}

function pulapirata() {
    
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            //Descer
            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;

                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },45);

        } else {
            //Subir
            position += 20;
            dino.style.bottom = position + 'px';

    }
}, 45);
}
function criarCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class ="game-over">E Morreu ;_;7 F</h1>';
            //Perdeu!!
        } else  {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';

        }


    },30)

    setTimeout(criarCactus, randomTime);
}
criarCactus();
document.addEventListener('keyup', spaceBar);