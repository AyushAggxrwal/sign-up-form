const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const invalidPassword = document.querySelector('.invalid-password');

document.querySelector('button').addEventListener("click", (event) => {
  if (confirmPassword.value !== password.value) {
    event.preventDefault();
  }
})

confirmPassword.addEventListener('keyup', validatePassword)
password.addEventListener('keyup', validatePassword)

function validatePassword() {
  if (confirmPassword.value !== password.value) {
    invalidPassword.style.display = 'initial';
    confirmPassword.classList.add('invalid');
    password.classList.add('invalid');
  } else {
    invalidPassword.style.display = 'none';
    confirmPassword.classList.remove('invalid');
    password.classList.remove('invalid');
  }
}