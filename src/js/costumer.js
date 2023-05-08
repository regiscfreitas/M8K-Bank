import { userTypeSelection } from "./index.js";
import {
  showAlert,
  showConfirm,
  showPrompt,
  showInvalidOption,
  tryAgain,
} from "./utils/messaging.js";
import { users, userTypeSelection2 } from "./manager.js";

//IF costumer: total balance | withdraw a value | deposit an amount
export function costumerMenu() {
  if (userTypeSelection == 2 || userTypeSelection2 == 1) {
    let userName = showPrompt("Digite o nome de usuário.");
    users.length == 0
      ? showAlert("Nenhum usuário encontrado no banco de dados.")
      : showAlert("Usuario encontrado no banco de dados.");
    if (userName == users.some((element) => element.name)) {
      console.log("foi");
    }
  }
}
costumerMenu();
