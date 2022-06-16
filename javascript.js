let maiorIdade = true;
if (maiorIdade) { 
    console.log("É maior de idade");
 }

 let mes = "dezembro"
 if ((mes === "janeiro") || (mes === "dezembro")) { 
    console.log("É capricorniano");
 } else { 
    console.log("Outra coisa");
 }

 let nome = true; 
 if(nome.charAt(0) === "R"){
   console.log(nome, "seu nome começa com a letra R");
}


 let sobreNome = "pires"
 if ((sobreNome.length >= 6) || (nome.charAt(0) === "E")) {
    console.log("Seu sobrenome:${sobreNome} tem +6 letras ou começa com a letra E");
 } else { 
    console.log("não possui");
 }