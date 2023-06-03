import { interval, Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>( subscribir => {
    //crear un contador, 1,2,3,4,5....
    let count = 0;

    const interval = setInterval( () => {
        // cada segundo
        count++
        subscribir.next(count);
        console.log(count)
        // if (count == 10)
        //     subscribir.complete();
    }, 1000);

    setTimeout(() => {
        subscribir.complete();
    }, 2500);

    //ejecutamos este codigo cuando ejecutamos el unsubscribe para
    //finalizar los intervalos
    return () => {
        clearInterval( interval );
        console.log('intervalo destruido');
    }
});

// const subscription1 = intervalo$.subscribe( num => console.log("Num: ",num) );
// const subscription2 = intervalo$.subscribe( num => console.log("Num: ",num) );
// const subscription3 = intervalo$.subscribe( num => console.log("Num: ",num) );

const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

subscription1.add( subscription2 )
subscription2.add( subscription3 );

// intervalo$.subscribe( observer );

setTimeout( () => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('Completado timeout');
}, 3000);