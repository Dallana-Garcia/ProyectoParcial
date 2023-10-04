// SHERLY DALLANA LUCÍA GARCÍA YAC
//  CARNET: 2290 - 20 - 8516

/**
 * Acá se manda a llamar la destructuración de multplicar.js
 * que ahora ya tiene permisos para importar crearArchivo
 */

const { crearArchivo } = require('./helpers/multiplicar')

/**
 * Se creo la carpeta helpers para crear toda la lógica 
 * de la aplicación en un archivo dentro de esta carpeta
 * llamada multiplicar.js
 */

console.clear();

const base = 5

crearArchivo(base);