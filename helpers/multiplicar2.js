/**
 * Se utiliza el modulo.exports para dar permiso a este archivo 
 * de exportar crearArchivo hasta el final de este archivo.
 */
const fs = require('fs')

const crearArchivo = (base = 31) => {
    return new Promise((resolve, reject) =>{
        console.log('=======================');
        console.log('       TABLA DEL:', base);
        console.log('=======================');

        let salida = '';

        for(let i =1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    })
}

module.exports = {
    crearArchivo
}

/**
 * Sherly Dallana Lucía García Yac
 * Carnet: 2290-20-8516
 */