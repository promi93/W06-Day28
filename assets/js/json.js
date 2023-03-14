// DICHIARAZIONI VARIABILI
let formInputReference = document.getElementById("register-form");
let nameInputReference = document.getElementById("inpu-name");
let surnameInputReference = document.getElementById("inpu-surname");
let birthdayInputReference = document.getElementById("inpu-born");
let emailInputReference = document.getElementById("inpu-mail");
let passwordInputReference = document.getElementById("inpu-pass");
let saveInputBtnReference = document.getElementById("save");
let discardInputReference = document.getElementById("reset");
let loadInputReference = document.getElementById("load");
let listInputReference = document.getElementById("user-list");

// RENDERE FUNCTION
const renderList = function () {
  listInputReference.innerHTML = "";

  let archived = [];
  let savedUsers = localStorage.getItem("archived");
  if (savedUsers) {
    archived = JSON.parse(savedUsers);
  }

  // SAVE BUTTON
  const save = function () {
    const currentText = nameInputReference.value;
    localStorage.setItem("textAreaValue", currentText);
  };

  // DISCARD BUTTON
  const reset = function () {
    nameInputReference.value = "";
    surnameInputReference.value = "";
    birthdayInputReference.value = "";
    emailInputReference.value = "";
    passwordInputReference.value = "";
  };

  // LOAD BUTTON
  const load = function () {
    const loadedText = localStorage.getItem("textAreaValue");
    if (loadedText) {
      nameInputReference.value = loadedText;
      surnameInputReference.value = loadedText;
      birthdayInputReference.value = loadedText;
      emailInputReference.value = loadedText;
    } else {
      console.log("Error");
    }
  };

  // CREATE LI
  archived.forEach((app) => {
    let newLi = document.createElement("li");
    newLi.innerText = `${app.nameInputReference} ${app.surnameInputReference} ${app.birthdayInputReference}
    ${app.emailInputReference}`;
    listInputReference.appendChild(newLi);
  });
};

// JSON STORAGE
formInputReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let listAllUsers = localStorage.getItem("archived")
    ? JSON.parse(localStorage.getItem("archived"))
    : [];
  listAllUsers.push({
    name: nameInputReference.value,
    surname: surnameInputReference.value,
    date: birthdayInputReference.value,
    mail: emailInputReference.value,
  });
  localStorage.setItem("archived", JSON.stringify(listAllUsers));
  renderList();
});

renderList();

discardInputReference.addEventListener("click", reset);
saveInputBtnReference.onclick = save;
loadInputReference.onclick = load;
