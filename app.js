const container = document.querySelector('.container');




const createGrid = (width = 16, height = 16) => {
    
    for (let i = 0; i < width; i++) {
        const row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);

        for(let j = 0; j < height; j++) {
            const col = document.createElement('div');
            col.classList.add('cols');
            row.appendChild(col);
        }
    }
    
}



createGrid(100, 100);