function getClima() {
  const apiKey = "da9f47f2c29bb0452375aa8997675582";
  const cidade = document.getElementById("cidade-input").value.trim();
  const info = document.getElementById("clima-info");

  if (!cidade) {
    info.innerHTML = "Digite o nome de uma cidade.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
    .then(r => r.json())
    .then(weather => {
      info.innerHTML = weather.cod !== 200
        ? "Erro: " + weather.message
        : `Cidade: ${weather.name}<br>
           Temperatura: ${weather.main.temp} °C<br>
           Condição: ${weather.weather[0].description}`;
    })
    .catch(err => info.innerHTML = "Erro ao buscar clima: " + err);
}
