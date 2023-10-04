const fs = require('fs')

/**
 * Se utiliza el modulo.exports para dar permiso a este archivo
 *  de exportar crearArchivo hasta el final de este archivo
 */

const crearArchivo = (base = 5) => {
    
    console.log('========================');
    console.log('      TABLA DEL:', base  );
    console.log('========================');

    let salida = '';

    for(let i =1; i <= 10; i++){
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    crearArchivo
}

// SHERLY DALLANA LUCÍA GARCÍA YAC
//  CARNET: 2290 - 20 - 8516