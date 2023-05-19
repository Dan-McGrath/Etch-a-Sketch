const container = document.querySelector('.container');




const createGrid = (num = 256) => {
    
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
    
}



createGrid();