import { asyncScheduler } from "rxjs";

//Estas dos funciones es lo que vamos a poder realizar
//con el asyncScheduler
// setTimeout( () => { }, 3000);
// setInterval( () => {}, 3000);

// const saludar = () => console.log('Hola Mundo');
// const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
// const saludar3 = ({nombre, apellido}) => console.log(`Hola ${ nombre } ${ apellido }`);

//Creando el setTimeout()
// asyncScheduler.schedule( saludar, 2000);
// asyncScheduler.schedule( saludar2, 2000, 'Isaias');
// asyncScheduler.schedule( saludar3, 3000, {nombre: 'Isaias', apellido: 'Valdez', edad: 30});


//ahora para setInterval, usando asyncScheduler
//la accion no puede ser una funcionde flecha, tiene que ser una
//función normal
const subs = asyncScheduler.schedule( function( state ) {

    console.log('state', state)

    this.schedule( state + 1, 1000 );
    
}, 3000, 0 );

//cancelamos la subscription usando setTime()
// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);

//Cancelamos la subscription usando asyncScheduler
asyncScheduler.schedule( () => subs.unsubscribe(), 6000);


