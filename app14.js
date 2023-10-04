/**
 * Ejericio - configurar la documentación de la aplicación
 * para utilizarla el multiplicar4.js que tendrá la opción
 * para aceptar de parámetro la bandera -l -listar
 * 
 * Utiliza el YARGS 2 que tiene modificación en una
 * mejor descripción en las banderas a la hora de utilizar
 * el help
 */

/**
 * Se cortó toda la lógica de YARGS y se pasó a la carpeta que se creó llamada
 * "config" dentro de config se creó un archivo llamado yargs.js por lo tanto
 * en este archivo app14.js se hace un require a yargs que esta en la carpeta antes mencionada.
 */

const { crearArchivo } = require('./helpers/multiplicar4')
const argv = require('./config/yargs2')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch(err => console.log(err))

//      Sherly Dallana Lucía García Yac
//      Carnet: 2290-20-8516