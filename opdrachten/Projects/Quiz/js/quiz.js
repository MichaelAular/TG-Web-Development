
/// /// create start/// ///
const page_start = document.querySelector('.page_Start');
const container = document.querySelector('.container');
const start_btn  = document.createElement('button');
let pageCounter = 0

/// /// create questions /// ///
const questionArray = ["49 - 32", "70 - 14", "80 - 15", "10 - 20", "56 + 11", "21 - 16"];

/// /// create answers /// ///
const answersArray = [
"13", "17", "-17", "16", "697",
"1", "2", "3", "4", "5",
"a", "b", "c", "d", "e"]

start_btn.classList.add('start_btn')
start_btn.innerText = 'START!'
page_start.appendChild(start_btn)
start_btn.onclick = () => {clickStart()}

/// /// /// functions /// /// ///
function clickStart() {
    container.classList.remove('page_Start');
    container.removeChild(start_btn);
    container.classList.add('page_Question');
    constructButtons()
    constructAnswerblocks()
    constructQuestion()
    constructTitle()
}

function constructButtons() {
    const prev_btn  = document.createElement('button');
    prev_btn.classList.add('prev_btn', 'btn');
    prev_btn.innerText = 'vorrige';
    container.appendChild(prev_btn);
    prev_btn.onclick = () => {clickPrev()}

    const next_btn  = document.createElement('button');
    next_btn.classList.add('next_btn', 'btn');
    next_btn.innerText = 'volgende';
    container.appendChild(next_btn);
    next_btn.onclick = () => {clickNext()}
}

function constructAnswerblocks() {
    const answercontainer = document.createElement('div')
    answercontainer.classList.add('answercontainer')
    container.appendChild(answercontainer)

    for (i=1 ; i < 6 ; i++) {
        const option = document.createElement('div')
        option.classList.add('option'+[i], 'option')
        answercontainer.appendChild(option);

        const numberCircle = document.createElement('div')
        numberCircle.classList.add('number'+[i], 'number')
        numberCircle.innerText = i
        option.appendChild(numberCircle)

        const answerText = document.createElement('div')
        answerText.classList.add('answerText'+[i], 'answerText')
        answerText.innerText = answersArray[(pageCounter*5-1)+i]
        option.appendChild(answerText)
    }
}

function constructQuestion() {
    const question = document.createElement('div')
    question.classList.add('question')
    question.innerText = 'What is ' + questionArray[pageCounter]
    container.appendChild(question)
}

function constructTitle() {
    const titleContainer = document.createElement('div')
    titleContainer.classList.add('titleContainer')
    container.appendChild(titleContainer)

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerText = 'Math Problem'
    titleContainer.appendChild(title)

    const pageIndex= document.createElement('div')
    pageIndex.classList.add('pageIndex')
    pageIndex.innerText = pageCounter+1 + " / " + questionArray.length
    titleContainer.appendChild(pageIndex)
}

function clickNext() {
    pageCounter++
    if (pageCounter > questionArray.length-1) {
        pageCounter = questionArray.length-1
    }
    constructTitle()
    constructAnswerblocks()
    constructQuestion()
    console.log(pageCounter)
}

function clickPrev() {
    pageCounter--
    if (pageCounter < 0 ) {
        pageCounter = 0
    }
    constructTitle()
    constructAnswerblocks()
    constructQuestion()

    console.log(pageCounter)
}