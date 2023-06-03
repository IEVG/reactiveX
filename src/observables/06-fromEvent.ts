import { fromEvent } from 'rxjs';


const src1$ = fromEvent<PointerEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}

src1$.subscribe( ({x, y}) => {
    // let vector = `(${evento.x}, ${evento.y})`;
    console.log(x, y);
} );
src2$.subscribe( evento => {
    console.log(evento.key);
} );