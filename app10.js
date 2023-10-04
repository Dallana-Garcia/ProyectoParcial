/**
 * Ejericio -configurando Yargs
 * Ver la documentación de Yargs en https://yargs.js.org/
 * buscar en la pagina el uso de .option(key, [opt])
 * var argv = require('yargs/yargs')(process.argv.slice(2))
    .option('f', {
        alias:'file',
        demandOption: true,
        default: '/etc/passwd',
        describe: 'x marks the spot',
        type: 'string'
    })
    .argv
    ;
    Dado inicio al uso del paquete yars
 */
const { crearArchivo } = require('./helpers/multiplicar3')
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true
        })

        .check((argv, option) => {
            if( isNaN(argv.b)){
                //Nan = Not Number
                throw 'La base tiene que ser un numero'
            }
            return true;
        })
        .argv

console.clear();

console.log(process.argv); //interno
console.log(argv); //del paquete yargs
console.log('base: yargs', argv.b);

/**
 * Uso de yargs, ver el resultado de escribir en consola
 * node app10 --base=5 --limit=10
 * node app10 --base=abc
 * node app10
 * 
 * Documentar que pasa en cada caso de lo planteado en la lienas anteriores.
 */
        