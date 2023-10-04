/** Ejericio - operando la aplicación con yargs inicial
 *  Acá se tiene configurando que se puede capturar -b o --base y que se pueda
 *  crear la tabla deseada en un archivo mediante peticiones en consola
 *  por ejemplo node app11 --base=10, esto crea el archivo de la tabla del 10
 *  Dando inicio al uso del paquete yars */
// Utiliza la versión de multiplicar3.js que se encuentra en herlpers

const { option } = require('yargs')
const {crearArchivo } = require('./helpers/multiplicar3')
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .check((argv, option) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                }
                return true; // Esta es la parte más importante para lanzar la validación
            })
            .argv
            console.clear();
            console.log(argv);
            //Se agregó el trabajo específico con la base b y se dispara el error si nos es número.
            crearArchivo(argv.b)
                        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                        .catch(err => console.log(err))
            /**
             * Uso de yargs, ver el resultado de escribir en consola
             * 
             * node app11 -b 17
             * node app11 --base=17
             */