let userSelected = JSON.parse(localStorage.getItem("userSelectedData"));

let loggedUserHtml = document.getElementById("costumerLogged");
loggedUserHtml.innerHTML = userSelected.name;

let balance = document.getElementById("balance");
balance.value = Number(userSelected.balance[0].currentBalance.toFixed(2));

let withdraw = document.getElementById("withdraw");
let deposit = document.getElementById("deposit");
let myForm = document.getElementById("costumerForm");
let operation = document.getElementById("operation");

document.addEventListener("DOMContentLoaded", function () {});

operation.addEventListener("click", (event) => {
  event.preventDefault();
  if (withdraw.value !== undefined) {
    console.log(balance.value);
    console.log(withdraw.value);
    balance.value -= withdraw.value;
  }
});

myForm.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    //nome da funcao(event);
  }
});
