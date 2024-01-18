let btn = document.querySelector("#hideAndShow");
let password = document.querySelector("#password");

btn.addEventListener("click", () => {
  if (password.type == "password") {
    btn.className = "fa-solid fa-eye-slash";
    password.type = "text";
  } else {
    btn.className = "fa-solid fa-eye";
    password.type = "password";
  }
});
