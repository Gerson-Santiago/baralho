// baralho/config_baralho\dic.js

export default function setDic(deck) {
    console.log("Iniciando o mapeamento do baralho...");
    // Aqui você pode implementar a lógica de mapeamento do baralho
    let result = []
    deck.forEach(element => {
        let carta = element[0];
        let naipe = element[1];
        result.push({ carta, naipe });
    })
    console.log("Mapeamento concluído.");
    console.log(`Total de cartas mapeadas: ${result.length}`);
    console.log("Detalhes das cartas mapeadas:", result);
    return result;
    // Retorna o resultado do mapeamento
}
setDic(["3♠", "Q♠", "3♦", "A♣", "A♦", "10♥", "2♣", "K♦"]); // Exemplo de uso