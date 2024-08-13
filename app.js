const gridContainer = document.getElementById('gridContainer');


const gridPixel = "<div class = 'gridPixel' > </div>"


const gridRows = '50px '.repeat(20).trim(); 
const gridColumns = '50px '.repeat(27).trim();

gridContainer.style.gridTemplateRows = gridRows; 

gridContainer.style.gridTemplateColumns = gridColumns;

function createGrid(gridNum) {
    for (let i = 0; i < gridNum; i++) {
        gridContainer.innerHTML += gridPixel; 
    } 
}



createGrid(459);

function clearGrid() {
    gridContainer.innerHTML = ''; 
   createGrid(459)
    console.log('clear') 
}

const gridPixels = document.querySelectorAll('.gridPixel'); 

gridPixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = 'black';
    })
})

