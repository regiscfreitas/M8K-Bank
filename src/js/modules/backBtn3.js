const myForm = document.getElementById("costumerForm");
const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", function () {
  myForm.action = "/costumerLogin.html";
  myForm.submit();
});
