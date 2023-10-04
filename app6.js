/**
 * Acá se manda a llamar la destructuración de multiplicar2.js
 * que ahora ya tiene permisos para importar crearArchivo
 * aca se transforma en Promesas las funciones flecha pero
 * utilizando el Async y el Await.
 */

const { crearArchivo } = require('./helpers/multiplicar3')

/**
 * Se crea la carpeta helpers para crear toda la logica de la 
 * aplicacion en un archivo dentro de estas carpetas llamada
 * multiplicar.js
 */

console.clear();

const base = 2

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

/**
 * El proyecto posterior trata de crear documentaciones y poder trabajar desde la consola
 * esta aplicacion es decir, que por ejemplos en la linea de comandos se ingresa
 * lo siguiente: node app7 --base=9 limit=12, entonces hará las tablas 
 * del 9 al 12 por eemplo. También se puede usar para saber información de la App
 * por ejemplo su versión o banderas que se pueden utilizar en la aplicación.
 */