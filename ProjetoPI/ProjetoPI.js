//Codigo do PI//

alert("=================================");
alert("Bem Vindo ao Comparador de Preços");
alert("=================================");

//Declaracao das variaveis
var valorAlcool;
var valorGasolina;
var razaoBase;
var divAlcoolGasolina

//Atribuicao e calculo de valor das variaveis
do{
razaoBase = 0.7;
valorAlcool = prompt("Qual o preço do alcool: ");
valorGasolina = prompt("Qual o preço da gasolina: ");
divAlcoolGasolina = (valorAlcool/valorGasolina)


if (divAlcoolGasolina > razaoBase){
   alert("\n Vale a pena a gasolina!")}
else if (divAlcoolGasolina < razaoBase){
   alert("\n Vale a pena o alcool!")}
else if (divAlcoolGasolina == razaoBase){
   alert("\n Tanto faz um ou outro!")}
else{
   alert("\n ERRO NO SISTEMA!")
}

alert("\n Deseja inserir outros valores?");
var resp = prompt("\n Digite s para Sim e n para não")

}while(resp == 's');

alert("Obrigado por usar o comparador de preços!!!!")
