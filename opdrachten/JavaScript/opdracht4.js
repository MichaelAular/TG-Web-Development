// 4.1 A
function functieButton() {
  console.log("Hello World!");
}

// 4.1 B
let varInput = document.getElementById("input1");

// 4.1 C
let varInput2 = document.getElementById("input41c");

function log41c(varInput2) {
  console.log(varInput2);
  // document.getElementById('input41c').value='';
}

// 4.1 D
function log2() {
  let inputNumber = document.getElementById("input2").value;
  let calculate = (inputNumber) => inputNumber * 2;
  let result = calculate(inputNumber);
  console.log("answer " + result);
}

// 4.2 A
function trigger42aI() {
  let antwoord42aI = document.getElementsByClassName("vraag42aI");
  antwoord42aI[0].style.color = "cyan";
}

function trigger42aII() {
  let antwoord42aII = document.getElementsByTagName("span");
  antwoord42aII[1].style.color = "cyan";
}

function trigger42aIII() {
  document.querySelector(".vraag42aIII").style.color = "cyan";
}

function trigger42aIV() {
  document.querySelectorAll(".vraag42aIV")[1].style.color = "cyan";
}

function trigger42aV() {
  document.getElementById("vraag42aV").innerHTML =
    "<span style='color: cyan;'>element.innerHTML</span>";
}

function trigger42aVI() {
  document.getElementById("vraag42aVI").innerText = "Hello World!";
}

// 4.2 B
function log42b(varInput2) {
  console.log(varInput2.value);
}

// 4.3 A
function randomNumber() {
  let antwoord43a = document.getElementById("input43a").innerHTML = Math.random();
  console.log(antwoord43a);
}

// 4.3 B
const nummer1 = document.getElementById("input43bI")
function randomNumberI() {
  let x = 7;
  let antwoord43bI = Math.floor(Math.random() * x);
  console.log(antwoord43bI)
  nummer1.innerHTML = antwoord43bI
}

const nummer2 = document.getElementById("input43bII")
function randomNumberII() {
  let x = 20;
  let antwoord43bII = Math.floor(Math.random() * x);
  console.log(antwoord43bII)
  nummer2.innerHTML = antwoord43bII
}

const nummer3 = document.getElementById("input43bIII")
function randomNumberIII() {
  let x = 483;
  let antwoord43bIII = Math.floor(Math.random() * x);
  console.log(antwoord43bIII)
  nummer3.innerHTML = antwoord43bIII
}

const nummer4 = document.getElementById("input43bIV")
function randomNumberIV() {
  let x = 725;
  let antwoord43bIV = Math.floor(Math.random() * x);
  console.log(antwoord43bIV)
  nummer4.innerHTML = antwoord43bIV
}

const nummer5 = document.getElementById("input43bV")
function randomNumberV() {
  let x = 2000;
  let antwoord43bV = Math.floor(Math.random() * x);
  console.log(antwoord43bV)
  nummer5.innerHTML = antwoord43bV
}

// 4.3 C
function logmathmin() {
  document.getElementById("mathmin").innerText = Math.min(nummer1.innerHTML, nummer2.innerHTML, nummer3.innerHTML, nummer4.innerHTML ,nummer5.innerHTML);
}

function logmathmax() {
document.getElementById("mathmax").innerText = Math.max(nummer1.innerHTML, nummer2.innerHTML, nummer3.innerHTML, nummer4.innerHTML ,nummer5.innerHTML);
}