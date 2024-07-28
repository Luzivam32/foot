const mainImage = document.getElementById('mainImage');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.addEventListener('mouseover', () => {
    mainImage.src = '../static/imagem/imagem1.jpeg';
});

button1.addEventListener('mouseout', () => {
    mainImage.src = '../static/imagem/default.jpg';
});

button2.addEventListener('mouseover', () => {
    mainImage.src = '../static/imagem/imagem2.jpeg';
});

button2.addEventListener('mouseout', () => {
    mainImage.src = '../static/imagem/default.jpg';
});

button3.addEventListener('mouseover', () => {
    mainImage.src = '../static/imagem/imagem3.jpeg';
});

button3.addEventListener('mouseout', () => {
    mainImage.src = '../static/imagem/default.jpg';
});