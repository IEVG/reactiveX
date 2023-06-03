/**
 * Diferencia entre getJSON Y ajax
 * 
 */

import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/dellay/1'; //con error

const manejaError = ( resp: AjaxError ) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON( url ).pipe(
    catchError( manejaError )
);
const obs2$ = ajax( url ).pipe(
    catchError( manejaError )
);

obs$.subscribe( data => console.log('getJSON:', data) );
obs2$.subscribe( data => console.log('ajax:', data) );





