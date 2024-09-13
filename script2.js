let a,b;
let saida = document.getElementById("saida");
a=prompt("Digite o nome");
b=prompt("Digite o sobrenome");
saida.innerHTML=`${a} ${b}`;//novidade
b+=" ";
b+=a;
saida.innerHTML+=`<br>${b}`;//novidade