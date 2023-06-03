/**
 * OPERADOR DE TRANFORMACIÓN: concatMap
 * source$: ----a--------x--------r--------------------->
 * concatMap( () => interval$.pipe( take(3)) )
 * 
 *                         Cola
 *                             interval$ -------r-s--t---->
 *                 Cola
 *                   interval$ ---a--b---c---|---------->
 *      Subcribe
 *          interval$: ---0-1-2-|----------------------->
 * salida$: --------------0-1-2----a--b---c------r-s--t-->
 * 
 * Es otro operador de aplanamiento que nos sirve para concatenar
 * los Observable resultantes que pueden fluir a travez de ese
 * operador, al ser un operador de aplanamiento ustedes deberían
 * entender automáticamente a que cuando se recibe un Observable
 * el operador de aplanamiento automáticamente se va a subscribir
 * a el y el resultado de la salida será el producto de dicho
 * Observable.
 *
 */

import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";


const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click');

click$.pipe(
    concatMap( () => interval$)
)
.subscribe(console.log)







