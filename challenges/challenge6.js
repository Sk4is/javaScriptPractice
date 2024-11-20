// Quinto challenge de 2023 midudev

/* Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de Code Wars */



function cyberReindeer(road, time) {
    let roadArray = road.split(""); // Convierte la cadena en un array
    const result = []; // Almacena los estados de la carretera
    let position = road.indexOf("S"); // Encuentra la posición inicial de 'S'
  
    for (let t = 0; t < time; t++) {
      result.push(roadArray.join("")); // Guarda el estado de la carretera
  
      roadArray[position] = "."; // El trineo deja su posición actual
  
      const followingPosition = position + 1; // Calcula la siguiente posición
  
      // Si el trineo está al final de la carretera, termina
      if (followingPosition >= roadArray.length) {
        break;
      }
  
      // Si han pasado 5 unidades de tiempo, abre todas las barreras
      if (t >= 5) {
        // Reemplaza todas las barreras cerradas '|' por abiertas '*'
        for (let i = 0; i < roadArray.length; i++) {
          if (roadArray[i] === '|') {
            roadArray[i] = '*';
          }
        }
      }
  
      // Si hay una barrera cerrada y no han pasado 5 unidades de tiempo
      if (roadArray[followingPosition] === "|" && t < 5) {
        // El trineo se detiene en la barrera cerrada
        roadArray[position] = "S";
        continue; // Salta al siguiente ciclo sin mover el trineo
      }
  
      // Si el siguiente espacio es libre ('.') o la barrera está abierta ('*'), el trineo avanza
      if (roadArray[followingPosition] === "." || roadArray[followingPosition] === "*") {
        position = followingPosition; // El trineo avanza
      }
  
      roadArray[position] = "S"; // El trineo se coloca en la nueva posición
    }
  
    result.push(roadArray.join("")); // Guarda el estado final de la carretera
  
    return result; // Devuelve todos los estados generados
  }
  
  const road = 'S..|...|..';
  const time = 10;
  const result = cyberReindeer(road, time);
  
  console.log(result);
  
