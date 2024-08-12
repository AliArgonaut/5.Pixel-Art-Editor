const gridContainer = document.getElementById('gridContainer');


const gridPixel = "<div class = 'gridPixel'> </div>"

const gridRows = '50px '.repeat(139).trim(); 
const gridColumns = '50px '.repeat(139).trim();

gridContainer.style.gridTemplateRows = gridRows; 

gridContainer.style.gridTemplateColumns = gridColumns;

function createGrid(gridNum) {
    for (let i = 0; i < gridNum; i++) {
        gridContainer.innerHTML += gridPixel; 
    } 
}

createGrid(16);