/**
 * Pide una carta del deck.
 * @param {array<String>} deck Lista de cartas
 * @returns {String} Carta
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
};