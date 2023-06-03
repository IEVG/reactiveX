/**
 * funcion de combinacion: merge
 * 
 * obs1$: --a-----b--------c--|------>
 * obs2$: ----d--------e--------f---|--->
 * 
 * merge( obs1$, obs2$ )
 * 
 *     -----a--d---b---e----c----f---|------------
 * 
 * Es otra funcion que recibe uno o mas Observables y el resultado
 * es el producto de ambos Observables combinados simultaneamente
 * 
 * 
 */

import { fromEvent, merge, pluck } from "rxjs";


const keyUp$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge( 
    keyUp$.pipe( pluck('type') ), 
    click$.pipe( pluck('type') )
).subscribe( console.log );
