async function dataPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        return {
          name: pokemonData.name,
          abilities: pokemonData.abilities.map(
            (ability) => ability.ability.name
          ),
        };
      })
    );

    console.log(pokemonDetails);
    return pokemonDetails;
  } catch (error) {
    console.error("Gagal Mengambil Data Pokemon:", error);
  }
}

dataPokemon();
