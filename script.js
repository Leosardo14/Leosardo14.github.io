
// LOGIN
function login() {
  let user = document.getElementById("username")?.value;

  if(user === ""){
    alert("Inserisci username");
    return;
  }

  localStorage.setItem("user", user);
  showUser();
}

function logout(){
  localStorage.removeItem("user");
  showUser();
}

function showUser(){
  let user = localStorage.getItem("user");
  let display = document.getElementById("userDisplay");

  if(display){
    if(user){
      display.innerText = "Ciao " + user + " 👋";
    } else {
      display.innerText = "Non sei loggato";
    }
  }
}

showUser();


// CALCOLATRICE
function somma(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 + n2;
}

function sottrai(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 - n2;
}

function moltiplica(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 * n2;
}

function dividi(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 / n2;
}// LOGIN
function login() {
  let user = document.getElementById("username")?.value;

  if(user === ""){
    alert("Inserisci username");
    return;
  }

  localStorage.setItem("user", user);
  showUser();
}

function logout(){
  localStorage.removeItem("user");
  showUser();
}

function showUser(){
  let user = localStorage.getItem("user");
  let display = document.getElementById("userDisplay");

  if(display){
    if(user){
      display.innerText = "Ciao " + user + " 👋";
    } else {
      display.innerText = "Non sei loggato";
    }
  }
}

showUser();


// CALCOLATRICE
function somma(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 + n2;
}

function sottrai(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 - n2;
}

function moltiplica(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 * n2;
}

function dividi(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("risultato").innerText = n1 / n2;
}
