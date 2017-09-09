let limit = 12;
let offset = 0;
document.addEventListener("DOMContentLoaded", function() {
  const pokemonContainer = document.getElementById("pokemon-container");
  const allPokemonsList = search();
  const paginatedPokemon = paginate(allPokemonsList, offset);
  const nextButton = document.getElementById("next");
  const previousButton = document.getElementById("previous");

  render(paginatedPokemon, pokemonContainer);

  pokemonContainer.addEventListener("click", function (event) {
    if (event.target.localName) {
      flip(event.target.parentElement);
    }
  });

  nextButton.addEventListener("click", function (event) {
    if(offset + limit > allPokemonsList.length) {
      return;
    }

    pokemonContainer.innerHTML = "";
    offset += limit;
    
    const paginatedPokemon = paginate(allPokemonsList, offset, offset + limit);
    render(paginatedPokemon, pokemonContainer);
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
  });
});
