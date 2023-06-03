import { of, from } from "rxjs";


/**
 * of = toma argumentos y genera una secuencia
 * from = crea un observable apartir de un array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
};

// const source$ = from([1,2,3,4,5]);

//usando el operador express (...) para tener algo parecido al from
// const source1$ = of(...[1,2,3,4,5])
// const source2$ = from('Isaias');

//El from nos permite tomar cualquier cosa y convertirla en un Observable
const source3$ = from( fetch('https://api.github.com/users/klerith'))


// source$.subscribe( observer );
// source1$.subscribe( observer );
// source2$.subscribe( observer );
// source3$.subscribe( observer );

// source3$.subscribe( async(resp) => {

//     console.log(resp)
    
//     const dataResp =  await resp.json();
//     console.log(dataResp);
    
// });

//Rxjs tiene otra forma de manejar peticiones ajax

//De forma interable, para ello creamos un generador
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (const iterator of miIterable) {
//     console.log( iterator );
// }

from( miIterable ).subscribe( observer );