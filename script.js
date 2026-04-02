function calcola(op) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  let risultato;

  if (op === "+") risultato = n1 + n2;
  if (op === "-") risultato = n1 - n2;
  if (op === "*") risultato = n1 * n2;
  if (op === "/") risultato = n1 / n2;

  document.getElementById("risultato").innerText = "Risultato: " + risultato;
}
