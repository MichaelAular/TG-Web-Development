
/// /// create start/// ///
const page_start = document.querySelector('.page_Start');
const container = document.querySelector('.container');
const start_btn  = document.createElement('button')
start_btn.classList.add('start_btn')
start_btn.innerText = 'START!'
page_start.appendChild(start_btn)
start_btn.onclick = () => {clickStart()}

/// /// /// functions /// /// ///
function clickStart() {
    container.classList.remove('page_Start');
    container.removeChild(start_btn);
    container.classList.add('page_Question', 'page1');
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
    // prev_btn.onclick = () => {clickPrev()}

    const next_btn  = document.createElement('button');
    next_btn.classList.add('next_btn', 'btn');
    next_btn.innerText = 'volgende';
    container.appendChild(next_btn);
    // prev_btn.onclick = () => {clickNext()}
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
    }
}

function constructQuestion() {
    const question = document.createElement('div')
    question.classList.add('question')
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
    pageIndex.innerText = "1 / 6"
    titleContainer.appendChild(pageIndex)
}

/// /// create answers /// ///