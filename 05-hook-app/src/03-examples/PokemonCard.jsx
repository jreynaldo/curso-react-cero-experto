import React from 'react'

export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section style={{height:300}}>
        <h2 className="text-capitalize">#{id} - {name}</h2>
        <div className='m-2'>
            {
                sprites.map(sprite => (
                    <img key={sprite} src= {sprite} alt={name}/>
                ))
            }
        </div>

    </section>
  )
}
