import { useEffect, useState } from "react";
import { getPokemonByUrl, joinPokemonsTypes } from "../../services/pokemons";
import StatList from "./StatList";
import {
  bgStylePokemonType,
  borderStyledPokemonByType,
} from "../../shared/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
      to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center capitalize border-[5px] ${
        borderStyledPokemonByType[pokemonInfo?.types[0]]
      } rounded-md`}
    >
      <header
        className={`h-[80px] relative mb-8 ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 h-[60px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={pokemonInfo?.image}
            alt=""
          />
        </div>
      </header>
      <section>
        <h3 className="text-lg font-bold">{pokemonInfo?.name}</h3>
        <h4>{joinPokemonsTypes(pokemonInfo?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokemonCard;
