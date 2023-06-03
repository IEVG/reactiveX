import { map, range, tap } from 'rxjs';


const numeros$ = range(1, 5);

numeros$.pipe(
    //tap actua como peek en java para poder mostrar la data
    //si afectarla, solo muestra los resultados
    tap( x => console.log('antes', x) ),
    map( val => (val * 10).toString() ),
    tap( {
        next: next => console.log('despues', next),
        complete: () => console.log('Se termino todo')
    } )
).subscribe( val => console.log('subs', val) );


