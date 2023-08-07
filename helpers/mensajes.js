
require('colors');
const mostrarMenu=()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("========================".green);
        console.log("Seleccione una opcion ".green);
        console.log("========================".green);

        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tarea`);
        console.log(`${'3.'.green} Listar Tareas Completas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tareas`);
        console.log(`${'6.'.green} Borrar Tareas`);
        console.log(`${'0.'.green} Salir`);
        /**
         * Paquete propio de node
         */
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });

        readline.question('Seleccione una opcion ' , (opt) =>{
            readline.close();
            //Esto permitira recibir informacion
            resolve(opt);
        })
    });
    
}

const pausa = ()=>{
    return new Promise(resolve=>{
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readLine.question(`\n Presione ${'Enter'.green} para continuar\n`, (opt)=>{
            readLine.close();
            // Esto resuelve la promesa
            resolve();
        })
    });
}


//Para que la función pueda ser invocada
module.exports = {
    mostrarMenu,
    pausa
}