/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#ejcusa").innerHTML = ejcusegenerador();
  });
  document.querySelector("#ejcusa").innerHTML = ejcusegenerador();
  console.log("Hello Rigo ejcuseme on the console too!");
};
var abuelaCheck = false; // Definimos la variable global

// Seleccionamos el checkbox
var checkbox = document.getElementById("abuela");

// Agregamos el event listener
checkbox.addEventListener("change", function() {
  abuelaCheck = checkbox.checked; // Cambiamos el valor de la variable global según el estado del checkbox
  console.log("abuelaCheck es ahora:", abuelaCheck); // Para verificar el cambio
});

let ejcusegenerador = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  if (abuelaCheck) {
    whoIndex = 1;
  }

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
