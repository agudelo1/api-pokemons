import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";

const Pokedex = () => {
  const {
    name,
    pokemonName,
    setPokemonType,
    pokemonType,
    handleChange,
    setPokemonName,
    pokemonsByName,
  } = usePokedex();

  return (
    <main className="">
      <section className="grid gap-2 p-2 ">
        <p className=" text-red-500 font-bold text-center">
          Welcome
          <span className="uppercase"> {name} </span>
        </p>
        <p className="text-center">Here you can find your favorite pokemon</p>
        <form className="grid gap-4 justify-center p-4 sm:flex sm:gap-4 ]">
          <div>
            <input
              className="shadow-md p-2 focus:outline-none sm:w-[300px]"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              type="text"
              placeholder="Search pokemon ..."
            />
          </div>
          <select
            className="shadow-sm p-2 focus:outline-none rounded-md sm:w-[200px] "
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
          >
            <option value="">All pokemons</option>
            <option value="grass">Grass</option>
            <option value="rock">Rock</option>
            <option value="fire">Fire</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
            <option value="shadow">Shadow</option>
          </select>
        </form>
      </section>
      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};
export default Pokedex;
