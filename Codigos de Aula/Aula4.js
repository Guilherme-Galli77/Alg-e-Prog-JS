/*var nome = prompt('Insira seu nome: ')

//formato sem else
if(nome == 'Roberto'){
  alert('Vá para a Sala 1')
}
if(nome == 'Marisa'){
  alert('Vá para o Centro de Convenções')
}
if(nome == 'Regina'){
  alert('Vá para a Sala 2')
}
if((nome != 'Roberto') && (nome != 'Marisa') && (nome != 'Regina')){
  alert('Nome não encontrado')
}

//formato com else
var nome = prompt('Insira seu nome: ')

if(nome == 'Roberto'){
  alert('Vá para a Sala 1')
}
else if(nome == 'Marisa'){
  alert('Vá para o Centro de Convenções')
}
else if(nome == 'Regina'){
  alert('Vá para a Sala 2')
}
else{
  alert('Nome não encontrado')
} */

var idade = parseInt(prompt('Insira a sua idade: '))

if(idade > 0){
  //alert('Idade válida')

  if(idade <= 130){
    if(idade >= 60){
      alert('Você é idos@')
    }
    else if(idade >= 18){
      alert('Você é adult@')
    }
    else if(idade >= 12){
      alert('Você é adolescente')
    }
    else{
      alert('Você é uma criança')
    }
  }
  else{
    alert('Limite de idade ultrapassado')
  }

  
}
else{
  alert('Idade inválida')
}