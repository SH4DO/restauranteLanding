let alto = document.querySelector("#portada");
var GALERIA_PLATOS = ['assets/galeriaPlatos1.jpg','assets/galeriaPlatos2.jpg','assets/galeriaPlatos3.jpg'];
var GALERIA_LOCAL = ['assets/galeriaAmbientes1.jpg','assets/galeriaAmbientes2.jpg','assets/galeriaAmbientes3.jpg'];
var cont = 0;

//---- cambiar el tamaño y el color del menu al hacer scroll--------//
window.addEventListener("scroll", function () {
    let header = document.querySelector(".menu-section");
    header.classList.toggle("effect", window.scrollY > (alto.clientHeight - header.clientHeight));
});

//----crear carrusel de galerias y platos-------//
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.galeria-platos');
    carrousel(contenedor,GALERIA_PLATOS);

    let contenedor2 = document.querySelector('.galeria-local');
    carrousel(contenedor2,GALERIA_LOCAL);
});


function abrirMenuModal (){
    //---------menu modal--------//
    const toggleButton = document.querySelector(".button-modal");
    const dropdownMenu = document.querySelector(".menu-navigation");

    dropdownMenu.classList.toggle("open");
}

function abrirCartaModal(){
    const buttonModal = document.querySelector(".carta-item");
    const cartaModal = document.querySelector(".carta-modal");

    cartaModal.classList.toggle("open");
}

function carrousel(contenedor , IMG_GALERIA){
    contenedor.addEventListener('click', e =>{

        let atras =  contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = IMG_GALERIA[cont - 1];
                cont -- ;
            } else{
                img.src = IMG_GALERIA[IMG_GALERIA.length-1];
                cont = IMG_GALERIA.length - 1;
            }
        }
        else if(tgt == adelante){
            if(cont < (IMG_GALERIA.length - 1)){
                img.src = IMG_GALERIA[cont + 1];
                cont ++ ;
            } else{
                img.src = IMG_GALERIA[0];
                cont = 0;
            }                    
        }
    });
    
}


const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    const textsToChange = document.querySelectorAll("[data-section]");
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML=texts[section][value];

    }
}


function cambiarLenguaje(){
    const elementito = document.querySelector(".dropdown-languaje").value;           
    changeLanguage(elementito);
}


