const myForm = document.getElementById("managerForm");
const backBtn = document.getElementById("managerBtn");

backBtn.addEventListener("click", function () {
  myForm.action = "/manager.html";
  myForm.submit();
});
