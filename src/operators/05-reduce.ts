import { interval, reduce, take, tap } from "rxjs";


const numeros = [1,2,3,4,5];

const totalReducir = (acumulador: number, actual: number) => {
    return acumulador + actual;
}

const total = numeros.reduce( totalReducir , 0);

console.log('total arr', total);

interval(1000).pipe(
    take(6),// este es como el limit() de java
    tap( console.log ), //este es como el peek() de java
    reduce( totalReducir )
).subscribe ({
    next: val => console.log('next:', val),
    complete: () => console.log('Completado')
});

