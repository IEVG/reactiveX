/**
 * OPERADORES QUE TRABAJAN CON EL TIEMPO
 * 
 * Entramos a los operadores del tiempo, los cuales se enfocan
 * en trabajar de alguna manera con intervalos de tiempo.
 * 
 * Los temas principales son los siguientes operadores:
 * 
 * 1.- debounceTime
 * 2.- throttleTime
 * 3.- sampleTime
 * 4.- sample
 * 5.- auditTime
 * 
 * Aunque hay más operadores que podemos colocar en esta
 * categoria, tienen las bases para poder investigarlos
 * si así lo necesitan.
 */

import { debounceTime, distinctUntilChanged, fromEvent, map, Observable } from "rxjs";

/**
 * OPERADOR: debounceTime
 * example:
 * source$: --a------b--c-----d------------------------
 * debounceTime(1000)
 * salida:  ------a--------c--------d-----------------
 *            1seg      1seg     1seg  
 * 
 * Trabaja en base a terminos de tiempo
 * Nos ayuda a que nosotros podamos contar cuantas milesimas
 * de segundos han pasado desde la última emisión, y si esta
 * esa milesima de segundos sobrepasa el parametro que
 * tenemos en el parentesis, entonces emitirá dicho valor
 * 
 * Nos va ayudar a nosotros a poder restringuir la cantidad
 * de emisiones en nuestro source$ que esta emitiendo
 * 
 */


// const click$ = fromEvent( document, 'click');

// click$.pipe(
//     debounceTime(3000)
// ).subscribe( console.log );

// Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<PointerEvent>( input, 'keyup');

input$.pipe(
    debounceTime(1000),
    map<any, any>( event => event?.target?.value),
    distinctUntilChanged()
).subscribe( console.log );










