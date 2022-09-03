
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');  // seletor ALL cria uma lista que foi armazenada dentro da constante listaDeTeclas.

for (let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];   //criado uma constante para receber qual tecla está no loop
    const instrumento = tecla.classList[1];  //criado uma constante para receber qual o elemento 1 da lista de classe. que no caso é a segunda parte do nome do id de audio.
    const idAudio = `#som_${instrumento}`;                         //criado constante para receber um novo id de audio unindo uma parte da string com a segunda parte do nome do id de audio que estará agora na constante instrumento. usar a crase para poder acessar a função template.

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') // as duas barras || tem a mesma função do OR(ou).
        tecla.classList.add('ativa');
    } //função ADD adiciona a classe "ativa" que vai deixar a tecla na cor vermelha. o JS passa adicionar a classe ao botão falta remover a classe para apagar o vermelho:
   
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    } //função REMOVE remove a classe ativa quer deixa vermelho a tecla. adicioando na variavel função quando a tecla sobe.

}
