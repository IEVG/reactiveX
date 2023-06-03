/**
 * SECCION 5: OPERADORES BASICOS
 * 
 * Es momento de entrar al tema de los operadores. Este tema me
 * encanta y es donde ReactiveX brilla, porque la fuerza de los
 * operadores nos permiten jugar con la data
 * y el flujo de información de una manera
 * sorprendente.
 * 
 * Los temas principales de esta sección son:
 * 
 * 1.- Explication de los operadores
 * 
 * 2.- Operadores como:
 *  a. map
 *  b. pluck
 *  c. mapTo
 *  d. filter
 *  e. tap
 *  f. reduce
 *  g. scan
 * 
 * 3.- Encadenamiento de operadores
 * 
 * Entre otros temas que vará poco apoco... estos son los
 * operadores comunes y más usados...
 */


//PRIMER OPERADOR MAP

import { fromEvent, Observable, OperatorFunction, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


//dentro del pipe colocamos nuestros operadores
// range(1, 5).pipe(
//     map<number, string>( val => (val * 10).toString() )
// ).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyConst$ = keyup$.pipe(
    map( event => event.code )
);
// ).subscribe( console.log );

const keyupPluck$  = keyup$.pipe(
    //pluck esta deprecated
    // pluck('key')
    //pluck('target', 'baseURI') //¿Cómo obtener esto pero con map?
    //marca un error, pero esa es la forma correcta para obtener la baseURI
    //lo mas probable que sé un tema de versiones
    map<any, any>(x => x?.target?.baseURI) 
    
);

const keyupMapTo$ = keyup$.pipe(
    /**
     * para cualquier valor que entre al operador mapTo siempre
     * devolverá el mismo resultado, en este caso retorno 'tecla presionada'
     * mapTo esta deprecated
     */
    // mapTo('tecla presionada') 
    // mapTo(1)
    // mapTo( {valor: 1 })

    //usamos map(() => value)
    map( () => 'tecla presionada')
    
);

keyup$.subscribe( event => console.log('Evento:', event));
keyConst$.subscribe( code => console.log('Map:', code) );
keyupPluck$.subscribe( code => console.log('Pluck:', code) );
keyupMapTo$.subscribe( mensaje => console.log('MapTo:', mensaje) );