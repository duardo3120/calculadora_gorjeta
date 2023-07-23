function calcularGorjeta() {
    const valorTotalElement = document.getElementById("valorTotal");
    const gorjetaElement = document.getElementById("porcentagemGorjeta");
    const resultadoElement = document.getElementById("resultadoGorjeta");

    const valorTotal = parseFloat(valorTotalElement.value);
    const gorjeta = parseFloat(gorjetaElement.value) / 100;

    if (isNaN(valorTotal) || valorTotal <= 0) {
        resultadoElement.textContent = "Valor total inválido. Digite um valor numérico maior que zero.";
    } else if (isNaN(gorjeta) || ![0.1, 0.2, 0.3].includes(gorjeta)) {
        resultadoElement.textContent = "Porcentagem de gorjeta inválida. Escolha entre 10%, 20% ou 30%.";
    } else {
        const valorGorjeta = valorTotal * gorjeta;
        resultadoElement.textContent = "Valor da gorjeta: " + valorGorjeta.toFixed(2);
    }
}