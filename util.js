// baralho/util.js
import getNaipes from "./config_baralho/naipes.js";
import getCartas from "./config_baralho/cartas.js";

const valores = getCartas();
const naipes = getNaipes();

export default function ordenarDeck(deck) {
    deck.forEach(element => {
        let carta = element[0]
        let naipe = element[1]
        console.log(`carta ${carta}`)//         naipe ${naipe} = ${charCodeAt(carta)}    `)
        console.log(`naipe ${naipe}`)


    });


    return deck;
}
