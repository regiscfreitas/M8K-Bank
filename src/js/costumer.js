let userSelected = JSON.parse(localStorage.getItem("userSelectedData"));
console.log(userSelected);

let loggedUserHtml = document.getElementById("costumerLogged");
loggedUserHtml.innerHTML = userSelected.name;

let balance = document.getElementById("balance");
balance.value = `R$ ${userSelected.balance[0].currentBalance.toFixed(2)}`;

let withdraw = document.getElementById("withdraw");
let deposit = document.getElementById("deposit");

//criar o form com o action para a mesma pagina, recebendo os valores atualizados
