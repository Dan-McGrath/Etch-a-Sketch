const container = document.querySelector('.container');



const createGrid = (num = 16) => {
    
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);

        for(let j = 0; j < num; j++) {
            const col = document.createElement('div');
            col.classList.add('cols');
            row.appendChild(col);
        }
    }
    
}

createGrid();

const cell = document.querySelectorAll('.cols');
const cellArray = Array.from(cell)
const changeCell = (e) => {
    e.target.style.backgroundColor = 'black';
}


for (let i = 0; i < cellArray.length; i++) {
    cellArray[i].addEventListener('click', changeCell)
}

