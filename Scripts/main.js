const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);

//Definir el ancho y el alto del template
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//Número random entre un minimo y máximo
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Número RGB random usando número random entre 0 y 255
const randomRGB = () => {
    return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`
};

class Ball{

};
