function mudarTexto(){
    //por algum motivo temos que primerio alterar o texto para depois podermos alterar o estilo
    var paragrafo = document.getElementById("text")
    paragrafo.innerText = "mudou o texto mesmo";
    paragrafo = document.getElementById("text").style.color = "blue";
}

function assustar(){
    alert('buuuuuu')
}