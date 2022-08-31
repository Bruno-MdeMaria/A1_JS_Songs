
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');  // seletor ALL cria uma lista que foi armazenada dentro da constante listaDeTeclas.

let contador = 0

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classlist[1]

    tecla.onclick = function(){
        tocaSom()
            }
    contador += 1
    
}