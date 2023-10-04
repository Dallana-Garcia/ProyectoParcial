const fs = require('fs')

require('colors');
const crearArchivo=async(base=5, listar=false, hasta=10)=> {
    try{
        console.clear();
        let salida='';
        for(let i = 1; i<=hasta;i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if(listar){
            console.log("================================".green);
            console.log("TABLA DEL:",colors.blue(base))
            console.log("================================".green);
            console.log(consola);
        }
        //fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        const ruta=`salida/tabla-${base}-hasta-${hasta}.txt`;

        fs.writeFileSync(ruta, limpiarColores(`Tabla del ${base}`));
        return `tabla-${base}-hasta-${hasta}.txt`; 
    }
    catch (error){
        throw error;
    }
}

// SHERLY DALLANA LUCÍA GARCIA YAC

//CARNET: 2290-20-8516