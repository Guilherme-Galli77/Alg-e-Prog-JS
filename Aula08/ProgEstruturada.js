function Menu(){
     var opc = prompt ("Escolha sua opção: \n1. Inserir Notas \n2. Calcular Média \n3. Sair \n\n"); 
     return opc;
}
function Inserir_nota (){
     for (i=0; i<3; i++){
        do{
             nota[i] = parseInt(prompt ("Digite a " + (i+1) + ".a nota :"));
       }while (nota[i] < 0 || nota[i] > 10);
}
       return 0;
}
function Calcular_media (ver){
      if (ver == 0){
         var media = (nota[0]+nota[1]+nota[2])/3;
}else{
       alert ("Você ainda não inseriu nenhuma nota");
       media = "erro de cálculo";
}
return media;
}
var nota=[];
var op, ver = -1;
do{
     op = Menu();
if (op == 1){
     ver = Inserir_nota();
}else{
     if (op == 2){
         alert ("Sua média é: " + Calcular_media(ver));
   }else{
        alert ("Obrigado por utilizar nosso sistema. Volte sempre!");
     }
   }
   prompt ("");
  console.clear();
}while (op != 3);

