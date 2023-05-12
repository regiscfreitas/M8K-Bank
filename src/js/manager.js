import { userTypeSelection, userSelection } from "./index.js";
import {
  showAlert,
  showConfirm,
  showPrompt,
  showInvalidOption,
  tryAgain,
} from "./utils/messaging.js";
import { uuidv4 } from "./utils/uuid.js";
import { DEFAULT_USER } from "./constants.js";

let managerMainOptionSelection;
let managerInput = 1;
let userTypeSelection2;
let users = [];
if (userTypeSelection == 2) {
  managerInput = 0;
}

// while (managerInput == 1) {
//   if (userTypeSelection == 1 && users.length != 0) {
//     managerMainOptionSelection = showPrompt(
//       `Type '1' create a user\nType '2' to list all users\nType '3' to edit a user\nType '4' to delete a user\n`
//     );
//   } else if (userTypeSelection == 1 && users.length == 0) {
//     managerMainOptionSelection = showPrompt("Type '1' to create a user");
//   }
//   switch (managerMainOptionSelection) {
//     case "1":
//       createUser();
//       break;
//     case "2":
//       listAllUsers();
//       break;
//     case "3":
//       editUser();
//       break;
//     case "4":
//       deleteUser();
//       break;
//     default:
//       showInvalidOption();
//       break;
//   }
//   managerInput = showPrompt(
//     "Quer realizar outra operação? Digite '1' para SIM e outro valor para NÃO."
//   );
// }
if (userTypeSelection == 1) {
  userTypeSelection2 = showPrompt(
    "Deseja fazer login como usuario?\nDigite '1' para sim e outro valor para NÃO."
  );
}

export function listAllUsers() {
  users.length == 0
    ? showAlert("Nenhum usuário encontrado no banco de dados.")
    : console.table(users);
}

export function createUser() {
  let user = JSON.parse(JSON.stringify(DEFAULT_USER));
  user.id = uuidv4();
  user.name = showPrompt("Digite o nome do cliente.");
  user.birthday = showPrompt("Digite a data de nascimento do cliente.");
  user.address[0].street = showPrompt("Digite a rua.");
  user.address[0].number = showPrompt(
    "Digite o numero da casa ou apartamento."
  );
  user.address[0].zipcode = showPrompt("Digite o CEP do cliente.");
  user.address[0].country = showPrompt("Digite o país.");
  user.registerNumber = showPrompt("Digite o CPF ou CNPJ.");
  user.balance[0].currentBalance = showPrompt("Digite o saldo do cliente.");
  users.push(user);
}

export function editUser() {
  let userToBeEditable = showPrompt("Qual usuário voce quer editar?");
  while (
    userToBeEditable !=
    users.map((element) => {
      return element.name;
    })
  ) {
    showInvalidOption();
    userToBeEditable = showPrompt("Qual usuário voce quer editar?");
  }
  users.forEach((element) => {
    if (userToBeEditable == element.name) {
      let optionToBeEditable = showPrompt(
        "Digite a opção que deseja mudar.\n'name'\n'birthday'\n'street'\n'number'\n'zipcode'\ncountry'\n'registernumber'\n'balance'"
      );
      switch (optionToBeEditable) {
        case "name":
          element.name = showPrompt(`Digite o nome`);
          break;
        case "birthday":
          element.birthday = showPrompt(`Digite a data de nascimento`);
          break;
        case "street":
          element.address[0].street = showPrompt(`Digite a rua`);
          break;
        case "number":
          element.address[0].number = showPrompt(`Digite o numero`);
          break;
        case "zipcode":
          element.address[0].zipcode = showPrompt(`Digite o CEP`);
          break;
        case "country":
          element.address[0].country = showPrompt(`Digite o país`);
          break;
        case "registernumber":
          element.registerNumber = showPrompt(`Digite o CPF ou CNPJ`);
          break;
        case "balance":
          element.balance[0].currentBalance = showPrompt(`Digite o saldo`);
          break;
        default:
          break;
      }
    }
  });
}

export function deleteUser() {
  let userToBeDeleted = showPrompt("Qual o usuario deseja deletar?");
  let indexToBeDeleted = users.findIndex(
    (index) => index.name == userToBeDeleted
  );

  users = users.filter((element, index) => index !== indexToBeDeleted);
}

export { users, userTypeSelection2 };
