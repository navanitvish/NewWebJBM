import React from 'react';
import { HeroSections } from './HeroSections';
import HowToWorks from './Howtowork';
import GamePlayRates from './GamePlayRate';
import OurOpenGames from './OuropenGames';
import ContactForm from './FormData';
import JBMMatkaPromo from './JBMMatkaPromo';
import TopWinner from './TopWinner';

const SectionWrapper = ({ id, children }) => (
  <div id={id} className="scroll-mt-20">
    {children}
  </div>
);

const Home = () => {
  return (
    <div>
      <SectionWrapper id="home"><HeroSections /></SectionWrapper>
      <SectionWrapper id="how"><HowToWorks /></SectionWrapper>
      <SectionWrapper id="rate"><GamePlayRates /></SectionWrapper>
      <SectionWrapper id="games"><OurOpenGames /></SectionWrapper>
      <SectionWrapper id="winners"><TopWinner /></SectionWrapper>
      <SectionWrapper id="promo"><JBMMatkaPromo /></SectionWrapper>
      <SectionWrapper id="contact"><ContactForm /></SectionWrapper>
    </div>
  );
};

export default Home;
