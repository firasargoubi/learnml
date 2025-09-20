import React, { FunctionComponent } from 'react';
import About from '../about/about';
import { QUESTION_ANSWERS } from '../faq/data';
import Faq from '../faq/faq';
import Footer from '../footer/footer';
import LandingHeroPage from '../landing-hero-page/landing-hero-page';
import Resources from '../resources/resources';
import Schedule from '../schedule/schedule';
import { EVENTS } from '../schedule/schedule-data';
import Speakers from '../speakers/speakers';
import Partners from '../sponsors/sponsors';
import StickyNavBar from '../sticky-navbar/sticky-navbar';
import './app.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <StickyNavBar />
    <LandingHeroPage />
    <About />

    <Schedule events={EVENTS} />
    <Speakers />
    <Resources />
    <Faq questionAnswers={QUESTION_ANSWERS} />
    {/* TODO: Re-enable sponsors section once content is ready */}
    <Partners />

    <Footer />
  </div>
);

export default App;
