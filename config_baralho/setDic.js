// baralho/config_baralho\dic.js

export default function setDic(deck) {
    console.log("Iniciando o mapeamento do baralho... {baralho/config_baralho\dic.js}");
    // Aqui você pode implementar a lógica de mapeamento do baralho
    let result = []
    deck.forEach((element, idx) => {
        let carta = element[0];
        let naipe = element[1];
        //console.log(`Carta: ${carta} = ${carta.charCodeAt(0)}, Naipe: ${naipe}`);
        result.push({ carta, naipe, idx });
    })
    // console.log("Mapeamento concluído.");
    console.log(`Total de cartas mapeadas: ${result.length}`);
    console.log("Detalhes das cartas mapeadas:", result);
    return result;
    // Retorna o resultado do mapeamento
}
setDic(["3♠", "Q♠", "3♦", "A♣", "A♦", "10♥", "2♣", "K♦"]); // Exemplo de uso