let limit = 12;
let offset = 0;
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
let allPokemonsList;
let paginatedPokemon;
document.addEventListener("DOMContentLoaded", function() {
  const pokemonContainer = document.getElementById("pokemon-container");
  allPokemonsList = search();
  paginatedPokemon = paginate(allPokemonsList, offset);
  const searchBar = document.getElementById("search");

  render(paginatedPokemon, pokemonContainer);

  pokemonContainer.addEventListener("click", function (event) {
    if (event.target.localName) {
      flip(event.target.parentElement);
    }
  });

  nextButton.addEventListener("click", function (event) {
    if(offset + limit >= allPokemonsList.length) {
      return;
    }

    pokemonContainer.innerHTML = "";
    offset += limit;

    const paginatedPokemon = paginate(allPokemonsList, offset, offset + limit);
    render(paginatedPokemon, pokemonContainer);

    helper.changeButtonColors();
  });

  previous.addEventListener("click", function (event) {

    if(offset - limit < 0) {
      return;
    }

    const previousOffset = offset;
    pokemonContainer.innerHTML = "";
    offset -= limit;

    const paginatedPokemon = paginate(allPokemonsList, offset, previousOffset);
    render(paginatedPokemon, pokemonContainer);
    helper.changeButtonColors();
  });

  searchBar.addEventListener("keyup", function (event) {
    pokemonContainer.innerHTML = "";
    offset = 0;
    allPokemonsList = search(this.value);
    paginatedPokemon = paginate(allPokemonsList, offset);
    render(paginatedPokemon, pokemonContainer);
    helper.changeButtonColors();
  });
});
