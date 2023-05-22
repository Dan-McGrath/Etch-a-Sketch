const container = document.querySelector('.container');
const defaultColors = [
    'black',
    'grey',
    'blue',
    'darkGreen',
    'fireBrick',
    'gold'
]


const setColor = () => {
    let newColor = colorPicker.value;
    colorPicker.style.backgroundColor = colorPicker.value;
    return newColor
}

//allow user to click and drag colors
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//add default color to grid square
const addColor = (e, color = 'black') => {
    if(e.type === 'mouseover' && !mouseDown) {
        return
    }
    color = setColor();
    e.target.dataset.active = 'true';
    e.target.dataset.color = color;
}

//remove color from grid squre
const removeColor = (e) => {
    if (e.type === 'mouseover' && !mouseDown || eraserButton.dataset.active === 'false') {
        return
    }
    if (eraserButton.dataset.active === 'true') {
        e.target.dataset.active = 'false';
        e.target.dataset.color = 'white';
    }
    
}

//create defualt grid

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

// call default grid
createGrid();

const clearGrid = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }    
}

// change grid size

const size = document.getElementById('grid');
const sizeLabel = document.getElementById('grid-label');
const grid = document.getElementById('create-grid');

const getSize = () => {
    sizeLabel.dataset.value = size.value;
    sizeLabel.textContent = sizeLabel.dataset.value;

}

const changeGrid = () => {
    clearGrid();
    createGrid(size.value);
}

grid.addEventListener('click', changeGrid);
size.addEventListener('input', getSize);

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



const cell = document.querySelectorAll('.cols');


// Color 
const colorPicker = document.getElementById('pick-color');
const pickColorBtn = document.getElementById('pick-color-btn');
//console.log(colorPicker)



// create options based on default colors array
const getColor = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const option = document.createElement('option');
        option.dataset.color = arr[i];
        option.value = arr[i];
        colorPicker.appendChild(option)
    } 
}

//
//console.log(setColor())
getColor(defaultColors);
colorPicker.addEventListener('change', setColor)
