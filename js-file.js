/**
 * Function to set up the grid to be used to draw
 */
function grid() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 16; i++) {
        const lineContainer = document.createElement('div');
        for (let j = 0; j < 16; j++) {
            const grid = document.createElement('div');
            grid.style.width = "25px";
            grid.style.height = "25px";
            grid.style.border = "1px solid black";
            grid.classList.add('grid-block');

            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = "red";
            })
            lineContainer.appendChild(grid);
        }
        lineContainer.classList.add('line-container');
        container.appendChild(lineContainer);
    }
}

grid();

// how to trigger a function when a button is pressed?
/**
div container
 div line
     div grid
     div grid
     div grid
    . . . . .
 */