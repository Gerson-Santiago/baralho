// baralho/util.js
import getNaipes from "./config_baralho/naipes.js";
import getCartas from "./config_baralho/cartas.js";
import setDic from "./config_baralho/setDic.js";

const valores = getCartas(); // ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

valores.forEach(element => {
    // console.log(`Cartas = ${element.charCodeAt(0)}`); // Exemplo de uso do charCodeAt
});

const naipes = getNaipes(); // ["♣", "♦", "♥", "♠"]

naipes.forEach(element => {
    // console.log(`Naipe ${element} = ${element.charCodeAt(0)}`); // Exemplo de uso do charCodeAt
});

export default function ordenarDeck(deck) {
    // Mapear
    let mapasCartas = setDic(deck);
    mapasCartas.forEach(element => {
        console.log(`Ordenando cartas: ${element.idx}`);
    });

    return deck;
}
