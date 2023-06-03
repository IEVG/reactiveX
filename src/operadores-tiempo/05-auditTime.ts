/**
 * OPERADOR DE TIEMPO: auditTime
 * example:
 * click$: --axy--------b---x-------c-x--|(complete)-------------
 * auditTime(2000)
 * ---------------y------------x---------|-------------
 *          ----->       ----->      ------>
 *           2seg         2seg       2seg
 * 
 * Lo que hace es emitir el último valor que ha sido emitido
 * por el Observable por un periodo de tiempo determinado
 * 
 */

import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    map( ({ x }) => x),
    tap(val => console.log('tap', val)),
    auditTime(2000)
).subscribe( console.log );

