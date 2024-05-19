//função para trocar texto do title
function trocarTitulo(){
    var titulos = ["Portifolio", "Willian Souza"];
    var posicaoIndice = 0;
    setInterval(function(){
        document.title = titulos[posicaoIndice];
        posicaoIndice = (posicaoIndice + 1) % titulos.length;
    },1500);
}

window.onload = trocarTitulo;



document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();//obriga a preencher todo o formulario antes de enviar

 
    document.getElementById("formulario").style.display = "none";//oculta o formulario
    

    document.getElementById("resposta").classList.remove("hidden");//tira o display:hidden do texto
});