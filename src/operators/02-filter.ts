import { from, fromEvent, Observer, range } from 'rxjs';
import { filter, map } from 'rxjs/operators'

const observer: Observer<number> = {
    next: next => console.log('next:', next),
    error: error => console.warn('err:', error),
    complete: () => console.info('Completado')
}

const obs$ = range(1,100);

const obsFilter$ = obs$.pipe(
    filter(value => value % 2 != 0)
);

// obsFilter$.subscribe( observer );


interface Personaje {
    tipo: string,
    nombre: string
};

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

const obsPersonajes$ = from<Personaje[]>(personajes);

obsPersonajes$.pipe(
    filter(personaje => personaje.tipo === 'villano')
).subscribe( console.log )


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( event => event.code ),
    filter( strCode => strCode === 'Enter' )
);

keyup$.subscribe( console.log );





