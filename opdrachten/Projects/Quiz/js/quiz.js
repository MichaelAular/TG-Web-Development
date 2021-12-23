/// /// create questions /// ///
const plusminArray = ["+", "-"]
const questionArrayRandom = []
for (i = 0 ; i < 10 ; i++) {
    const randomSpot = Math.floor(Math.random() * 2 - 0)
    const plusmin = plusminArray[randomSpot]
    const a = Math.floor(Math.random() * (300 - 1))
    const b = Math.floor(Math.random() * (a - 1))

    let question = a + ' ' + plusmin + ' ' + b
    questionArrayRandom.push(question)
}

/// /// create answers /// ///
let trueAnswers = []
let givenAnswers = []
let correctAnswers = []

for (iTrue = 0 ; iTrue < 10 ; iTrue++) {
    let trueAnswer =  eval(questionArrayRandom[iTrue])
    trueAnswers.push(trueAnswer)
}

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

    const answerTextArray = []
        for (i = 0 ; i < 4 ; i++) {
                const a = Math.floor(Math.random() * (600 - 0))
                answerTextArray.push(a)
        }
        let randomSpot = Math.floor(Math.random() * 5 - 0)
        answerTextArray.splice(randomSpot, 0, trueAnswers[pageCounter])

    for (i=1 ; i < 6 ; i++) {
        const option = document.createElement('div')
        option.classList.add('option', 'option' + [i])
        answercontainer.appendChild(option);
        if (givenAnswers.length <= pageCounter){
            option.onclick = () => {clickInputAnswer()}
        }

        let trueAnswer = eval(questionArrayRandom[pageCounter])
        const numberCircle = document.createElement('div')
        numberCircle.classList.add('number'+[i], 'number')
        numberCircle.innerText = i
        option.appendChild(numberCircle)

        const answerText = document.createElement('div')
        answerText.classList.add('answerText'+[i], 'answerText')
        option.appendChild(answerText)

        answerText.innerText = answerTextArray[i-1]

        if (givenAnswers.length > pageCounter) {
            let answers = []
            answers.push(Math.floor(Math.random() * (300 - 1)))
            answers.push(Math.floor(Math.random() * (300 - 1)))
            answers.push(Math.floor(Math.random() * (300 - 1)))
            if (givenAnswers[pageCounter] == trueAnswers[pageCounter]) {
                answers.push(Math.floor(Math.random() * (300 - 1)))
                console.log('random answer')
            } else { answers.push(givenAnswers[pageCounter])
            console.log('give answer')}
            answers.push(trueAnswers[pageCounter])
            answerText.innerText = answers[i-1]
            console.log('answers: ' + answers)

            const chosen = document.querySelectorAll(".option")
            chosen.forEach( function (q) {
                if(eval(q.innerText) === trueAnswer) {
                    console.log("True")
                    q.classList.add('correct')
                } else if(eval(q.innerText) !== trueAnswer) {
                    q.classList.add('wrong')
                }
            })
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
    question.innerText = 'What is ' + questionArrayRandom[pageCounter]
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
    pageIndex.innerText = pageCounter+1 + " / " + questionArrayRandom.length
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
    if (pageCounter > questionArrayRandom.length-1) {
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
    resultText.innerText = 'Gefeliciteerd! Je hebt ' + correctAnswers.length + ' van de ' + questionArrayRandom.length + ' vragen goed!'
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