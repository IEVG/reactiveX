/**
 * OPERADOR: distinctUntilKeyChanged
 * example:
 * source$: ---{k:1}-------{k:2}----{k:2}----{k:1}---{k:3}-----------------
 * distinctUntilKeyChanged('k')
 * salida:  ---{k:1}-------{k:1}-------------{k:1}---{k:1}-----
 * 
 */

import { distinctUntilKeyChanged, from } from "rxjs";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman'},
    { nombre: 'Megaman'},
    { nombre: 'Zero'},
    { nombre: 'Dr. willy'},
    { nombre: 'X'},
    { nombre: 'X'},
    { nombre: 'Zero'}
]

from( personajes ).pipe(
    distinctUntilKeyChanged( 'nombre' )
).subscribe( console.log);
