const gridContainer = document.getElementById('gridContainer');


const gridPixel = "<div class = 'gridPixel' > </div>"


const gridRows = '20px '.repeat(66).trim(); 
const gridColumns = '20px '.repeat(50).trim();

gridContainer.style.gridTemplateRows = gridRows; 

gridContainer.style.gridTemplateColumns = gridColumns;

function createGrid(gridNum) {
    for (let i = 0; i < gridNum; i++) {
        gridContainer.innerHTML += gridPixel; 
    } 
}



const gridPixels = document.querySelectorAll('.gridPixel'); 

gridNum = 1800

function clearGrid(gridNum) {
    gridContainer.innerHTML = '';  // Clear the grid
    createGrid(gridNum);           // Recreate the grid
    
    // Reattach event listeners to the new grid pixels
    const gridPixels = document.querySelectorAll('.gridPixel');
    gridPixels.forEach((pixel) => {
        pixel.addEventListener('click', () => {
            console.log('grid pixel clicked');
            pixel.style.backgroundColor = "black";
        });
    });
    
    console.log('clear');
}

clearGrid(1730);

