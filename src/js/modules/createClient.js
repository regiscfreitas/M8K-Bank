import { uuidv4 } from "../utils/uuid.js";

let users = [];
let user;
const name = document.getElementById("nome");
const birthday = document.getElementById("birthday");
const street = document.getElementById("street");
const number = document.getElementById("number");
const cep = document.getElementById("cep");
const country = document.getElementById("country");
const registerNumber = document.getElementById("registerNumber");
const balance = document.getElementById("balanceDeposit");
const enviarCadastro = document.getElementById("cadastro");

function createUser() {
  let user = {
    id: uuidv4(),
    name: name.value,
    birthday: birthday.value,
    address: [
      {
        street: street.value,
        number: number.value,
        zipcode: cep.value,
        country: country.value,
      },
    ],
    registerNumber: registerNumber.value,
    balance: [
      {
        currentBalance: Number(balance.value),
        transactionsHistory: [
          {
            date: "",
            amount: "",
            type: "",
          },
        ],
      },
    ],
  };
  return user;
}

document.addEventListener("DOMContentLoaded", function () {
  enviarCadastro.addEventListener("click", function () {
    user = createUser();
    users.push(user);
    localStorage.setItem("usersData", JSON.stringify(users));
  });
});

// window.addEventListener("DOMContentLoaded", function () {
//   if (localStorage.getItem("usersData")) {
//     users = JSON.parse(localStorage.getItem("usersData"));
//     console.log(users);
//   }
// });

//localStorage.clear();

export { users };
