let userSelected = JSON.parse(localStorage.getItem("userSelectedData"));
console.log(userSelected);

let loggedUserHtml = document.getElementById("costumerLogged");
loggedUserHtml.innerHTML = userSelected.name;

let balance = document.getElementById("balance");
balance.value = `R$ ${Number(
  userSelected.balance[0].currentBalance.toFixed(2)
)}`;

let withdraw = document.getElementById("withdraw");
let deposit = document.getElementById("deposit");
let myForm = document.getElementById("costumerForm");

//criar o form com o action para a mesma pagina, recebendo os valores atualizados

console.log(balance.value);
document.addEventListener("DOMContentLoaded", function () {
  if (withdraw.value) {
    Number(balance.value) -= Number(withdraw.value);
    alert(balance.value);
  }
});

myForm.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    //nome da funcao(event);
  }
});
