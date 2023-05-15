const backBtn = document.getElementById("backBtn");
const myForm = document.getElementById("formLogin");

backBtn.addEventListener("click", function () {
  myForm.action = "/index.html";
  myForm.submit();
});
