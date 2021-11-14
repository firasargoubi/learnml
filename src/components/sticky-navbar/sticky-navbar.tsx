import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import scroll, { Link } from 'react-scroll';
import logo from '../../images/logo_polyai.png';
import './sticky-navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18n from '../../i18n';

const StickyNavBar: FunctionComponent = () => {
  const { t } = useTranslation();
  const DURATION = 1000;
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    if (i18n.language === 'fr') {
        i18n.changeLanguage('en');
    } else {
        i18n.changeLanguage('fr');
    }
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const [showNav, setShowNav] = useState(false);

  // code was inspired by this tutorial [31 to 40 + 44]: https://dev.to/caicindy87/change-navbar-style-on-scroll-using-react-and-css-43pc 
  const handleScroll = () => setScrolled(window.scrollY > 20);
    
  useEffect( () => {

    window.addEventListener('scroll', handleScroll);
    // unmount component "clean up" function
    return () => window.removeEventListener('scroll', handleScroll);

  });

  return (
    <div className="App">
      <nav className={scrolled ? 'nav-container scroll' : 'nav-container'}>
        <div className="nav-row">
            <img className="nav-logo" src={logo} alt="logo polyai"/>     
            <ul className={showNav ? 'main-nav show' : 'main-nav'}>
              <li>
                <Link 
                  className="a" 
                  to="" 
                  onClick={scroll.animateScroll.scrollToTop} 
                  smooth={true} 
                  duration={DURATION}
                    >{t('App.home')} 
                </Link>
              </li>
              <li><Link className="a" to="about" smooth={true} duration={DURATION}>{t('App.about')}</Link></li>
              {/*<li><Link className="a" to="speakers" smooth={true} duration={DURATION}>{t('App.speakers')}</Link></li>*/}
              <li><Link className="a" to="faq" smooth={true} duration={DURATION}>{t('App.faq')}</Link></li>
              {/*<li><Link className="a" to="schedule" smooth={true} duration={DURATION}>{t('App.schedule')}</Link></li>*/}
              <li><Link className="a" to="partners" smooth={true} duration={DURATION}>{t('App.sponsors')}</Link></li>
              <li><Link className="a" to="" smooth={true} onClick={toggleLanguage}>{i18n.language === 'fr' ? 'EN' : 'FR'}</Link></li>
            </ul>  
            <FontAwesomeIcon onClick={toggleNav} className="mobile-nav-icon"  icon={showNav ? faTimes: faBars} />  
        </div>
      </nav>
    </div>
  );
};

export default StickyNavBar;
