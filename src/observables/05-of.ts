/**
 * Cuando importamos de rxjs significa que importamos
 * observable o interfaces para regular nuestros observables
 */
import { of, scheduled } from 'rxjs';

/**
 * Functions for create Observables
 * 
 * 1.- of: es una función que nos permite crear un observable
 * en base a una listado de elementos
 */

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 7, 8, 9);
// const obs$ = of( [1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true) );

console.log('Inicio del Obs$');
obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del Obs$');