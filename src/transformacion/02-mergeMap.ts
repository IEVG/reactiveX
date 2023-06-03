/**
 * OPERATOR DE TRANFORMACIÓN: mergeMap
 * example:
 * source$: --a-----x--------r--------------|-------------->
 * mergeMap( (val) => interval(1000))
 *  internamente dentro del mergeMap se va a subscribir
 * 
 *                      interval$: ----------r----------|----------->
 * 
 *              interval$: -------a-----b-----------c---|-----> se crean por cada emision del source$
 *  Subscribe 
 *          interval$: --0----1------2----------3-------|------>
 * salida$: -------------0----1---a--2--b----r---3---c---|---->
 * 
 * Es otro operador de aplanamiento, es decir el valor que ha
 * sido emitido por nuestro observable inicial y esta emitiendo
 * un nuevo observable.
 * 
 * No trasfiere el objecto al subscribe, lo que trasmitiría
 * o emitiría es el valor producto de la subcripción interna
 * 
 * No tiene limite de subscriptions internas, todas pueden estar
 * activas simultaneamente
 * 
 * tienen que completarse los observable internos y el externo para llamar 
 * al complete() de la salida
 * 
 */

import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

const letras = of('a', 'b', 'c');
letras.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + 1),
        take(3)
    ))
)
// .subscribe({
//     next: next => console.log('next:', next),
//     complete: () => console.log('Complete')
// });

//Ejercicio de cuanto tiempo pasa el usuario presionando el mouse


const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$ = fromEvent( document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
).subscribe( console.log );
