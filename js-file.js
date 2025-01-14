/**
 * Main function to create the sketch board, and handle effects, such as hovering and reset
 * @param dimension the dimensions of the sketch board, initial is 16x16
 */
function createGrid(dimension) {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    for (let i = 0; i < dimension; i++) {
        const lineContainer = document.createElement('div');
        for (let j = 0; j < dimension; j++) {
            // create individual grid blocks and style them
            const grid = document.createElement('div');

            grid.style.width = containerWidth / dimension;
            grid.style.height = containerHeight / dimension;
            grid.style.border = "1px solid black";
            grid.style.cursor = "pointer";
            grid.style.flex = "1 1 0";
            grid.classList.add('grid-block');

            lineContainer.appendChild(grid);
            lineContainer.classList.add('line-container');

            let eraserTool = false;
            let drawTool = false;
            let rainbowTool = false;

            const eraser = document.querySelector('.eraser')
            const draw = document.querySelector('.draw');
            const rainbow = document.querySelector('.rainbow');

            // handles draw and eraser tools
            eraser.addEventListener('click', () => {
                eraserTool = true;
                drawTool = false;
                rainbowTool = false;
                eraser.style.backgroundColor = "lightgreen";
                draw.style.backgroundColor = "#F8FAFC";
                reset.style.backgroundColor = "#F8FAFC";
                rainbow.style.backgroundColor = "#F8FAFC";
            })

            draw.addEventListener('click', () => {
                drawTool = true;
                eraserTool = false;
                rainbowTool = false;
                draw.style.backgroundColor = "lightgreen";
                eraser.style.backgroundColor = "#F8FAFC";
                reset.style.backgroundColor = "#F8FAFC";
                rainbow.style.backgroundColor = "#F8FAFC";
            })

            rainbow.addEventListener('click', () => {
                rainbowTool = true;
                eraserTool = false;
                drawTool = false;
                rainbow.style.backgroundColor = "lightgreen";
                eraser.style.backgroundColor = "#F8FAFC";
                reset.style.backgroundColor = "#F8FAFC";
                draw.style.backgroundColor = "#F8FAFC";
            })
            // to handle hovering effect when drawing and erasing
            grid.addEventListener('mouseover', () => {
                if (eraserTool) {
                    grid.style.backgroundColor = "white";
                }
                else if (drawTool) {
                    grid.style.backgroundColor = "black";
                }
                else if (rainbowTool) {
                    grid.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
                }
            })

            // to handle reset
            const reset = document.querySelector('.reset')
            reset.addEventListener('click', () => {
                grid.style.backgroundColor = "white";
                reset.style.backgroundColor = "lightgreen";
                eraser.style.backgroundColor = "#F8FAFC";
                draw.style.backgroundColor = "#F8FAFC";
                rainbow.style.backgroundColor = "#F8FAFC";
                drawTool = false;
                eraserTool = false;
                rainbowTool = false;
            })
        }
        container.appendChild(lineContainer);
    }
}

/**
 * Function to get the resize the board - EX:(16x16, 32x32, and so on)
 * Deletes the existing board, and then creates a new one
 */
function load() {
    // Get user input
    let gridSize = 0;
    gridSize = input(gridSize);

    // Deletes the existing nodes
    let container = document.querySelector('.container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create the new grid
    createGrid(gridSize);
}


/**
 * Gets a random integer in the range of 0 to max-1
 * @param max the maximum number
 * @returns {number} a random number from 0 to max-1
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Validates user input and returns the value entered by the user
 * @param gridSize a variable to track the gridSize entered by the user to eventually return
 * @return gridSize the validated gridSize entered by the user
 * @note the gridSize is valid if it is in between 0 <= gridSize <= 100
 */
function input(gridSize) {
    let sentinel = -1;
    while (sentinel === -1) {
        if (gridSize > 100 || gridSize < 0) {
            gridSize = parseInt(prompt("Please enter a valid number (non-negative, less than 100x100)"));
            if (gridSize <= 100 && gridSize >= 0) {sentinel = 1;}
        }
        else {
            gridSize =  parseInt(prompt(("Enter the dimension of the grid you want (less than 100x100): ")));
            if (gridSize <= 100 && gridSize >= 0) {sentinel = 1;}
        }
    }
    return gridSize;
}

// default grid (16x16)
createGrid(16);