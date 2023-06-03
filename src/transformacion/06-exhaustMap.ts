/**
 * OPERADOR DE TRANFORMACIÓN: concatMap
 * source$: ----a--------x--------r--------------------->
 * exhaustMap( () => interval$.pipe( take(3)) )
 * 
 *                         Subscribe
 *                             interval$ ---0-2---->
 *                 ignorado por
 *                 el exaustMap
 *                     interval$ 
 *      Subcribe
 *          interval$: ---0-1-2---|--------------------->
 * salida$: --------------0-1--2-------------0-2--------------->
 * 
 * Es otro operador de aplanamiento, es decir recibe un Observable
 * y maneja la subscrición internamente
 * 
 * El exhaustMap solo mantiene una Subscription activa, antes de
 * poder añadir otra subscription para que emita los valores
 *
 */

import {exhaustMap, fromEvent, interval, take } from "rxjs";


const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click');

click$.pipe(
    exhaustMap( () => interval$)
)
.subscribe(console.log)







