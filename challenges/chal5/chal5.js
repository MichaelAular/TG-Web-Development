const buttonContainer = document.querySelector(".button-container");
const button_archer = document.querySelector(".archer")
const button_lana = document.querySelector(".lana")
const button_krieger = document.querySelector(".krieger")

const archerFacts = [
"Archers codename is Duchess, after his mother's dog.",
"Archer and the others were hired to save the life of a brilliant scientist by shrinking down and destroying a lethal blood clot in his brain",
"Archer got married to Katya Kasanova, a former KGB spymaster who later died in a atemp to kill Archers nemesis Barry the Cyborg.",
"Archer Fact4",
"Archer Fact5"];

const lanaFacts = [
"Lana Fact1",
"Lana Fact2",
"Lana Fact3",
"Lana Fact4",
"Lana Fact5"];

const kriegerFacts = [
"Krieger build fort Kickass",
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
modal.appendChild(facts)

button_archer.addEventListener('click', () => {
    const facts = document.querySelector('.facts')
    modalContainer.classList.add('show')
    const randomfact = Math.floor(Math.random() * (5 - 0))
    facts.innerText = archerFacts[randomfact]
});

button_lana.addEventListener('click', () => {
    const facts = document.querySelector('.facts')
    modalContainer.classList.add('show')
    const randomfact = Math.floor(Math.random() * (5 - 0))
    facts.innerText = lanaFacts[randomfact]
});

button_krieger.addEventListener('click', () => {
    const facts = document.querySelector('.facts')
    modalContainer.classList.add('show')
    const randomfact = Math.floor(Math.random() * (5 - 0))
    facts.innerText = kriegerFacts[randomfact]
});

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show')
    facts.innerText = ""
})
