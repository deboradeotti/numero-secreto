var numeroSorteado = parseInt((Math.random())*10)

var tentativas = 2

function enviar() {
  var entrada = document.querySelector('#entrada')
  var numero = entrada.value

  if (numero == numeroSorteado){
    var resultado = document.querySelector(".resultado").innerHTML = "O número secreto você acertou.<br />Que a Força esteja com você."
    document.getElementById('entrada').disabled = true
    document.getElementById('envia').disabled = true
    document.querySelector(".final").innerHTML = "<button type='submit' class='refresh' onClick='refreshPage()''>Jogar outra vez</button>"
   } 
  
  else if (numero > numeroSorteado) {
     var resultado = document.querySelector(".resultado").innerHTML = "Menor o número secreto é.<br />Tentar novamente você deve."
     tentativas = tentativas - 1
   } 
  
  else if (numero < numeroSorteado) {
     var resultado = document.querySelector(".resultado").innerHTML = "Maior o número secreto é.<br />Tentar novamente você deve."
     tentativas = tentativas - 1
   }

  if (tentativas < 0) { 

    var resultado = document.querySelector(".resultado").innerHTML = "Mais nenhuma tentativa você tem.<br />" + numeroSorteado + " o número secreto era.<br />Muito a aprender você ainda tem."
    document.getElementById('entrada').disabled = true
    document.getElementById('envia').disabled = true
    document.querySelector(".final").innerHTML = "<button type='submit' class='refresh' onClick='refreshPage()''>Jogar outra vez</button>"
   }
  entrada.value = ""
 }

function refreshPage(){
    document.location.reload(true);
} 
