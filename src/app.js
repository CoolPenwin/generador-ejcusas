/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#Excusa").innerHTML = generadorExcusas();
  });
  document.querySelector("#Excusa").innerHTML = generadorExcusas();
};
// Definimos la variable global
var abuelaCheck = false;
var deberesCheck = false;
var brokeCheck = false;

// Seleccionamos el checkbox
let checkboxAbuela = document.getElementById("abuela");
let checkboxDeberes = document.getElementById("deberes");
let checkboxBroken = document.getElementById("broke");

// Agregamos el event listener
checkboxAbuela.addEventListener("change", function() {
  abuelaCheck = checkboxAbuela.checked; // Cambiamos el valor de la variable global según el estado del checkbox
});
checkboxDeberes.addEventListener("change", function() {
  deberesCheck = checkboxDeberes.checked; // Cambiamos el valor de la variable global según el estado del checkbox
});
checkboxBroken.addEventListener("change", function() {
  brokeCheck = checkboxBroken.checked; // Cambiamos el valor de la variable global según el estado del checkbox
});

let generadorExcusas = () => {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My cat",
    "A stranger",
    "My neighbor",
    "A ghost",
    "My best friend",
    "A superhero"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "stole",
    "hid",
    "burned",
    "lost",
    "destroyed",
    "tore"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my book",
    "my keys",
    "my laptop",
    "my project",
    "my shoes",
    "my lunch"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "in the morning",
    "last night",
    "during the meeting",
    "while I was cooking",
    "when I was jogging",
    "while I was on a call"
  ];

  // excusa aleatoria recursiva
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  // Forzado a Seleccion

  if (abuelaCheck) {
    whoIndex = 1;
  }
  if (deberesCheck) {
    whatIndex = 0;
  }
  if (brokeCheck) {
    actionIndex = 1; // esta muy roto
  }

  //vuelta de la funcion - construccion de frase

  return (
    "Jo tiiiio Ejque " +
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
