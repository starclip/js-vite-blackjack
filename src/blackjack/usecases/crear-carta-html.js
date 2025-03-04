/**
 * Retorna la carta html generada.
 * @param {String} carta 
 * @returns {HTMLElement} Retorna la carta en html generada.
 */
export const crearCartaHTML = ( carta ) => {

    if (!carta) 
        throw new Error("La carta es un argumento obligatorio");

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    
    return imgCarta;
}