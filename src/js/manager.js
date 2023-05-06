import { userTypeSelection } from "./index.js";
import {
  showAlert,
  showConfirm,
  showPrompt,
  showInvalidOption,
  tryAgain,
} from "./utils/messaging.js";
import { uuidv4 } from "./utils/uuid.js";
import { DEFAULT_USER } from "./constants.js";

//IF manager, give the options: list of all users | create, edit, delete an user
let managerMainOptionSelection;
let managerInput = 1;
let users = [];
if (userTypeSelection == 2) {
  managerInput = 0;
}
while (managerInput == 1) {
  if (userTypeSelection == 1) {
    managerMainOptionSelection = showPrompt(
      `Type '1' to list all users\nType '2' to creat a user\nType '3' to edit a user\nType '4' to delete a user.`
    );
  }
  switch (managerMainOptionSelection) {
    case "1":
      listAllUsers();
      break;
    case "2":
      createUser();
      break;
    case "3":
      editUser();
      break;
    case "4":
      break;
    default:
      break;
  }
  managerInput = showPrompt(
    "Quer realizar outra operação? Digite '1' para SIM e outro valor para NÃO."
  );
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
      optionToBeEditable == "name"
        ? (element.name = showPrompt(`Digite o nome`))
        : false;
      optionToBeEditable == "birthday"
        ? (element.birthday = showPrompt(`Digite a data de nascimento`))
        : false;
      optionToBeEditable == "street"
        ? (element.address[0].street = showPrompt(`Digite a rua`))
        : false;
      optionToBeEditable == "number"
        ? (element.address[0].number = showPrompt(`Digite o numero`))
        : false;
      optionToBeEditable == "zipcode"
        ? (element.address[0].zipcode = showPrompt(`Digite o CEP`))
        : false;
      optionToBeEditable == "country"
        ? (element.address[0].country = showPrompt(`Digite o país`))
        : false;
      optionToBeEditable == "registernumber"
        ? (element.registerNumber = showPrompt(`Digite o CPF ou CNPJ`))
        : false;
      optionToBeEditable == "balance"
        ? (element.balance[0].currentBalance = showPrompt(`Digite o saldo`))
        : false;
    }
  });
}
export function listAllUsers() {
  console.log(users);
}

export { users };
