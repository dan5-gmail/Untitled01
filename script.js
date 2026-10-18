const player = document.getElementById("player");
const game = document.getElementById("game");


let playerX = 100;
let playerY = 200;

const speed = 5;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
        case "w":
            playerY -= speed;
            break;

        case "ArrowDown":
        case "s":
            playerY += speed;
            break;

        case "ArrowLeft":
        case "a":
            playerX -= speed;
            break;

        case "ArrowRight":
        case "d":
            playerX += speed;
            break;
    }

    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
});