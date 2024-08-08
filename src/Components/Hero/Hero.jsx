import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow_btn.png'
import play from '../../assets/play_icon.png'
import pause from '../../assets/pause_icon.png'
export const Hero = ({playstatus,setplaystatus,heroData,HeroCount,setherocount}) => {
  return (
    <div className='Hero'>
        <div className='hero-text'>
         <p>{heroData.text1}</p>
         <p>{heroData.text2}</p>
         <p></p>

        </div>
        <div className='hero-explore'>
          <p>Explore the features</p>
          <img src={arrow} alt="" />
        </div>

        <div className='hero-dot-play'>
          <ul className='hero-dots'>
           <li onClick={()=>setherocount(0)} className={HeroCount===0?"hero-dot orange":"hero-dot"}></li>
           <li onClick={()=>setherocount(1)} className={HeroCount===1?"hero-dot orange":"hero-dot"}></li>
           <li onClick={()=>setherocount(2)} className={HeroCount===2?"hero-dot orange":"hero-dot"}></li>

          </ul>
          <div className='hero-play'>
           <img onClick={()=>setplaystatus(!playstatus)} src={playstatus?pause:play} alt="" />
           <p>see the video</p>
          </div>
        </div>
    </div>
  )
}
