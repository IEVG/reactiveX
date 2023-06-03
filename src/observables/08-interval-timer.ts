import { interval, timer } from "rxjs"; 

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Compleatado')
}

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

//El interval y timer son asincronos por naturaleza
//El iterval hace un intervalo de tiempo
const intervalo$ = interval(1000);

//El timer dispara el complete() en 2 segundos
// El timer emite el valor en un intervalo de tiempo
// const timer$ = timer(2000)

//Lo que creamos a quí es un interval que inicia en 2 segundos
// const timer$ = timer(2000, 1000);
const timer$ = timer( hoyEn5 );

console.log('Inicio')
timer$.subscribe( observer );
console.log('Fin')