var idade, cont  = 1;
 idade = prompt ("Insira sua idade");
do {
   idade = prompt  ("Insira sua idade");
   cont++;  
} while (idade < 0 && cont < 3);
if (cont < 3) {
   alert ("Sua idade é" + idade);
}else{
alert ("Você excedeu o número de tentativas");
}    