import {
  showAlert,
  showConfirm,
  showPrompt,
  showInvalidOption,
  tryAgain,
} from "./utils/messaging.js";

export let userTypeSelection = showPrompt(
  `Welcome to our Bank\nType '1' if you're a Manager\nType '2' if you're a Costumer.`
);
if (userTypeSelection != 1 && userTypeSelection != 2) {
  while (userTypeSelection != 1 && userTypeSelection != 2) {
    showInvalidOption();
    userTypeSelection = showPrompt(
      `Welcome to our Bank\nType '1' if you're a Manager\nType '2' if you're a costumer.`
    );
  }
}
