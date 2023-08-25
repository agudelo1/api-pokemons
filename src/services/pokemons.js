import axios from "axios";

export const getAllPokemons = async () => {
  const URL_BASE = "https://pokeapi.co/api/v2/pokemon?limit=20";
  const { data } = await axios.get(URL_BASE);
  return data.results;
};

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  return data;
};
