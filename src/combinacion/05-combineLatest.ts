/**
 * funcion de combinacion: combineLatest
 * 
 * obs1$: --a-----b------------------c-----d----e---->
 * obs2$: ----1--------2----3----4---|----------->
 * 
 * combineLatest( obs1$, obs2$ )
 * 
 *     ------a1---b1----b2--b3---b4---c4---d4---e4-----
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

import { combineLatest, fromEvent, map } from "rxjs";


// const keyUp$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest( 
//     keyUp$.pipe( pluck('type') ), 
//     click$.pipe( pluck('type') )
// ).subscribe( console.log );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '**************';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(
        map<KeyboardEvent,string>( ({ target }) => target['value'])
    );


combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 )
).subscribe( console.log );



