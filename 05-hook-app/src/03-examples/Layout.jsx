import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { PokemonCard } from "./PokemonCard"

export const Layout = () => {
    const { counter, increment, decrement } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Informacioón de Pokémon</h1>
            <hr />

            {
                isLoading 
                ? <p>Cargando ......... </p> 
                : <PokemonCard 
                id={data.id} 
                name={data.name} 
                sprites={[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny
                ]}
                />
            }


            <button onClick={() => decrement()} className="btn btn-primary m-2">
                Anteriores
            </button>

            <button onClick={() => increment()} className="btn btn-primary m-2">
                Siguiente
            </button>
        </>
    )
}
