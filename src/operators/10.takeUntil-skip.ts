/**
 * takeUntil
 * example: 
 * intervalo$ ---a----b-----c-----d---------e---f----
 * cloick$------------------------------FV--------
 * takeUntil( clickBtn$ )
 * salida --------a----b-----c------d-----|----------
 *
 * se traduce a sigue recibiendo los valores y sigue
 * emitiendolos hasta que el segundo observable emita
 * su primer valor.
 * 
 */

import { fromEvent, interval, skip, takeUntil, tap, timestamp } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );


const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap( () => console.log('tap después de skip'))
);

counter$.pipe(
    takeUntil( clickBtn$ )
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
});

/**
 * skip
 * example:
 * input$: ---a----b----c------d----e--------
 * skip(3)
 * salida  ---------------------d----e---|--.-
 * 
 * sirve para saltar o bien omiter x cantidades de
 * emisiones iniciales 
 */