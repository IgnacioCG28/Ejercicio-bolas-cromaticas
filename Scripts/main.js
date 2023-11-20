const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);

//Averiguar el ancho y el alto del template
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//Número random entre un minimo y máximo
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Número RGB random usando número random entre 0 y 255
const randomRGB = () => {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
};

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Creación de dibujar (el molde) una bola con métodos propios de 2d en canvas
  draw() {
    // Inicio de la ruta/posición para dibujar la bola
    ctx.beginPath();
    // Darle un color
    ctx.fillStyle = this.color;
    // Forma de la bola
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    //Caso condición choque horizontal (bota), de movimiento positivo + a negativo -
    if (this.x + this.size >= width) {
      //Borde derecho
      this.velX = -Math.abs(this.velX);
    }
    if (thix.x - this.size <= 0) {
      //Borde izquierdo
      this.velX = Math.abs(this.velX);
    }

    // Choque vertical

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }
    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }
  }






  
}