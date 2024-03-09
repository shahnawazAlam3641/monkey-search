import { useEffect, useState } from 'react'
import { pokeUrl, dragonBAllUrl } from './constants';
import  Nav from "./components/Nav"
import Search from "./components/Search"

import './App.css'

function App() {
  
  const [food, setFood] = useState(null)
  const [pokemon, setPokemon] = useState(null)
  const [dragonBall, setDragonBall] = useState(null)


  async function rest(){
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await response.json();
    console.log(data)
    setFood(data)
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
    rest()
    fetchPokemonList()
    fetchDragonBallList()
  },[])


  return (
    <>
      <div className='bg-gradient-to-r from-[#9932cc] via-[#9932cc] to-[#a642d8]'>
        <Nav/>
        <Search/>


   
        <div className='bg-red-400'>{JSON.stringify(food).substring(0,1000)}</div>
      <div className='bg-green-400'>{JSON.stringify(pokemon).substring(0,1000)}</div>
      <div className='bg-gray-400'>{JSON.stringify(dragonBall).substring(0,1000)}</div>
      <img src='https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044513/ux3n5u0tjdvysjao4w8s.webp'/>

      </div>
    </>
  )
}

export default App
