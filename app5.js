/**
 * Acá se manda a llamar la destructuración de multiplicar2.js
 * que ahora ya tiene permisos para importar crearArchivos
 * aca se transformó en Promesas las funciones flecha.
 */

const { crearArchivo } = require('./helpers/multiplicar2')

/**
 * Se creo la carpeta helpers para crear toda la logica
 * de la multiplicacion en un archivo dentro de esta carpeta llamada
 * multplicar.js
 */

console.clear();

const base = 31

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

/**
 * SHERLY DALLANA LUCÍA GARCIA YAC
 * CARNET: 2290-20-8516
 */