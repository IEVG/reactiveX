/**
 * SECCION 8: AJAX - PETICIONES AJAX
 * USANDO RxJs/ajax
 * 
 * Estamos entrando a la parte de la librería de RXJS
 * enfocada en peticiones Ajax. Aquí no sólo trabajaremos
 * con funciones propias para realizar llamadas HTTP, sino
 * que también configuraremos headers y trabajaremos con
 * las respuestas.
 * 
 * Los temas principales de esta sección son:
 * 
 * 1.- Conceptos básicos de una petición ajax
 * 2.- Manejo de errores
 * 3.- Fetch API
 * 4.- getJson
 * 5.- Ajax
 * 6.- Diferencia entre getJson y Ajax
 * 7.- PUT, POST, DELETE, GET
 * 
 * Espero que muchos de ustedes vean el potencial que
 * esta librería tiene, sin contrar que se le suman todos
 * los operadores que hemos visto hasta el momento.
 * 
 */

const url = 'https://api.github.com/userws?per_page=5';

const fetchPromesa = fetch( url );

// fetchPromesa
// //Para leer el body (que es un ReadableStream) tenemos que porcesarla
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error de usuario', err));


//Manejoj de errores con el Fetch Api

const manejaErrores = ( response: Response ) => {

    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
}

import { catchError, map, of, pluck } from 'rxjs';
// fetchPromesa
//     .then( manejaErrores )
// //Para leer el body (que es un ReadableStream) tenemos que porcesarla
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error de usuario', err));


// PETICIÓN USANDO AJAX DE RxJs

/**
 * OPERADOR: catchError
 * example:
 * source$: --a------b----X(ocurre un error)-----------------------
 *                     otro$:---------1------2-----3---|-------                         
 * catchError( atrapaError ): sino no ocurre ningún error emite a y asi ...
 * salida:  --a-------b--------------1------2----3---|----
 * 
 * No solo es para atrapar errores en el HTTP, sirve
 * para atrapar cualquier error que suceda en el Observable
 * 
 *  
 */

import { ajax, AjaxError } from 'rxjs/ajax';

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}

ajax( url ).pipe(
    // map( resp => resp.response )
    pluck('response'),
    // map( ({ response }) => response),
    //Tiene que retornar un error o un Observable
    catchError( atrapaError )
).subscribe( user => console.log('User:', user) );

