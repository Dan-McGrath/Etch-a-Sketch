const container = document.querySelector('.container');




const createGrid = (rows = 16, cols = 16) => {
    
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);

        for(let j = 0; j < cols; j++) {
            const col = document.createElement('div');
            col.classList.add('cols');
            row.appendChild(col);
        }
    }
    
}



createGrid();