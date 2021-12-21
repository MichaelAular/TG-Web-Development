/// /// create questions /// ///
const questionArray = ["49 - 32", "70 - 14", "80 - 15", "10 - 20", "56 + 11", "21 - 16"];

/// /// create answers /// ///
const answersArray = [
"13", "17", "-17", "16", "697",
"18", "79", "56", "32", "34",
"74", "65", "93", "40", "975",
"-350", "-15", "-10", "-34", "-30",
"102", "37", "44", "67", "50",
"170", "18", "5", "2", "26"]
let givenAnswers = []
let correctAnswers = []

/// /// create start/// ///
const page_start = document.querySelector('.page_Start');
const container = document.querySelector('.container');
let pageCounter = 0
const start_btn  = document.createElement('button');
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
    let onetry = 0
    const given = eval(givenAnswers[pageCounter])

    for (i=1 ; i < 6 ; i++) {
        const option = document.createElement('div')
        option.classList.add('option', [i])
        answercontainer.appendChild(option);
        if (givenAnswers.length <= pageCounter){
            option.onclick = () => {clickInputAnswer()}
        }

        let trueAnswer = eval(questionArray[pageCounter])
        const numberCircle = document.createElement('div')
        numberCircle.classList.add('number'+[i], 'number')
        numberCircle.innerText = i
        option.appendChild(numberCircle)
        const answerText = document.createElement('div')
        answerText.classList.add('answerText'+[i], 'answerText')
        answerText.innerText = answersArray[(pageCounter*5-1)+i]
        option.appendChild(answerText)

        if (givenAnswers.length > pageCounter) {
            let answers = eval(answerText.innerText)
            if (answers === given) {
               if (answers === trueAnswer) {
                option.classList.add('correct')
               } else  if (answers !== trueAnswer) {
                option.classList.add('wrong')
            }
        }
    }

        function clickInputAnswer() {
            if (onetry === 0) {
                onetry++
                let clickedAnswer = eval(answerText.innerText)
                givenAnswers.push(clickedAnswer)
                if (clickedAnswer === trueAnswer) {
                    option.classList.add('correct')
                    correctAnswers.push('x')
                 }
                else {
                    option.classList.add('wrong')
                }
            } else {
                return}
        }
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
        clear = document.querySelector('.container')

    if (givenAnswers.length > pageCounter){
        pageCounter++
        clear.innerHTML = ""
        constructTitle()
        constructAnswerblocks()
        constructQuestion()
        constructButtons()
    }
    if (pageCounter > questionArray.length-1) {
        constructResult()
    }
}

function clickPrev() {
    clear = document.querySelector('.container')
    clear.innerHTML = ""
    pageCounter--
    if (pageCounter < 0 ) {
        pageCounter = 0
    }
    constructTitle()
    constructAnswerblocks()
    constructQuestion()
    constructButtons()
}

function constructResult() {
    clear = document.querySelector('.container')
    clear.innerHTML = ""
    container.classList.add('page_Start');
    container.classList.remove('page_Question')
    const resultText = document.createElement('div')
    resultText.classList.add('resultText')
    container.appendChild(resultText)
    resultText.innerText = 'Gefeliciteerd! Je hebt ' + correctAnswers.length + ' van de ' + questionArray.length + ' vragen goed!'
    const restart_btn  = document.createElement('button');
    restart_btn.classList.add('btn', 'restart_btn')
    restart_btn.innerText = 'replay!'
    container.appendChild(restart_btn)
    restart_btn.onclick = () => {clickRestart()}
}

 function clickRestart() {
     givenAnswers.length = 0
     correctAnswers.length = 0
     pageCounter = 0
    clear = document.querySelector('.container')
    clear.innerHTML = "";
    container.classList.remove('page_Start');
    container.classList.add('page_Question');
    constructButtons()
    constructAnswerblocks()
    constructQuestion()
    constructTitle()
 }