export const form = document.getElementById("optionForm");
export const radios = form.elements["tipo"];

export function formOption() {
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function () {
      if (radios[i].value === "costumer") {
        form.action = "/costumer.html";
      } else if (radios[i].value === "manager") {
        form.action = "/manager.html";
      }
    });
  }
}
formOption();
