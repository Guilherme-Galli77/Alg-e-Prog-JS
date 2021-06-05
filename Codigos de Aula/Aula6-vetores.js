var vetorA = []
var vetorB = []
var vetorC = []

var somaA = 0
var somaB = 0
var somaC = 0

var media

//alimentar as 10 posições do vetor A
for(var i=0;i<=9;i++){
  vetorA[i] = parseInt(prompt('VetorA - Insira a posição ' + i + ': '))
}

//alimentar as 10 posições do vetor B
for(var i=0;i<=9;i++){
  vetorB[i] = parseInt(prompt('Vetor B - Insira a posição ' + i + ': '))
}

//somando elementos dos vetores A, B e C (somar elemento a elemento)
for(var i=0;i<=9;i++){
  
  //soma dos elementos de A
  somaA = somaA + vetorA[i]

  //soma dos elementos de B
  //somaB = somaB + vetorB[i]
  somaB += vetorB[i]

  //vetor com soma de elemento a elemento
  vetorC[i] = vetorA[i]+vetorB[i]

}

//somar as 10 posições do vetor C
for(var i=0;i<=9;i++){
  somaC = somaC + vetorC[i]
}

media = somaC/vetorC.length

alert('Soma dos elementos de A: ' + somaA)
alert('Soma dos elementos de A: ' + somaB)
alert('Vetor C (soma elemento a elemento): ' + vetorC)
alert('Media do Vetor C: ' + media)



