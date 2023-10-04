/** Acá se manda a llamar la destructuración de multiplicar2.js
 * que ahora ya tiene permisos para importar crear Archivo
 * aca se transformó en Promesas las funciones flecha pero
 * utilizando el Async y el Await */
const { crearArchivo } = require("./helpers/multiplicar3")
/** Se creo la carpeta helpers para crear toda la logica de la 
 * aplicacion en un archivo dentro de esta carptera llamada
 * multiplicar.js   */
console.clear();
//const base = 2
//crearArchivo(base)
//  .then(nombreArchiv => consle.log(nombreArchivo, 'creado'))
//  .catch(err => console.log(err))
console.log(process.argv);
/**  Probar agregando en consola node app7 --base=5
 * 'C:\\Program Files\\nodejs\\node.exe',
 * C:\\Users\\Thiago\\Deskop\\CursoNodeJS\\04-bases-node\\app7',
 * '--base=5'   */
// CAPTURANDO EL TERCER ARGUMENTO, se ingresa en consola node app7 --base=5
const [, , arg3='base=5']=process.argv;
const[ , base=5] = arg3.split('=')
console.log(base);
//Se puede comprobar sin argumentos node app7
/**  El proyecto posterior trata de crear documentación y poder trabjar desde la consola
 * esta aplicacion es decir, que por ejemplo en la linea de comandos se ingresa
 * lo siguiente: node app7 --base=9 limit=12, entonces hara las tablas
 * del 9 al 12 por ejemplo. Tambien se puede usar para saber información de la App
 * por ejemplo su versión o banderas que se pueden utilizar en la aplicación.   */

//      SHERLY DALLANA LUCÍA GARCÍA YAC
//      CARNET: 2290-20-8516