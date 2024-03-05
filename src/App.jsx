import { useEffect, useState } from 'react'
import { marvelUrl, pokeUrl, dragonBAllUrl } from './constants';


import './App.css'

function App() {
  const [marvel, setMarvel] = useState(null)
  const [pokemon, setPokemon] = useState(null)
  const [dragonBall, setDragonBall] = useState(null)



  async function fetchHeroList(){
    const response = await fetch(marvelUrl)
    const data = await response.json();
    console.log(data)
    setMarvel(data)
  }

  async function fetchPokemonList(){
    const response = await fetch(pokeUrl)
    const data = await response.json();
    console.log(data)
    setPokemon(data)
  }

  async function fetchDragonBallList(){
    const response = await fetch(dragonBAllUrl)
    const data = await response.json();
    console.log(data)
    setDragonBall(data)
  }

  useEffect(()=>{
    fetchHeroList()
    fetchPokemonList()
    fetchDragonBallList()
  },[])


  return (
    <>

   
      <div className='bg-yellow-400'>{JSON.stringify(marvel).substring(0,1000)}</div>
      <div className='bg-green-400'>{JSON.stringify(pokemon).substring(0,1000)}</div>
      <div className='bg-gray-400'>{JSON.stringify(dragonBall).substring(0,1000)}</div>

    </>
  )
}

export default App
