/// /// create pages /// ///
const page_start = document.querySelector('.page_Start');
const container = document.querySelector('.container');

/// /// create buttons /// ///
const start_btn  = document.createElement('button')
start_btn.classList.add('start_btn')
start_btn.innerText = 'START!'
page_start.appendChild(start_btn)
start_btn.onclick = () => {clickStart()}

/// /// create question field /// ///
/// /// create question /// ///
/// /// create answers /// ///

/// /// /// functions /// /// ///
function clickStart() {
    container.classList.remove('page_Start');
    container.removeChild(start_btn);
    container.classList.add('page_Question', 'page1');
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
