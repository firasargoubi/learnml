import ParticlesBg from 'particles-bg';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Col, Row } from 'reactstrap';
import './landing-hero-page.scss';

const LandingHeroPage: React.FC = () => {
  const { t } = useTranslation();
  const [showParticles, setShowParticles] = useState(false);
  const [ratio, setRatio] = useState(1);

  const handleResize = () => {
    setShowParticles(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showParticles) {
      if (window.innerWidth < 300) {
        setRatio(30);
      } else if (window.innerWidth < 400) {
        setRatio(60);
      } else {
        setRatio(100);
      }
    }
  }, [showParticles]);

  return (
    <React.Fragment>
      <div
        className={
          showParticles
            ? 'landing-hero-page'
            : 'landing-hero-page bg-color-hack'
        }
      >
        <Row sm='1' md='2' className='content'>
          <Col
            sm={{ order: 'last' }}
            md={{ order: 'first' }}
            className='text-container'
          >
            <h1 className='title'>
              {t('LandingHeroPage.firstTitle')} :{' '}
              {t('LandingHeroPage.secondTitle')}
            </h1>
            <p className='subtitle'>{t('LandingHeroPage.subtitle')}</p>
            <p className='subtitle'> {t('LandingHeroPage.when')} </p>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSd5kurd7qe4_XhSdkrvRPuor5J2RiE1ERFX3MwDV9pTpeTpQg/viewform?usp=sf_link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='register'>
                {' '}
                {t('LandingHeroPage.register')}{' '}
              </button>
            </a>
          </Col>
          <Col
            sm={{ order: 'first' }}
            md={{ order: 'last' }}
            className='neural-net-image'
          />
        </Row>
        <div className='mobile-content'>
          <h1 className='title'>{t('LandingHeroPage.firstTitle')}</h1>
          <h1 className='title'>{t('LandingHeroPage.secondTitle')}</h1>
          <p className='subtitle'>{t('LandingHeroPage.subtitle')}</p>
          <p className='subtitle'> {t('LandingHeroPage.when')} </p>
          <button className='register'>
            <a
              href='https://docs.google.com/forms/d/1-8aDgNvrfHa7oHooxRSXH2axk-m9wxtXxBG4XXXpbFk/prefill'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              {t('LandingHeroPage.register')}{' '}
            </a>
          </button>
        </div>
        <Link
          className='a scroll-down'
          to='about'
          smooth={true}
          duration={1000}
        />
      </div>

      {showParticles && (
        <ParticlesBg
          color='#04cfda'
          num={ratio}
          type='cobweb'
          bg={showParticles}
        />
      )}
    </React.Fragment>
  );
};

export default LandingHeroPage;
