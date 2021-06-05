var maior
var menor
var parar = false

var numero = parseInt(prompt('Numero: '))


maior = numero
menor = numero

for(var i=0;i<9;i++){
  numero = parseInt(prompt('Numero: '))

  if(numero > maior){
    maior = numero
  }
  else if(numero < menor){
    menor = numero
  }
}

alert("Maior: " + maior)
alert("Menor: " + menor)

/*while(!parar){
  numero = parseInt(prompt('Numero: '))
  
  if(numero > maior){
    maior = numero
  }
  else if(numero < menor){
    menor = numero
  }

  var opcao = prompt("Deseja continuar?: ")
  if(opcao == 'n'){
    parar = true
  }

}*/

