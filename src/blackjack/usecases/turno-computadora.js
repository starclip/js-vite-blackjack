import { pedirCarta, valorCarta } from "./";
import { crearCartaHTML } from "./crear-carta-html";

// turno de la computadora
/**
 * Realiza el turno de la computadora.
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Es el HTML de los puntos
 * @param {HTMLElement} divCartasComputadora Es el HTML del div de la computadora.
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos )
        throw new Error("Puntos mínimos son necesarios");

    if ( !puntosHTML )
        throw new Error("Argumento puntosHTML es necesario");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        let htmlCarta = crearCartaHTML( carta );
        divCartasComputadora.append(htmlCarta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
