const cidade = prompt("Digite a sua Cidade");
const dia = parseInt(prompt("Digite o dia"));
const mes = prompt("Digite o mes");
const ano = parseInt(prompt("Digite o ano"));
let saida=document.getElementById("saida");
saida.innerHTML = `${cidade}, ${dia} de ${mes} de ${ano}.`;