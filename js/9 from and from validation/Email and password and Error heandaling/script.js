let email = document.querySelector(".email");
let password = document.querySelector(".password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".errorMass").innerHTML = "";
    document.querySelector(".SucsessMass").innerHTML = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const emailcheck = emailRegex.test(email.value);
  const passwordcheck = passwordRegex.test(password.value);

  console.log(passwordcheck)

  if (!emailcheck & !passwordcheck) {
    document.querySelector(".errorMass").innerHTML =
      "Email and Password incorect";
  } else if (!emailcheck) {
    document.querySelector(".errorMass").innerHTML = "Email incorect";
  } else if (!passwordcheck) {
    document.querySelector(".errorMass").innerHTML = "Password incorect";
  } else{
    document.querySelector(".SucsessMass").innerHTML = "Sucsessfull";
  }
});
