const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
//Averiguar el ancho y el alto del template

export const width = (canvas.width = window.innerWidth);
export const height = (canvas.height = window.innerHeight);
//Número random entre un minimo y máximo

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Número RGB random usando número random entre 0 y 255
export const randomRGB = () => {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
};
