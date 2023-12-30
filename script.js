const gamePad = document.querySelector('#gamepad');

for (let i = 0; i < 16*16; i++) {
    const tile = document.createElement('div');
    tile.style.width = "50px";
    tile.style.height = "50px";
    tile.className = "tile";

    tile.addEventListener('mouseover', function() {
        if (tile.className != "tile painted") {
            tile.className += " painted";
        }
    });

    gamePad.appendChild(tile);
}

