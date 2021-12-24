const buttonContainer = document.querySelector(".button-container");
const button_archer = document.querySelector(".archer")
const button_lana = document.querySelector(".lana")
const button_krieger = document.querySelector(".krieger")

const archerFacts = [
"Archer Fact1",
"Archer Fact2",
"Archer Fact3",
"Archer Fact4",
"Archer Fact5"];

const lanaFacts = [
"Lana Fact1",
"Lana Fact2",
"Lana Fact3",
"Lana Fact4",
"Lana Fact5"];

const kriegerfacts = [
"Krieger Fact1",
"Krieger Fact2",
"Krieger Fact3",
"Krieger Fact4",
"Krieger Fact5"];

const modalContainer = document.createElement('div')
modalContainer.classList.add('modalContainer')
document.body.appendChild(modalContainer)

const modal = document.createElement('div')
modal.classList.add('modal')
modalContainer.appendChild(modal)

const closeBtn = document.createElement('button')
closeBtn.classList.add('close')
modal.appendChild(closeBtn)
closeBtn.innerText = 'X'

const facts = document.createElement('div')
facts.classList.add('facts')
modal.appendChild(facts);

button_archer.addEventListener('click', () => {
    modalContainer.classList.add('show')
});

button_lana.addEventListener('click', () => {
    modalContainer.classList.add('show')
});

button_krieger.addEventListener('click', () => {
    modalContainer.classList.add('show')
});

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})
