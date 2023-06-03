/**
 * funcion de combinacion: forkJoin
 * 
 * obs1$, obs2$, obs2$ : Tienen que ser finitos, sino el forJoin
 * no emitiría ningún valor
 * 
 * obs1$: --a---b-------c---d----e--|----------------->
 * obs2$: ---------f-----g------h---i---j--|----->
 * obs2$: ---1--2----3---4--|------------------------->
 * 
 * forkJoin( obs1$, obs2$, obs3$ )
 * 
 *     --------------------------------------[e,j,4]--->
 * 
 * Es una función que nos permite mandar Observables
 * como argumentos combinarlos y emitir los valores de todos
 * los Observables internos simultaneamente.
 * 
 * Es importante recalcar que combineLatest regresa un nuevo
 * combineLatest, el cual va emitir valores hasta que todos
 * los valores internos hayan emitido por lo menos un valor
 * 
 */

import { delay, forkJoin, interval, of, take } from "rxjs";

//Of es sincrono, por lo cual este Observable se terminaria sumamente rápido
const numeros$   = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe( take(3) ); //0...1...2
const letras$    = of('a', 'b', 'c').pipe( delay(3500));

// forkJoin( 
//     numeros$, 
//     intervalo$, 
//     letras$
// ).subscribe( console.log );

// forkJoin( 
//     numeros$, 
//     intervalo$, 
//     letras$
// ).subscribe( resp => {
//     console.log('numeros:', resp[0])
//     console.log('intervalo:', resp[1])
//     console.log('letras:', resp[2])
// });

// forkJoin({
//     numeros$, 
//     intervalo$, 
//     letras$
// }).subscribe( resp => {
//    console.log(resp);
// });

forkJoin({
    num: numeros$, 
    int: intervalo$, 
    let: letras$
}).subscribe( resp => {
   console.log(resp);
});



