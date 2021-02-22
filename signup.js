
const form = document.getElementById("form");
const Email = document.getElementById("Input-Email");
const password = document.getElementById("Input-password");
const error = document.getElementById("Error");
const error2 = document.getElementById("Error2");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkEmail(input)

  });

  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
     
    } else {
   
    }
  }