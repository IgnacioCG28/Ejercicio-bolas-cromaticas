const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//Averiguar el ancho y el alto del template
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//Número random entre un minimo y máximo
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
};
// Número RGB random usando número random entre 0 y 255
const randomRGB = () => {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
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
    ctx.beginPath()
    // Darle un color
    ctx.fillStyle = this.color
    // Forma de la bola
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
  }

  update() {
    //Caso condición choque horizontal (bota), de movimiento positivo + a negativo -
    if (this.x + this.size >= width) {
      //Borde derecho
      this.velX = -Math.abs(this.velX)
    }
    if (this.x - this.size <= 0) {
      //Borde izquierdo
      this.velX = Math.abs(this.velX)
    }
    // Choque vertical
    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY)
    }
    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY)
    }

    // Actualiza las coordenadas de la pelota según las velocidades actuales.
    this.x += this.velX
    this.y += this.velY
  }

  collisionDetect() {
    for (const ball of balls) {
      // Verificar que la bola actual no es la misma que la bola de la iteración
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;

        // Calcular la distancia entre la pelota actual y la pelota de la iteración
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB()
        }
      }
    }
  }
}

const balls = [];

let qty = parseInt(prompt("Número de bolas"));
  
// Función que define el bucle principal del programa
const loop = () => {
  // Establece fondo semitransparente
  ctx.fillStyle = `rgba(0,0,0, 0.25)`;
  ctx.fillRect(0, 0, width, height);
  
  

  while (balls.length < qty) {
    const size = random(10, 20)
    const ball = new Ball(
      //Generar posición en x de forma aleatoria para esta bola en el lienzo
      random(0 + size, width - size),
      random(0 + size, height - size),
      //Velocidad en la dirección de x se establece de forma aleatoria entre -7 y 7
      random(-7, 7),
      random(-7, 7),
      randomRGB(),
      size
    )
  
    balls.push(ball);
  }

  for (const ball of balls) {
    ball.draw(); // Dibuja la pelota
    ball.update(); // Actualiza posición de la pelota
    ball.collisionDetect(); // verificar si colisiona con otras pelotas
  }
  requestAnimationFrame(loop); // Solicitar al navegador que llame a la función "loop"
};

loop(); // Inicia el bucle principal
