/**
 * OPERADORES NO TAN COMUNES DE RXJS
 * 
 * Los temas principales son los siguientes operadores
 * 
 * 1.- take
 * 2.- first
 * 3.- takeWhile
 * 4.- takeUntil
 * 5.- skip
 * 6.- distinct
 * 7.- distinctUntilChanged
 * 8.- distinctUntilKeyChanged
 * 
 */

import { of, take, tap } from "rxjs";

/**
 * Take: example: 
 * input$ ------a-------b-------c------------
 * take(2)
 * salida ------a-------b---------------------
 * 
 * El take es un operador que establece un limite de
 * valores que serán emitidos por el observer, pero
 * despues que se emite para el ejemplo el segundo
 * valor automaticamente la subscription llamara
 * el metodo complete() y no importa si el observable
 * sigue emitiendo valores, ninguno de esos valores
 * va a llegar a la subscripción, inclusive si más
 * adelante el observable retorno un error.
 * 
 */


const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap( console.log ),
    take( 3 ) // establecemos las emisiones que necesitamos
)
.subscribe( {
    next: val => console.log('next:', val),
    complete: () => console.log('Completado')
} );
