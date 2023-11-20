import { Ball, balls } from "./ball-class.js";
import { ctx, width, height, random, randomRGB } from "./canvas.js";

let qty = parseInt(prompt("Número de bolas"));

// Función que define el bucle principal del programa
const loop = () => {
  // Establece fondo semitransparente
  ctx.fillStyle = `rgba(0,0,0, 0.25)`;
  ctx.fillRect(0, 0, width, height);

  while (balls.length < qty) {
    const size = random(10, 20);
    const ball = new Ball(
      //Generar posición en x de forma aleatoria para esta bola en el lienzo
      random(0 + size, width - size),
      random(0 + size, height - size),
      //Velocidad en la dirección de x se establece de forma aleatoria entre -7 y 7
      random(-7, 7),
      random(-7, 7),
      randomRGB(),
      size
    );

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
