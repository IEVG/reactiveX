import { from, range } from 'rxjs';
import { filter } from 'rxjs/operators';

range(20,30).pipe(
    filter( (val, index) => {
        console.log('index', index);
        return val % 2 === 1
    })
)//.subscribe( console.log );

interface Personaje {
    tipo: string,
    nombre: string
}

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

from( personajes).pipe(
    filter(p => p.tipo !== 'heroe')
).subscribe( console.log);