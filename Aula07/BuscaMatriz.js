var nome = prompt ("Informe qual aluno deseja pesquisar");
var disciplina = prompt ("Informe qual a disciplina deseja pesquisar a nota");
var controle = 0;
for (coluna=0; coluna < 11; coluna++){
    if (nome == media[0][coluna]){
         for (linha=1; linha < media.length; linha++){
              if (disciplina == media[linha][0]){
alert ("A média do " + nome + " na disciplina " + disciplina + " é " 
+ media[linha][coluna]);      
          controle = 1;
  }}}}
if (controle == 0){
alert ("O aluno " + nome + " ou a disciplina " + disciplina + " não constam na base de dados");
}
