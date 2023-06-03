/**
 * OPERADOR: throttleTime
 * example:
 * source$: --a-x-y----b-----c---------c----------------
 * throttleTime(1000)
 * salida:  --a--------b------c--------c----------------
 *              ---->   ---->  ---->    ---->
 *              1seg    1seg   1seg     1seg        
 * 
 * El throttleTime es el opuesto de debounceTime
 * 
 * El source$ emite el valor a inmediatamente deja pasar
 * el valor "a" e ignora cualquier valor que se emita en 
 * en ese segundo, pasado ese segundo se vuel emitir otro 
 * valor y se deja pasar e ignora los que se emitan ene se
 * segundo o el tiempo que hayamos especificado al thottleTime
 * , y asi sucesivamente
 */

import { asyncScheduler, distinctUntilChanged, fromEvent, map, throttleTime } from "rxjs";

const click$ = fromEvent<PointerEvent >( document, 'click' );

click$.pipe(
    throttleTime(5000)
).subscribe( console.log );

const input = document.createElement('input');
document.querySelector('body').append( input )

const input$ = fromEvent( input, 'keyup');

// input$.pipe(
//     throttleTime(1000, asyncScheduler, {
//         leading: true,
//         trailing: true
//     }),
//     map<any, any>( ({target}) => target.value),
//     distinctUntilChanged()
// ).subscribe( console.log );

//Algo parecido a debounceTime

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    map<any, any>( ({target}) => target.value),
    distinctUntilChanged()
).subscribe( console.log );

