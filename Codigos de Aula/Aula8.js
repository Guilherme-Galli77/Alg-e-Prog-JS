var ladoA
var ladoB

//procedimento sem parâmetros
function boasvindas(){
  alert('Olá alunos!')
}

//procedimento com parâmetros
function saudacaoAluno(nome){
  alert('Olá ' + nome)
}

//calcula a área do retângulo
function calculaArea(ladoA,ladoB){
  let resultado = ladoA * ladoB
  return resultado
}

//verificar se o mesmo é um quadrado
function verificaQuadrado(ladoA, ladoB){
  if(ladoA == ladoB){
    return true;
  }
  else{
    return false;
  }
}

//retorna o valor do perímetro
function calculaPerimetro(ladoA,ladoB){
  return 2*(ladoA+ladoB)
}


boasvindas()
saudacaoAluno('Robson')
saudacaoAluno('Larissa')

lA = parseInt(prompt('Lado A: '))
lB = parseInt(prompt('Lado B: '))

alert('Area: ' + calculaArea(lA,lB))
alert('Quadrado?: ' + verificaQuadrado(lA,lB))
alert('Perímetro: ' + calculaPerimetro(lA,lB))