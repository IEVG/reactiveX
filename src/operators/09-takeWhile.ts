/**
 * takeWhile
 * example:
 * input$ ---2-----3---4----5----6-------|--------
 * takeWhile( x => x < 4 )
 * salida ----2-----3-|-------------------------
 * 
 * como la misma palabra lo dice permite recibir
 * valores, mientras la condición se cumpla
 * 
 */

import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    map( ({x, y}) => ({x, y}) ),
    // takeWhile( ({ y }) => y <= 150 )

    /**
     * insclusive = true ->representa el ultimo valor 
     * inclusive que rompe takeWile
     */
    takeWhile( ({ y }) => y <= 150, true ) 
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Completado')
});

