//Codigo do PI//

alert("Codigo da PI");

//declaracao das variaveis
var valorAlcool;
var valorGasolina;
var razaoBase;
var divAlcoolGasolina
var sistema = 'S'

//atribuicao e calculo de valor das variaveis
while(sistema == 'S'){
razaoBase = 0.7;
valorAlcool = prompt("Qual o preço do alcool: ");
valorGasolina = prompt("Qual o preço da gasolina: ");
divAlcoolGasolina = (valorAlcool/valorGasolina)


if (divAlcoolGasolina > razaoBase){
   alert("Vale a pena a gasolina!")}
else if (divAlcoolGasolina < razaoBase){
   alert("Vale a pena o alcool!")}
else if (divAlcoolGasolina == razaoBase){
   alert("Tanto faz um ou outro!")}
else{
   alert("ERRO NO SISTEMA!")
}

alert("Deseja inserir outros valores?");
sistema = prompt("digite S para Sim e N para não")

}

alert("Obrigado por usar o comparador de preços!!!!")