function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(dog => {
      document.getElementById("dog-img").innerHTML =
        "<img src='" + dog.message + "' width='200'>";
    });
}
