/**
 * SECCIÓN 9: OPERADORES DE TRANSFORMACIÓN
 * 
 * Temas puntuales de la sección
 * 
 * Vimos en la seccióna anterior (ajax), que existe la 
 * necesidad de subscribirse al producto de un Observable,
 * para poder obtener la información que necesitamos, l
 * cual lleva a que perdamos control de la legibilidad de
 * nuestro código y la facilidad de trabajar con
 * observables y operadores...
 * 
 * Por suerte, el equipo de ReactiveX pensó en esto y
 * nos ayuda con las siguientes funciones y operadores:
 * 
 * 1.- mergeAll
 * 2.- mergeMap
 * 3.- switchMap
 * 4.- concatMap
 * 5.- exhausMap
 * 
 * Aquí tendremos formas muy interesantes de poder trabajar
 * con el concepto del aplanamiento, que vermos y explicaré
 * más adelante en esta sección.
 * 
 */

import { catchError, debounceTime, fromEvent, map, mergeAll, Observable, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";

// REferencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    console.log( usuarios );
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ');
        li.append( anchor );

        orderList.append(li);
        
    }
}

// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>( textInput, 'keyup' );

// input$.pipe(
//     debounceTime(500),
//     map( event => {
//         const texto = event.target['value'];
//         return ajax.getJSON(
//             // `https://api.github.com/users/${ texto }`
//             `https://api.github.com/search/users?q=${ texto }`
//         );
//     })
// ).subscribe( resp => {
//     resp.pipe(
//         // pluck('url')
//     ).subscribe ( console.log )
// });


/**
 * OPERATOR: mergeAll
 * 
 * Sirve para trabajar con observable e internamente
 * retorno un Observable 
 * 
 * example:
 * source$: -------------------------|---------------
 *            \a        \e
 *  ALT+92       \b         \
 *                  \c         \ 
 *                     \          \f
 *                         \d        \
 *                           /         \g
 *                             \          / 
 *                               \          \
 * mergeAll() ---------------------------------------
 * 
 * salida:  ---a--b--c---e---d------f---g----------------
 * 
 */

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`)
        ),
    mergeAll(),
    pluck('items')
).subscribe( mostrarUsuarios as any );

//Especificando el tipo de datos que fluye en el operador
//Intente aplicar el tipado; pero no funciono

// input$.pipe(
//     debounceTime<KeyboardEvent>(500),
//     // pluck<KeyboardEvent, string>('target', 'value'),
//     map<KeyboardEvent, string>( event => event?.target['value']),
//     map<string, any>( texto => ajax.getJSON(
//             `https://api.github.com/search/users?q=${ texto }`
//     )),
//     mergeAll(),
//     pluck('items')
// ).subscribe( mostrarUsuarios );
