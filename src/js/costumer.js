import { userTypeSelection } from "./index.js";
import {
  showAlert,
  showConfirm,
  showPrompt,
  showInvalidOption,
  tryAgain,
} from "./utils/messaging.js";
import { users } from "./manager.js";

//IF costumer: total balance | withdraw a value | deposit an amount
if (userTypeSelection == 2) {
  const userName = showPrompt("Digite o nome de usuário.");
  if (userName == users.name) {
    showAlert("foi");
  }
}
