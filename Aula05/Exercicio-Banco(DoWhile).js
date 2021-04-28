var senha, repete;
do {
  senha = prompt ("Insira sua senha numérica de 6 dígitos");
} while (senha.length != 6);
repete = prompt ("Redigite sua senha para validação. Ela deve ser a mesma.");
while (repete != senha) {
repete = prompt ("A senha não é a mesma. Insira novamente a senha para validação.");
}  
alert ("Você conseguiu");        