// baralho/config_baralho\dic.js
import getCartas from "./cartas.js";
import getNaipes from "./naipes.js";

export default function setDic(deck) {
    const valores = getCartas();
    const naipes = getNaipes();

    const result = deck.map(carta => {
        const naipe = carta.slice(-1);
        const valor = carta.slice(0, -1);
        const valorIdx = valores.indexOf(valor);
        const naipeIdx = naipes.indexOf(naipe);

        return { carta, valor, naipe, valorIdx, naipeIdx };
    });

    return result;
}

console.log(setDic(["3♠", "Q♠", "3♦", "A♣", "A♦", "10♥", "2♣", "K♦"]));