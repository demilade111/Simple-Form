// Login In
const form = document.getElementById("form");
const Email = document.getElementById("Input-Email");
const password = document.getElementById("Input-password");
const error = document.getElementById("Error");
const error2 = document.getElementById("Error2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput();
  checkEmail(Email)
});
// cheeck input
function checkInput() {
  if (password.value == "") {
error2.textContent='PASSWORD CANNOT BE BLANK'
error2.style.color="red"
   
    

  
    setTimeout(() => {
      password.placeholder = "";
      password.value
    }, 3000);
  } else {
    error2.style.color = "green";
    error2.textContent = "VALID!!";
    
  }
}

// check Email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    error.textContent="VALID EMAIL"
    error.style.color="green"
  } else {
   error.textContent="A VALID EMAIL IS REQUIRED"
   error.style.color="red"
  }
}



