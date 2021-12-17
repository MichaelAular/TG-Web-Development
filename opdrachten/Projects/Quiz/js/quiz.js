
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
    }

function constructButtons() {
    const prev_btn  = document.createElement('button');
    prev_btn.classList.add('prev_btn', 'btn');
    prev_btn.innerText = 'BACK';
    container.appendChild(prev_btn);
    // prev_btn.onclick = () => {clickPrev()}
    const next_btn  = document.createElement('button');
    next_btn.classList.add('next_btn', 'btn');
    next_btn.innerText = 'NEXT';
    container.appendChild(next_btn);
    // prev_btn.onclick = () => {clickNext()}
}

function constructAnswerblocks() {
    for (i=1 ; i < 6 ; i++) {
        const option = document.createElement('div')
        option.classList.add('option'+[i], 'option')
        container.appendChild(option);

        const number = document.createElement('div')
        option.classList.add('number'+[i], 'number')
        number.innerText = i
        option.appendChild(number)
    }
}

/// /// create question field /// ///
/// /// create question /// ///
/// /// create answers /// ///