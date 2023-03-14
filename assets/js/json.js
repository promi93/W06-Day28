// VARIABILI
let formInput = document.getElementById("formText");
let userInput = document.getElementById("user");
let saveInput = document.getElementById("save");
let resetInput = document.getElementById("reset");
let listInput = document.getElementById("list");

//

const renderList = function () {
  listInput.innerHTML = "";
  let listUsers = [];
  let listUsersSaved = localStorage.getItem("listUsers");
  if (listUsersSaved) {
    listUsers = JSON.parse(listUsersSaved);
  }
  listUsers.forEach((p) => {
    let newLi = document.createElement("li");
    newLi.innerText = `${p.name}`;
    listInput.appendChild(newLi);
  });
};

const reset = function () {
  userInput.value = "";
  console.log("Text area has been resetted");
};

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  let existingUser = localStorage.getItem("listUsers")
    ? JSON.parse(localStorage.getItem("listUsers"))
    : []; // operatore ternario

  existingUser.push({
    name: userInput.value,
  });
  localStorage.setItem("listUsers", JSON.stringify(existingUser));
  userInput.value = "";
  renderList();
});

renderList();

resetInput.addEventListener("click", () => {
  localStorage.removeItem("listUsers");
  renderList();
});

//  contatore

// Recupera il valore attuale del contatore dalla sessionStorage o inizializza a 0
let counter = sessionStorage.getItem("counter") || 0;

// Recupera l'elemento HTML dove visualizzare il contatore
const counterDisplay = document.getElementById("counter-display");

// Funzione per aggiornare il valore del contatore ogni secondo
function updateCounter() {
  counter++;
  sessionStorage.setItem("counter", counter);
  counterDisplay.innerText = counter;
}

// Avvia il timer che chiama la funzione updateCounter ogni secondo
const timer = setInterval(updateCounter, 1000);

// Rimuovi il valore della sessionStorage quando la pagina viene ricaricata o chiusa
window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem("counter");
});

// Assicurati di fermare il timer quando la pagina viene chiusa o ricaricata
window.addEventListener("unload", () => {
  clearInterval(timer);
});
