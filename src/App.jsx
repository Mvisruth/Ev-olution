import React, { useState } from 'react'
import { Background } from './Components/Background/Background'
import { Nav } from './Components/Navbar/Nav'
import { Hero } from './Components/Hero/Hero'

const App = () => {

  let heroData = [
    
      {text1:"Dive into",text2:"what you love"},      
      {text1:"Indulge",text2:"your passions"},      
      {text1:"Give in to",text2:"what you love"}      
 ]
//create useState
 const [heroCount,setHeroCount]=useState(0)
 const [playStatus,setPlayStatus]= useState(false)
  return (
    <div>
      {/* props being passed to the background component */}
      <Background playstatus={playStatus} HeroCount={heroCount}/>
      <Nav/>
      <Hero
      playstatus={playStatus}
      setplaystatus={setPlayStatus}
      heroData={heroData[heroCount]}
      HeroCount={heroCount}
      setherocount={setHeroCount}
      />
    </div>
  )
}

export default App