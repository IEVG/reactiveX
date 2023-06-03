import { Observable, Observer } from 'rxjs';

const obs$ = new Observable<string>(suscriber => {
    suscriber.next('Hola');
    suscriber.next('Mundo');
    suscriber.next('De nuevo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Isaias';

    suscriber.complete();

    suscriber.next('Hola mundo de nuevo');
    
});

 const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn("error [obs]", error),
    complete: () => console.info("Completado!")
 };

// obs$.subscribe(valor => {
//     valor = valor.toUpperCase();
//     console.log(valor)
// });

// obs$.subscribe( console.log );

// obs$.subscribe(
//     valor => console.log( 'next: ', valor),
//     error => console.warn( 'error: ', error),
//     () => console.info('Completado')
// )

obs$.subscribe(observer)