import { catchError, debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, of, pluck, switchMap } from "rxjs";
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
    mergeMap( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`)
        ),
    // mergeAll(),
    pluck('items')
)
// .subscribe( mostrarUsuarios as any );

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


const url = 'https://httpbin.org/delay/1?arg=';

// input$.pipe(
//     pluck('target', 'value'),
//     mergeMap( texto => ajax.getJSON(url + texto))
// ).subscribe( console.log );

/**
 * OPERATOR DE TRANFORMACION: switchMap
 * example:
 * source$: ------a--------x----------r-------------------------->
 * switchMap( () => interval() )
 * 
 *                         Subscribe
 *                                interval$: --r-s--------------> 
 * 
 *              Subscribe
 *                      interval$: --a-b--|----------------------->
 *      
 *      Subscribe
 *            interval$: --0-1--|------------------------>
 * 
 * salida$: ---------------0-1-------a-b-------r-s----------->
 * 
 * Recibe un collaback que retorna un Observable, es el nuevo
 * Observable el que se va a subscribir para ser la emisión de
 * la salida
 * 
 * A diferencia del mergeMap el switchMap solo va mantener un
 * Observable activo y subscrito entonces el intervalo anterio se va
 * completar. 
 */

input$.pipe(
    pluck('target', 'value'),
    switchMap( texto => ajax.getJSON(url + texto))
).subscribe( console.log );
