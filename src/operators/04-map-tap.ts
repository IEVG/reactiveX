import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo orci, maximus in libero eget, mattis hendrerit mauris. Praesent consectetur non magna dictum eleifend. Pellentesque eu ante est. Quisque non viverra nisl. Cras eget fermentum quam. In rhoncus pharetra mi et consequat. Nulla eget porta eros, eget venenatis risus. Etiam tempus, nisi vel sollicitudin dictum, eros enim commodo urna, a aliquam metus metus in lacus. Praesent rhoncus id felis et luctus. Vestibulum a suscipit lacus. Proin mi elit, dignissim vitae magna vel, pellentesque mattis augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br><br>
Suspendisse feugiat metus ac mauris consectetur consequat. Nam ac ligula a massa euismod rhoncus sit amet a massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nibh non lacus posuere molestie. Praesent accumsan bibendum metus, sed interdum est malesuada sit amet. Curabitur aliquet vulputate erat sit amet rutrum. Duis neque ante, aliquam eu scelerisque a, bibendum ac lacus. Integer aliquet ante purus, nec iaculis quam imperdiet sit amet. Praesent euismod arcu in purus pretium, at ullamcorper diam malesuada. Mauris id metus porta, lobortis felis vel, tempus eros. Mauris blandit laoreet imperdiet. Phasellus ac ipsum euismod, ultrices mi nec, blandit mi.
<br><br>
Nulla faucibus non metus luctus sodales. Suspendisse ac mauris placerat, tempor lacus nec, efficitur magna. Donec vulputate tempus laoreet. Proin finibus odio diam, a tempor lectus maximus id. Duis aliquet pellentesque congue. Donec fringilla sagittis urna suscipit vestibulum. Mauris massa leo, consectetur ac posuere et, laoreet ac nisl. Quisque id nulla libero. Donec ac lectus finibus, varius nibh sed, pharetra nisl.
<br><br>
Vivamus quis erat turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean magna arcu, vestibulum accumsan nibh vel, accumsan auctor elit. Nulla sodales lacinia felis. Phasellus hendrerit arcu cursus imperdiet imperdiet. Proin a congue turpis, quis tincidunt odio. In eu cursus sem. Fusce ut leo risus. Vivamus pellentesque ultrices lacus ac iaculis. Pellentesque sit amet feugiat tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec scelerisque mattis purus a auctor. Suspendisse laoreet erat commodo arcu convallis egestas. Sed ligula nisl, faucibus eu massa sit amet, malesuada ultrices magna.
<br><br>
Aliquam a urna ac nibh eleifend malesuada. Quisque vel nunc quis magna pellentesque placerat. Maecenas vitae libero eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies lorem at lorem eleifend facilisis. Sed id eros massa. In eu mi lectus.

`;

const body = document.querySelector('body');
body.append( texto );

//creamos el progresBar
const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// function que haga el calculo
const calcularPorcentajeScroll = ( event ) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;


    return ( scrollTop / ( scrollHeight - clientHeight)) * 100;
    
};


// Streams
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log );


const progress$ = scroll$.pipe(

    // map( event => calcularPorcentajeScroll( event ))
    map( calcularPorcentajeScroll ),
    tap( console.log )

);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});



