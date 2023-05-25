var tag = document.getElementById('tag');
var bouton = document.getElementById('bouton');
var page = document.getElementById('page');
// option de l'api tmdb
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGUzN2Y1YTU4ZTQ3ZGIwMGY4NTkyODU3OWY5MDBmOCIsInN1YiI6IjY0NmUxNjEzMzNhMzc2MDE1OGRjMDRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10TTdpPPusGwjBn81duAdGN3P84qd250flrJJOeCyEs',
  },
};
// fonction qui permet de clic quand on appuie sur entrée
function toucheEntree(event) {
  if (event.keyCode === 13) {
    document.getElementById('bouton').click();
  }
}
// fin fonction
bouton.addEventListener('click', function () {
  if (tag.value == '') {
    alert("vous n'avez rien écrit");
  } else if (tag != '') {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${tag.value}&include_adult=false&language=fr-FR&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        page.innerHTML = `${data.results[0].title}`;
        // generer les affiches et infos
        // generer les affiches et infos
        // generer les affiches et infos
      })
      .catch((err) => console.error(err));
  }
});
