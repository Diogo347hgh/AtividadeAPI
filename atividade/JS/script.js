async function buscarMeme() {

  const url = "https://api.imgflip.com/get_memes";

  try {

    const resposta = await fetch(url);
    const dados = await resposta.json();

    const memes = dados.data.memes;

    const random = Math.floor(Math.random() * memes.length);

    const meme = memes[random];

    document.getElementById("resultado").innerHTML = `
      <h2>${meme.name}</h2>
      <img src="${meme.url}">
    `;

  } catch (erro) {
    document.getElementById("resultado").innerHTML =
      "<p>Erro ao carregar memes 😢</p>";
  }
}