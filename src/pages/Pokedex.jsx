import ErrorMessage from "../components/Error/ErrorMessage";
import Loader from "../components/loader/Loader";
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
    isError,
    isLoading,
  } = usePokedex();

  return (
    <main>
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && <ErrorMessage />}
      {!isError && (
        <>
          <section className="grid gap-2 p-2 px-4 font-inter max-w-[1024px] mx-auto ">
            <p className=" text-red-500 font-fira-Code font-bold text-center grid">
              <span className="text-[25px]">Welcome</span>
              <span className="uppercase"> {name} </span>
            </p>
            <p className="text-center font-fira-Code text-[15px]">
              Here you can find your favorite pokemon
            </p>
            <form className="grid gap-4 justify-center sm:justify-between p-4 sm:flex sm:gap-4 font-fira-Code ">
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
                className="shadow-sm p-2 focus:outline-none rounded-md sm:w-[200px] font-fira-Code"
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
        </>
      )}
    </main>
  );
};
export default Pokedex;
