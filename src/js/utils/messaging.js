function showPrompt(message) {
  return prompt(message);
}

function showAlert(message) {
  return alert(message);
}

function showConfirm(message) {
  return confirm(message);
}

function showInvalidOption() {
  return alert("Invalid option");
}

function tryAgain(callback) {
  return callback;
}

export { showPrompt, showAlert, showConfirm, showInvalidOption, tryAgain };
