function functieButton() {
  console.log("Hello World!");
}

let varInput = document.getElementById("input1");

function log1(varInput) {
  console.log(varInput.value);
}

function log2() {
  let inputNumber = document.getElementById("input2").value;
  let calculate = (inputNumber) => inputNumber * 2;
  let result = calculate(inputNumber);
  console.log("answer " + result);
}

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
  document.getElementById("vraag42aV").innerHTML = color = "cyan";
}

function trigger42aVI() {
    document.getElementById("vraag42aVI").innerText = "Hello World!";
  }