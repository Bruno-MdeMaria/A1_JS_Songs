
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');  // seletor ALL cria uma lista que foi armazenada dentro da constante listaDeTeclas.

for (let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];   //criado uma constante para receber qual tecla está no loop
    const instrumento = tecla.classList[1];  //criado uma constante para receber qual o elemento 1 da lista de classe. que no caso é a segunda parte do nome do id de audio.
    const idAudio = `#som_${instrumento}`;                         //criado constante para receber um novo id de audio unindo uma parte da string com a segunda parte do nome do id de audio que estaráagora na constante instrumento. usar a crase para poder acessar a função template.

    tecla.onclick = function(){tocaSom(idAudio)};
    tecla.onkeydown = function() {tecla.classList.add('ativa')};
}
