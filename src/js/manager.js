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
if (userTypeSelection == 1) {
  managerMainOptionSelection = showPrompt(
    `Type '1' to list all users\nType '2' to creat a user\nType '3' to edit a user\nType '4' to delete a user.`
  );
}
let users = [];
switch (managerMainOptionSelection) {
  case "1":
    break;
  case "2":
    createUser();
    console.log(users);
    break;
  case "3":
    break;
  case "4":
    break;
  default:
    break;
}

export function createUser() {
  let user = Object.assign({}, DEFAULT_USER);
  user.id = uuidv4();
  user.name = showPrompt("Digite o nome do usuário.");
  user.birthday = showPrompt("Digite sua data de nascimento.");
  user.registerNumber = showPrompt("Digite o CPF ou CNPJ.");
  user.balance = showPrompt("Digite o saldo do usuário.");
  users.push(user);
}
//export { users };
