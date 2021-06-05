var peso = parseFloat(prompt ('Peso: '))

var altura = parseFloat(prompt('Altura: '))



var imc = peso/(altura*altura)



if(imc <= 18.5){

alert('Abaixo do peso')

}

else if(imc <= 24.9){

alert('Peso Ideal')

}

else if(imc <= 29.9){

alert('Sobrepeso')

}

else if(imc <= 34.9){

alert('Obesidade Grau I')

}

else{

alert('Obesidade Grau III')

}
