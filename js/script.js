//selecionar elementos

let nome = document.querySelector('#nome');
let historia = document.querySelector('#historia');
let foto = document.querySelector('#foto');
let casas = document.getElementsByName('casas');
let vivo = document.getElementById('vivo');

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

    for (let i = 0; i < casas.length; i++){
        if (casas[i].checked){

            casa = casas[i].value;

            if (casa == "sonserina"){
                casa = "Sonserina";
            } else if (casa == "grifinoria"){
                casa = "Grifinória";
            } else if (casa == "corvinal"){
                casa = "Corvinal";
            } else if (casa == "lufa-lufa"){
                casa = "Lufa-Lufa";
            } else {
                casa = "Não se aplica";
            }

            break;
        }
    }
    
    let p2 = document.createElement('p');
    p2.innerText = "Casa: " + casa;
    localCards.appendChild(p2);

    vivo.checked ? vivoTxt = "Viveu até o fim da história :)" : vivoTxt = "Não viveu para o fim da história :(";
    let p3 = document.createElement('p');
    p3.innerText = vivoTxt;
    localCards.appendChild(p3);

    localCards.style.border = "thick solid wheat";
    localCards.style.width = "50%";
    localCards.style.margin = "0 auto";
};

