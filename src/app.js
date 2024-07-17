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
// Definimos la variable como global para que no de problemas luego
var abuelaCheck = false;
var deberesCheck = false;
var brokeCheck = false;

let checkboxAbuela = document.getElementById("abuela");
let checkboxDeberes = document.getElementById("deberes");
let checkboxBroken = document.getElementById("broke");

checkboxAbuela.addEventListener("change", function() {
  abuelaCheck = checkboxAbuela.checked;
});
checkboxDeberes.addEventListener("change", function() {
  deberesCheck = checkboxDeberes.checked;
});
checkboxBroken.addEventListener("change", function() {
  brokeCheck = checkboxBroken.checked;
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

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  let whoIndex = [getRandomIndex(who)];
  let actionIndex = getRandomIndex(action);
  let whatIndex = getRandomIndex(what);
  let whenIndex = getRandomIndex(when);

  // aqui se usan las variables globales
  if (abuelaCheck) {
    whoIndex = 1;
  }
  if (deberesCheck) {
    whatIndex = 0;
  }
  if (brokeCheck) {
    actionIndex = 1;
  }

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
