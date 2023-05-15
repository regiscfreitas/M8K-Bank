const form = document.getElementById("optionForm");
const radios = form.elements["tipo"];

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", function () {
    if (radios[i].value === "costumer") {
      form.action = "/costumerLogin.html";
    } else if (radios[i].value === "manager") {
      form.action = "/manager.html";
    }
  });
}
