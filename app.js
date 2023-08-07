require('colors');
console.clear();
//Se importa nuestros propios paquetes
//const{mostrarMenu, pausa} = require('./helpers/mensajes');
const{inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarBD, leerDb } = require('./helpers/guardarArchivo');

//async funcion asincrona
const main = async()=>{
    let opt = ""; 
    const tareas =  new Tareas();
    /*const tareasDB = leerDb();
    if(tareasDB){
        tareas.cargarTareasFromArray();
    }*/
    await pausa();
    do{
        //Esperamos que nos devuelva algo
        opt =  await inquirerMenu();
        switch(opt){
            case '1': 
                //Crear opcion
                const desc = await leerInput('Descripcion: ');
                console.log(desc);
                tareas.crearTarea(desc);
            break;
            case '2':
                tareas.listadoCompleto();
            break;
            case '3':
            break;
        }
        await pausa();
        guardarBD(tareas.listadoArr);// Se guarda en todo momento la informacion
    }while(opt !== '0');
}
main();