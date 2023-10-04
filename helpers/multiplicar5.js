const fs = require('fs')
const colors = require('colors')//utiliza colores

const limpiarColores = (texto) => {
    // Expresión regular para eliminar los códigos de colores ANSI
    const expresionRegular = /\x1b\[[0-9;]*m/g;
    return texto.replace(expresionRegular, '');
  };

 // utiliza una expresión regular para eliminar los códigos de colores ANSI de una cadena de texto. 



const crearArchivo=async(base=5,listar=false, hasta=10,)=>{
    try{
        
       
  //no sirve para crear las tablas y llegar al limite propuesto 
  console.clear(); 
  let salida =''                        //usando los parametros 1 de base y el otro del limite
                        
      
        for(let i=1; i<=hasta; i++){
            
          salida += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`
        }
        salida+='\n'
    
        if(listar){     //si listar es true despliega la lista del contenido en consola
            console.log('---------------------'.green);
            console.log(`  Tabla del `.green,colors.blue(base));  //aplicamos propiedades de color
            console.log('---------------------'.green);
            console.log(colors.blue(salida));
         
        }


        fs.writeFileSync(`tabla-${base}-hasta-${hasta}.txt`,limpiarColores(salida))  // se limpia ya que en el archivo 
        return `tabla-${base}-hasta-${hasta}.txt`                                   //que se genera no imprime por la 
    }catch (err){                                                                   //libreria colors esto fue extra xd
        throw err
    }
}

//ponemos la funcion en disposicion de otros modulos
module.exports = {
    crearArchivo
}