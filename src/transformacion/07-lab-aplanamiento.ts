
//Creando un formulario

import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper (auxiliar)
const peticionHttpLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError( err => of('Error'))
        );


const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones a esos campos
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitBtn );

document.querySelector('body').append( form );

//Vamos a prevenir el refrech del btn

//Streams
const submitForm$ = fromEvent( form, 'submit')
    .pipe(
        tap( ev => ev.preventDefault() ),
        map( ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value
        })),
        // mergeMap( peticionHttpLogin )
        // switchMap( peticionHttpLogin )
        exhaustMap( peticionHttpLogin )
    );

submitForm$.subscribe( token => {
    console.log(token)
} )


