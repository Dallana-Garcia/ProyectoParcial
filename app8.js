// SHERLY DALLANA LUCÍA AGRCÍ AYAC
// CARNET: 2290-20-8516

const { crearArchivo } = require('./helpers/multiplicar3')

console.clear();

// CAPTURANDO EL TERCER ARGUMENTO, se ingresa en consola node app8 --base=5
const [, , arg3='base=5'] = process.argv;
const [ , base=5] = arg3.split('=')

// Se puede comprobar sin argumentos node app8

//Esto tiene muchos inconvenientes ya que acepta cualquier tipo de parámetros.
//Por ejemplo node app8 --limit=40 --base=10, hace la tabla del 40 por ejemplo

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

//Para correr el app8 es necesario ingresar los siguiente node app8 --base=12 e consola.