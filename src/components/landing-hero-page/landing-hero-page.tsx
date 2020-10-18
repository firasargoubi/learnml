import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Col, Row } from 'reactstrap';
import './landing-hero-page.scss';

const LandingHeroPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="landing-hero-page">
      <Row sm="1" md="2" className="content">
        <Col sm={{ order: 'last' }} md={{ order: 'first' }} className="text-container">
            <h1 className="title">{t('LandingHeroPage.title')}</h1>
            <p className="subtitle">{t('LandingHeroPage.subtitle')}</p>
            <p className="subtitle"> {t('LandingHeroPage.when')} </p>
            <button className="register">
              <a href="#" target="_blank" rel="noopener noreferrer">  {t('LandingHeroPage.register')}  </a>
            </button>
        </Col>
        <Col sm={{ order: 'first' }} md={{ order: 'last' }} className="neural-net-image"/>
      </Row>
      <div className="mobile-content">
        <div className="neural-net-image"/>
        <h1 className="title">{t('LandingHeroPage.title')}</h1>
        <p className="subtitle">{t('LandingHeroPage.subtitle')}</p>
        <p className="subtitle"> {t('LandingHeroPage.when')} </p>
        <button className="register">
          <a href="#" target="_blank" rel="noopener noreferrer">  {t('LandingHeroPage.register')}  </a>
        </button>
      </div>
      <Link className="a scroll-down" to="about" smooth={true} duration={1000} />
    </div>
    
  );
};

export default LandingHeroPage;
