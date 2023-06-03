/**
 * first: example
 * input$: ---a--------------------------------
 * first()
 * salida: ----a-------------------------------
 * 
 * Se emite el primer valor del Observable, entra al operador
 * first() e inmediatamente se va a completar y por más que
 * se emitan más valores el first ya tomo el primer valor
 * y se completo todo
 * 
 * también se expresa de la siguiente manera
 * first( x => x >= 10 )
 */

import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    // take(1)
    tap<PointerEvent>( console.log ),
    // map( event => ({
    //     clientX: event.clientY,
    //     clientY: event.clientX
    // })),
    map( ({ clientX, clientY}) => ({ clientY, clientX }) ),
    first( event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Completado')
});