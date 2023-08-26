import { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";
import StatList from "./StatList";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const joinPokemonsTypes = (types = []) => {
    return types.slice(0, 2).join(" / ");
  };

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="text-center">
      <header>
        <div>
          <img src={pokemonInfo?.image} alt="" />
        </div>
      </header>
      <section>
        <h3>{pokemonInfo?.name}</h3>
        <h4>{joinPokemonsTypes(pokemonInfo?.types)}</h4>
        <h5>Types</h5>
        <hr />
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </article>
  );
};
export default PokemonCard;
