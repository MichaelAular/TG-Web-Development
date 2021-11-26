function functieButton() {
    console.log("Hello World!")
}

let varInput = document.getElementById("input1")

function log1(varInput) {
    console.log(varInput.value);
}

function log2() {
let inputNumber = document.getElementById("input2").value;
let calculate = inputNumber => inputNumber * 2;
let result = calculate(inputNumber);
console.log("answer " + result);
}

// let antwoord42aI = document.getElementsByClassName("vraag42aI");
// console.log(antwoord42aI);

// let  antwoord42aII = document.getElementsByTagName("i");
// console.log(antwoord42aII);


function trigger42aI() {
    let antwoord42aI = document.getElementsByClassName("vraag42aI");
    antwoord42aI[0].style.color = "cyan";
}

function trigger42aII() {
    let antwoord42aII = document.getElementsByTagName("span");
    antwoord42aII[0].style.color = "cyan";
}

function trigger42aIII() {
    document.querySelector(".vraag42aIII").style.color = "cyan";
}