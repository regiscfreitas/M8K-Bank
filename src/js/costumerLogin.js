import {
  showAlert,
  showConfirm,
  showPrompt,
  showInvalidOption,
  tryAgain,
} from "./utils/messaging.js";

let userName,
  indexToBeSelected,
  userSelected,
  costumerOperation,
  costumerInput,
  withdrawAmount,
  depositAmount;

export let loggedUserHtml = document.getElementById("costumerLogged");

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const loginForm = document.getElementById("formLogin");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    userName = document.getElementById("login").value;
    userSelected = users.find((element) => element.name == userName);
    if (userName === userSelected?.name) {
      showAlert(`Usuário encontrado, prosseguindo para o menu do usuário.`);
      loggedUserHtml = userSelected;
      loginForm.action = "/costumer.html";
      loginForm.submit();
    } else {
      showAlert(
        "Usuário não encontrado no banco de dados. Digite o nome de usuário novamente."
      );
    }
  });
});

export function costumerMenu() {
  if (userTypeSelection == 2 || userTypeSelection2 == 1) {
    userName = showPrompt("Digite o nome de usuário.");
    users.length == 0
      ? showAlert("Nenhum usuário encontrado no banco de dados.")
      : showAlert("Usuario encontrado no banco de dados.");
    indexToBeSelected = users.findIndex((index) => index.name == userName);

    userSelected = users.filter((element, index) => index == indexToBeSelected);
  }

  users.length == 0 ? (costumerInput = 0) : (costumerInput = 1);
  let userBalance = userSelected[0].balance[0].currentBalance;
  while (costumerInput == 1) {
    costumerOperation = showPrompt(
      "Digite '1' para ver seu saldo.\nDigite '2' para sacar.\nDigite '3' para depositar."
    );
    switch (costumerOperation) {
      case "1":
        userBalance == 0
          ? showAlert("Você não possui saldo.")
          : showAlert(`Seu saldo é ${userBalance}`);
        break;
      case "2":
        withdrawAmount = showPrompt("Quanto voce deseja sacar?");
        while (Number(withdrawAmount) > userBalance) {
          console.log("userBalance:", userBalance);
          console.log("withdrawAmount:", withdrawAmount);
          showAlert(
            `Voce não pode sacar ${withdrawAmount} reais.\nVocê não possui saldo suficiente.\nSeu saldo atual é ${userBalance}`
          );
          withdrawAmount = showPrompt("Quanto voce deseja sacar?");
        }
        userSelected[0].balance[0].transactionsHistory[0].date = new Date();
        userSelected[0].balance[0].transactionsHistory[0].amount =
          withdrawAmount;
        userSelected[0].balance[0].transactionsHistory[0].type = "Withdraw";
        userBalance -= withdrawAmount;
        break;
      case "3":
        depositAmount = Number(showPrompt("Quanto voce deseja depositar?"));
        userSelected[0].balance[0].transactionsHistory[0].date = new Date();
        userSelected[0].balance[0].transactionsHistory[0].amount =
          depositAmount;
        userSelected[0].balance[0].transactionsHistory[0].type = "Deposit";
        userBalance += depositAmount;

        break;
      default:
        break;
    }
    costumerInput = showPrompt(
      "Quer realizar outra operação? Digite '1' para SIM e outro valor para NÃO."
    );
  }
}

//costumerMenu();
