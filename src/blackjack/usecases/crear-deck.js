import _ from 'underscore';

/**
 * Crea un nuevo deck de cartas
 * @param {array<String>} tipos Ejemplo: ['C','D','H','S']
 * @param {array<String>} especiales Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} Retorna un deck de cartas
 */
export const crearDeck = (tipos, especiales) => {

    if (!tipos || tipos.length === 0)
        throw new Error('Tipos es obligatorio como un arreglo de string');

    if (!especiales || especiales.length === 0)
        throw new Error('Especiales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
};

export default crearDeck;