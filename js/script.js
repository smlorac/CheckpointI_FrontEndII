//selecionar elementos

let nome = document.querySelector('#nome');
let historia = document.querySelector('#historia');
let foto = document.querySelector('#foto');

//selecionar botão
 
let botao = document.querySelector('#botao');

//criar event listener

botao.addEventListener('click', criarCard);

//criar a função de criar cards

function criarCard(evento){

    evento.preventDefault();
    
    let localCards = document.querySelector('#cards');

    let h1 = document.createElement('h1');
    h1.innerText = nome.value;
    localCards.appendChild(h1);

    let p = document.createElement('p');
    p.innerText = historia.value;
    localCards.appendChild(p);

    let img = document.createElement('img');
    img.setAttribute('src', foto.value);
    localCards.appendChild(img); 
    img.style.width = '50%';

};

