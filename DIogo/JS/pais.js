function getPais() {
  const nome = document.getElementById("pais-input").value.trim();
  if (!nome) {
    document.getElementById("pais-info").innerHTML = "Digite um nome de país.";
    return;
  }

  fetch(`https://restcountries.com/v3.1/name/${nome}`)
    .then(r => r.json())
    .then(data => {
      if (!data || data.status === 404) {
        document.getElementById("pais-info").innerHTML = "País não encontrado.";
        return;
      }

      const pais = data[0];
      document.getElementById("pais-info").innerHTML =
        "<strong>Nome:</strong> " + (pais.translations.por?.common || pais.name.common) + "<br>" +
        "<strong>Capital:</strong> " + pais.capital + "<br>" +
        "<strong>População:</strong> " + pais.population.toLocaleString("pt-BR") + "<br>" +
        "<img src='" + pais.flags.png + "' alt='Bandeira' width='150'>";
    })
    .catch(err => {
      document.getElementById("pais-info").innerHTML = "Erro: " + err;
    });
}
