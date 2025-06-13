import React from 'react'
import  {HeroSections}  from './HeroSections'
import HowToWorks from './Howtowork';
import GamePlayRates from './GamePlayRate';
import OurOpenGames from './OuropenGames';
import ContactForm from './FormData';
import JBMMatkaPromo from './JBMMatkaPromo';
import TopWinner from './TopWinner';



export const Home = () => {
  return (
    <div>
        <HeroSections/>
        <HowToWorks/>
        <GamePlayRates/>
        <OurOpenGames/>
        <TopWinner/>
        <JBMMatkaPromo/>
        <ContactForm/>
        
    </div>
  )
}
