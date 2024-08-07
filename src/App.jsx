import React, { useState } from 'react'
import { Background } from './Components/Background/Background'

const App = () => {

  let heroData = [
    
      {text1:"Dive into",text2:"what you love"},      
      {text1:"Indulge",text2:"your passions"},      
      {text1:"Give in to",text2:"what you love"}      
 ]

 const [heroCount,setHeroCount]=useState(0)
 const [playStatus,setPlayStatus]= useState(true)
  return (
    <div>
      <Background playstatus={playStatus} HeroCount={heroCount}/>
    </div>
  )
}

export default App