import { exampleObj } from "./example-object";

// ==========VIEW MODAL WINDOW LOGIN OR REGISTER=============START=========

const loginAppQuerySelectorsObj = {
  openLoginAppBtn: document.querySelector('[login-app-open]'),
  closeLoginAppBtn: document.querySelector('[login-app-close]'),
  modalLoginApp: document.querySelector('[login-app-section]'),
  chooseActionSection: document.querySelector('[choose-action]'),
  modalRegisterApp: document.querySelector('[register-section]'),
  openRegisterAppBtn: document.querySelector('[register-app-open]'),
  closeRegisterAppBtn: document.querySelector('[register-app-close]'),
};

function toggleModalLogin() {
  loginAppQuerySelectorsObj.chooseActionSection.classList.toggle('is-hidden');
  loginAppQuerySelectorsObj.modalLoginApp.classList.toggle('is-hidden');
}

function toggleModalRegister() {
  loginAppQuerySelectorsObj.chooseActionSection.classList.toggle('is-hidden');
  loginAppQuerySelectorsObj.modalRegisterApp.classList.toggle('is-hidden');
}

loginAppQuerySelectorsObj.openLoginAppBtn.addEventListener('click', toggleModalLogin);
loginAppQuerySelectorsObj.closeLoginAppBtn.addEventListener('click', toggleModalLogin);
loginAppQuerySelectorsObj.openRegisterAppBtn.addEventListener('click', toggleModalRegister);
loginAppQuerySelectorsObj.closeRegisterAppBtn.addEventListener('click', toggleModalRegister);

// ==========VIEW MODAL WINDOW LOGIN OR REGISTER=============END=========

// // ==========VIEW MODAL WINDOW REGISTER-DRIVER=============START=========

// const registerDriverQuerySelectorsObj = {
//   formDriverSection: document.querySelector('[register-driver]'),
//   closeDriverFormBtn: document.querySelector('[register-driver-close]'),
//   openDriverFormBtn: document.querySelector('[register-driver-open]'),

//   backdropOnSection: document.querySelector('.backdrop-temp'),
// };
// registerDriverQuerySelectorsObj.openDriverFormBtn.addEventListener('click', toggleDriverForm);
// registerDriverQuerySelectorsObj.closeDriverFormBtn.addEventListener('click', toggleDriverForm);
// function toggleDriverForm() {
//   registerDriverQuerySelectorsObj.formDriverSection.classList.toggle('is-hidden');
//   registerDriverQuerySelectorsObj.backdropOnSection.classList.toggle('backdrop');
// };

// // ==========VIEW MODAL WINDOW REGISTER-DRIVER=============END===========

console.log(exampleObj);