/**
 * OPERADOR: sampleTime
 * example:
 * source$: --a-b-c-----b-----------c-t-x-------------
 * sampleTime(1000)
 * salida:  -------c------b--------------x------------
 *            ---->  ---->   ---->  ---->   
 *            1seg   1seg    1seg   1seg
 * 
 * Nos permite obtener el último valor emitido en un
 * intervalo de timpo
 */

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    sampleTime(2000),//es mas eficiente colocal el sampletime primeo
    map( ({ x, y }) => ({ x, y }))
).subscribe( console.log );



