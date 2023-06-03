/**
 * SECCION 10: OPERADORES Y METODOS DE COMBINACIÓN DE OBSERVABLES
 * 
 * Esta sección es más tranquila que las anteriores, aquí veremos
 * operadores y métodos para combinar las emisiones de los Observables
 * o bien varios observables entre sí
 * 
 * Los temas principales son:
 * 
 * 1.- startWith
 * 2.- endWith
 * 3.- concat
 * 4.- merge
 * 5.- combineLatest
 * 6.- forkJoin
 */

import { endWith, of, startWith } from "rxjs";

/**
 * Operador: startWith
 * example
 * source$: --------1----2------3----------------------->
 * startWith('a')
 *          ---a----1----2------3------------------------>
 * 
 * Nos permite hacer una emisión antes de que el Observable empice
 * a emitir auque sea un valor sincrono, en pocas palabras estamos
 * diciendo que la primera emisión que va a tener va a ser el 'a'.
 */

//of es sincrono, por lo tanto en startWith y en endWith son sincronos
const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

// numeros$.subscribe( console.log );

/**
 * Operador: endWith
 * example
 * source$: ---1-----2-----3--------------------------->
 * endWith('s')
 *          ---1-----2-----3--------s-----------------
 */
const numeros2$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x', 'y', 'z')
);

numeros2$.subscribe( console.log );


