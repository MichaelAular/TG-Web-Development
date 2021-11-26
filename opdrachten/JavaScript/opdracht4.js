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