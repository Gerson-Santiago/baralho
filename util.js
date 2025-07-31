// baralho/util.js
import getNaipes from "./config_baralho/naipes.js";
import getCartas from "./config_baralho/cartas.js";
import setDict from "./config_baralho/dic.js";

const valores = getCartas(); // ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const naipes = getNaipes(); // ["♣", "♦", "♥", "♠"]

export default function ordenarDeck(deck) {
    // Mapear
    let mapasCartas = setDict(deck);
    valores.forEach(element => {
        console.log(`Ordenando naipe: ${element}`);
    });

    return deck;
}
