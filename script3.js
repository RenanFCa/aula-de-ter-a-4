let a;
let saida = document.getElementById("saida");
a=parseInt(prompt("Digite um número"));//100
saida.innerHTML="a ="+ (++a);
saida.innerHTML+="<br>a final ="+ a;