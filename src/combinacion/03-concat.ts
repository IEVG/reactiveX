/**
 * funcion de combinacion: concat
 * 
 * obs1$: --a---b---|------------------------>
 * obs2$:            --x--y--|------------- ->
 * obs3$:                     ---z--|------->
 * concat( obs1$, obs2$, obs3$ )
 * 
 *     -----a---b------x--y------z---|---------------
 * 
 * El concat es una función, no es un operador
 * 
 */

import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);

concat( 
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    // [1, 2, 3, 4]
    of(1)
).subscribe( console.log );