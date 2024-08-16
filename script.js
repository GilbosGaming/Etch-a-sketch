const grid = document.querySelector(".container");
const prompt = document.querySelector(".gridSize");

function drawGrid(size = 16) {
    grid.innerHTML = '';

    const cellSize = 100 / size;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.flexBasis = `${cellSize}vw`;
        cell.style.height = `${cellSize} / 2 vw`;
        grid.appendChild(cell);

        cell.addEventListener("mouseover", () => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                cell.style.backgroundColor = randomColor;
        });
        
    }
    
}

}

drawGrid();

prompt.addEventListener("click", () => {
    const value = parseInt(window.prompt("Enter a value to specify the number or required rows & columns between 1-100: "), 10);
    

    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    if (value > 100) {
        alert("Set to default max. 100");
        drawGrid(100);
    } else {

    drawGrid(value);  
    }
});
    


