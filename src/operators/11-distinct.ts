/**
 * OPERADOR DISTINCT
 * example:
 * interval$ --1-----1-----2--------3------3------4----1---
 * distinct()
 * salida ------1-----------2--------3------------4-----
 * 
 * deja pasar unicamente los valores, que no han sido
 * emitidos por mi Observable
 * 
 */

import { distinct, from, of } from "rxjs";

const numeros$ = of(1,1,1,'1',2,2,3,3,4,4,5,5,'1',3,1);

numeros$.pipe(
    distinct()// usa la equidad === de javascript para comparar
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman'},
    { nombre: 'X'},
    { nombre: 'Zero'},
    { nombre: 'Dr. willy'},
    { nombre: 'X'},
    { nombre: 'Megaman'},
    { nombre: 'Zero'}
]

from( personajes ).pipe(
    //le indicamos que campo del Objecto queremos estar pendiente de las emisiones
    //en este caso de nombre
    distinct( p => p.nombre)
).subscribe( console.log)

