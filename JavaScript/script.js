const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const button = document.getElementById("generateBtn");

function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    colorBox.style.backgroundColor = color;
    colorCode.textContent = color;
    document.body.style.backgroundColor = color;
}
button.addEventListener("click", generateColor);
generateColor();