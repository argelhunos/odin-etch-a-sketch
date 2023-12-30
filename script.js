const gamePad = document.querySelector('#gamepad');

for (let i = 0; i < 16*16; i++) {
    const tile = document.createElement('div');
    tile.style.width = "50px";
    tile.style.height = "50px";

    gamePad.appendChild(tile);
}