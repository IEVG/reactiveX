/**
 * OPERADOR DE TIEMPO: sample
 * example:
 * interval$: --a--------b-----c--------------d----|-----
 * click$: ---------ev-------------ev---ev--------ev--|------
 * sample(click$)
 * 
 * -------------------a---------------c-------------d-|--
 * 
 * el cual emite el último valor emitido por el Observable
 * hasta que el otro Observable que tenermos dentro del
 * operador Sample emita un valor
 */

import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);

const click$ = fromEvent( document, 'click');

interval$.pipe(
    sample( click$ )
).subscribe(console.log)






