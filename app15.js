// SHERLY DALLANA LUCIA GARCIA YAC
// CARNET: 2290-20-8516

const {crearArchivo}= require ('./helpers/multiplicar4')
const colors = require('colors')
const argv= require('./config/yargs2.js')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo =>console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err))


/**
 * Tarea: Modificar la aplicación para que acepte otra bandera llamada --hasta o -h
 * 1-Arregle el problema de los colores en el archivo de texto
 * 2-Agregar --hasta o -h para decir hasta que tabla llegará la aplicación
 * Ejemplo node app16 --base=1 --hasta=10 -1
 * Da omo resultado el despilege en consola de las tablas del ahsta el 10 en consola
 * y también existirá un archivo que diga tabla-1-hasta-10.txt
 * Las tablas se deben de desplegar de una forma agradable y coherente.
 */

//      Sherly Dallana Lucía García Yac
//      Carnet: 2290-20-8516