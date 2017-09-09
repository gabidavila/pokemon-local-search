let limit = 12;
let offset = 0;
document.addEventListener("DOMContentLoaded", function() {
  const pokemonContainer = document.getElementById("pokemon-container");
  const allPokemonsList = search();
  const paginatedPokemon = paginate(allPokemonsList, offset);
  render(paginatedPokemon, pokemonContainer);

  pokemonContainer.addEventListener("click", function (event) {
    if (event.target.localName) {
      flip(event.target.parentElement);
    }
  });
  // console.log(paginatedPokemon);
});
