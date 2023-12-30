// button
const button = document.querySelector('button');
let gamePad = document.querySelector('#gamepad');
let numberOfTiles = 16;
button.addEventListener('click', function() {
    numberOfTiles = NaN;
    do {
        numberOfTiles = parseInt(prompt("Please enter number of squares (max 100):", "16"));
    } while (isNaN(numberOfTiles));
    
    if (numberOfTiles > 100) {
        numberOfTiles = 100;
    }

    // remove and create new grid
    gamePad.remove();
    gamePad = document.createElement('div');
    gamePad.id = "gamepad";
    document.querySelector('body').appendChild(gamePad);
    createGrid();
});

function createGrid() {
    for (let i = 0; i < numberOfTiles*numberOfTiles; i++) {
        const tile = document.createElement('div');
        const tileSize = 800/numberOfTiles + "px";
        tile.style.width = tileSize;
        tile.style.height = tileSize;
        tile.className = "tile";
    
        tile.addEventListener('mouseover', function() {
            if (tile.className != "tile painted") {
                tile.className += " painted";
            }
        });
    
        gamePad.appendChild(tile);
    }
}

createGrid();