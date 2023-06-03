// Importamos de la libreria rxjs el Observable
//Dentro la libreria de rxjs estan todas las opciones para crear Observables
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('Error [obs]:', error),
    complete: () => console.info('completado [obs]')
}

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    /**
     * Cuando se llama al complete() ninguna emisión posterior
     * a la llamada del complete() va a ser notificada a sus
     * subscriptores
     */
    subs.complete();

    // por tanto, estos valores no seran emitidos y no se mostraran en consola
    subs.next('Hola');
    subs.next('Mundo');
});

/**
 * Esta definición del observable me permite crear subscripciones
 */
const obs1$ = new Observable<String>(suscribe => {
    suscribe.next('Hola');
    suscribe.next('Mundo');
    suscribe.next('Estas tan cerca de conocer al 1')
    suscribe.complete();
});


/**
 * Las subscripciones son como gente (Personas) que va estar 
 * pendiente de las emisiones de mi Observable
 */

//obs1$.subscribe(valorEmitido => console.log(valorEmitido));
//Esto es lo mismo para la version de EcmactScript 6
//Vale la pena mensionar que para que un Observable se ejecute
//tiene que tener una Subscription
obs1$.subscribe( console.log );

// obs$.subscribe( console.log );

// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.info('Completado')
// );

obs$.subscribe( observer );



