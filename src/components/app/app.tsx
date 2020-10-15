import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import About from '../About/About';
import {QUESTION_ANSWERS} from '../faq/data';
import Faq from '../faq/faq';
import LandingHeroPage from '../LandingHeroPage/LandingHeroPage';
import Partners from '../partners/partners';
import Schedule from '../schedule/schedule';
import { EVENTS } from '../schedule/schedule-data';
import './app.scss';

import { Link } from 'react-scroll';
import Footer from '../footer/footer';

const App: FunctionComponent = () => {
  const { t } = useTranslation();
  const DURATION = 1000;
  return (
    <div className="App">
    <nav className="nav-container">
      <div className="nav-row">
          <ul className="main-nav">
            <li><Link className="a" to="landing" smooth={true} duration={DURATION}>{t('App.home')}</Link></li>
            <li><Link className="a" to="about" smooth={true} duration={DURATION}>{t('App.about')}</Link></li>
            <li><Link className="a" to="partners" smooth={true} duration={DURATION}>{t('App.sponsors')}</Link></li>
            <li><Link className="a" to="" smooth={true} duration={DURATION}>{t('App.speakers')}</Link></li>
            <li><Link className="a" to="faq" smooth={true} duration={DURATION}>{t('App.faq')}</Link></li>
            <li><Link className="a" to="schedule" smooth={true} duration={DURATION}>{t('App.schedule')}</Link></li>
            
            </ul>   
         </div>
    </nav>
    <LandingHeroPage/>
    <About/>
    <Faq questionAnswers={QUESTION_ANSWERS}/>
    <Schedule events={EVENTS}/>
    <Partners/>
    <Footer />
    </div>
  );
};

export default App;
