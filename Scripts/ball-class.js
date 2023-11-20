import {ctx, width, height, randomRGB} from "./canvas.js";
export class Ball {

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

  export const balls = [];