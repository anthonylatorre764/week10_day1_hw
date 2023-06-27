import { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon.tsx'
import './App.css'


const App = () => {
  
  const [pokemonName, setPokemonName] = useState('')

  useEffect(() => {
    console.log(pokemonName)
  }, [pokemonName])
  
  return (
    <>
      <div id='label_input'>
        <label htmlFor="">Pokemon Name:</label>
        <input type="text" onChange={(event) => {setPokemonName(event.target.value)}}/>
      </div>
      <Pokemon pokemonName={pokemonName}/>
    </>
  )
}

export default App