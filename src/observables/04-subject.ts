import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>( suscriber => {

    /**
     * Tras bastidores este intervalo sigue consumiendo
     * memoria, por tanto se tiene que llamar al Unsubscribe()
     * para destruirlo
     */
    const intervalo = setInterval( () => {
        suscriber.next( Math.random() )
    }, 1000);

    //cuando se llame al metodo unsubscribe se llama al return
    //con la función que va a limpiar el intervalo
    return () => {
        clearInterval( intervalo );
        console.log('Intervalo destruido');
    };
    
});

/**
 * Para cada subscripcion se emiten valores diferentes
 */
// const subs1 = intervalo$.subscribe( rand => console.log('sub1', rand) );
// const subs2 = intervalo$.subscribe( rand => console.log('sub2', rand) );

/**
 * Pero que pasaría si se quiere recibir el mismo valor
 * para cada subscription sin importar en donde se encuentre
 */
//El subject es un tipo especial de Observable
/**
 * Tiene características importantes:
 * 1.- Casteo multiple, significa que muchas Subscriptions van
 * a estar sujetas a este mismo Subject o este mismo Observable
 * y va a servirme para destribuir la misma información
 * a todos los lugares donde esten subcritos o a todos los
 * lugares que les interece ese valor.
 * 
 * 2.- También es un Observer
 * 3.- También se puede manejar el next, error y complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {

    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();// este llama al return de Observable intervalo$
    
}, 3500);

/**
 * Cuando la data es producida por el Observable en sí mismo, es
 * considerado un "Cold Observable". Pero cuando la data es
 * producida FUERA del observable es llamado "Hot Observable".
 * ---Un Subject--> nos permite tranformar un Cold observable a un
 *  Hot Obserevable 
*/



