let cotacao = 0;

// Buscar cotação da API :)
async function getCotacao() {
  const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
  const data = await response.json();
  cotacao = parseFloat(data.USDBRL.bid);
  document.getElementById("cotacao").innerText = "Cotação atual do dólar: R$ " + cotacao;
}

// Converter Reaiss → Dolares 
function converterRealParaDolar() {
  let valorReal = parseFloat(document.getElementById("valorReal").value);
  if (!isNaN(valorReal)) {
    let emDolar = valorReal / cotacao;
    document.getElementById("resultadoDolar").innerText = `R$${valorReal} = US$${emDolar.toFixed(2)}`;
  }
}

// Converter Dolarees → Reais :)
function converterDolarParaReal() {
  let valorDolar = parseFloat(document.getElementById("valorDolar").value);
  if (!isNaN(valorDolar)) {
    let emReal = valorDolar * cotacao;
    document.getElementById("resultadoReal").innerText = `US$${valorDolar} = R$${emReal.toFixed(2)}`;
  }
}

// Carregar cotação ao abrir a página :)
getCotacao();
