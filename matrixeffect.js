// Canvas for the left side
const canvasLeft = document.getElementById("matrixCanvasLeft");
const ctxLeft = canvasLeft.getContext("2d");

canvasLeft.width = 300; // Narrower width for the left side
canvasLeft.height = window.innerHeight;

// Canvas for the right side
const canvasRight = document.getElementById("matrixCanvasRight");
const ctxRight = canvasRight.getContext("2d");

canvasRight.width = 300; // Narrower width for the right side
canvasRight.height = window.innerHeight;

// Common settings
const fontSize = 30; // Font size for matrix characters
const columnsLeft = Math.floor(canvasLeft.width / fontSize); // Number of columns for the left side
const columnsRight = Math.floor(canvasRight.width / fontSize); // Number of columns for the right side

// Create arrays of drops, one per column
const dropsLeft = Array(columnsLeft).fill(0);
const dropsRight = Array(columnsRight).fill(0);

const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to draw the matrix effect for the left side
const drawMatrixLeft = () => {
    ctxLeft.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctxLeft.fillRect(0, 0, canvasLeft.width, canvasLeft.height);

    ctxLeft.fillStyle = "#00FF00"; // Green matrix color
    ctxLeft.font = `${fontSize}px monospace`;

    for (let i = 0; i < columnsLeft; i++) {
        const char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctxLeft.fillText(char, i * fontSize, dropsLeft[i] * fontSize);

        if (dropsLeft[i] * fontSize > canvasLeft.height && Math.random() > 0.95) {
            dropsLeft[i] = 0;
        }

        dropsLeft[i]++;
    }
};

// Function to draw the matrix effect for the right side
const drawMatrixRight = () => {
    ctxRight.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctxRight.fillRect(0, 0, canvasRight.width, canvasRight.height);

    ctxRight.fillStyle = "#00FF00"; // Green matrix color
    ctxRight.font = `${fontSize}px monospace`;

    for (let i = 0; i < columnsRight; i++) {
        const char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctxRight.fillText(char, i * fontSize, dropsRight[i] * fontSize);

        if (dropsRight[i] * fontSize > canvasRight.height && Math.random() > 0.95) {
            dropsRight[i] = 0;
        }

        dropsRight[i]++;
    }
};

// Set the position of the canvas elements for left and right sides
document.getElementById("matrixCanvasLeft").style.position = "fixed";
document.getElementById("matrixCanvasLeft").style.left = "0";
document.getElementById("matrixCanvasLeft").style.top = "0";

document.getElementById("matrixCanvasRight").style.position = "fixed";
document.getElementById("matrixCanvasRight").style.right = "0";
document.getElementById("matrixCanvasRight").style.top = "0";

// Set interval to keep drawing
setInterval(drawMatrixLeft, 33);
setInterval(drawMatrixRight, 33);

