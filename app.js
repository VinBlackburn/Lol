var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

var FPS = 60;

var canvas;
var context;
var img;

init();

function init() {
    canvas = document.getElementById('canvas');

    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        createTrail();

        setInterval(loop, 1000 / FPS);
    }
}

function createTrail() {
    img = {
        x: 100,
        y: 100,
        speed: 3,
        direction: Math.PI * 2 * Math.random()
    }
}

function updatePosition() {
    var dx img.x + img.speed * Math.cos(img.direction);
    var dy = img.y + img.speed * Math.sin(img.direction);

    if (dx < 0 || dx > CANVAS_WIDTH || dy < 0 || dy > CANVAS_HEIGHT) {
        img.direction = Math.PI * 2 * Math.random();
        updatePosition();
    } else {
        img.x = dx;
        img.y = dy;
    }
}

function loop() {
    updatePosition();

    // Draw over the whole canvas to create the trail effect
    context.fillStyle = 'rgba(255, 255, 255, .05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the img
    context.beginPath();
    context.fillStyle = '#ff0000';
    context.moveTo(img.x, img.y);
    context.arc(img.x, img.y, 3, 0, Math.PI * 2, true);
    context.fill();
}