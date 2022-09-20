const container = document.getElementById ('container');
const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'rgb(240, 240, 87)', 'rgb(252, 4, 219)',
'rgb(4, 252, 111)', 'rgb(4, 107, 252)', 'rgb(252, 4, 4)', 'rgb(0, 57, 77)'];
const SQUAERS = 500;

for(let i = 0; i < SQUAERS; i++){
    const square = document.createElement ('div');
    square.classList.add ('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px black'
}

function getRandomColor(){
    return color [Math.floor(Math.random() * color.length)]
}