
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


function handleBoxClick(e) {

    const clone = this.cloneNode(true);


    const randomColor = getRandomColor();


    clone.style.backgroundColor = randomColor;


    const label = clone.querySelector('.box-label');
    label.textContent = randomColor;


    clone.addEventListener('click', handleBoxClick);


    document.body.appendChild(clone);
}


const firstBox = document.querySelector('.box');
firstBox.addEventListener('click', handleBoxClick);