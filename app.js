const container = document.querySelector('.container');
const colorPicker = document.getElementById('pick-color')
const defaultColors = [
    'black',
    'grey',
    'blue',
    'darkGreen',
    'fireBrick',
    'gold'
]



//allow user to click and drag colors
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


const addColor = (e, color = 'black') => {
    if(e.type === 'mouseover' && !mouseDown) {
        return
    }
    e.target.dataset.active = 'true';
    e.target.dataset.color = color;
}

const removeColor = (e) => {
    if (e.type === 'mouseover' && !mouseDown || eraserButton.dataset.active === 'false') {
        return
    }
    if (eraserButton.dataset.active === 'true') {
        e.target.dataset.active = 'false';
        e.target.dataset.color = 'white';
    }
    
}

const createGrid = (num = 16) => {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);

        for(let j = 0; j < num; j++) {
            const col = document.createElement('div');
            col.classList.add('cols');
            row.appendChild(col);
            col.addEventListener('mousedown', addColor);
            col.addEventListener('mouseover', addColor);
            col.addEventListener('mousedown', removeColor);
            col.addEventListener('mouseover', removeColor);
        }
    } 
}

// Eraser

const eraserButton = document.getElementById('eraser');
const eraser = () => {
    if (eraserButton.dataset.active === 'false') {
        eraserButton.dataset.active = 'true';
        
    } else {
        eraserButton.dataset.active = 'false';
    }
}

eraserButton.addEventListener('click', eraser);


createGrid();

const cell = document.querySelectorAll('.cols');




const getColor = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const option = document.createElement('option');
        option.classList.add(arr[i]);
        colorPicker.appendChild(option)

    } 
}



getColor(defaultColors);