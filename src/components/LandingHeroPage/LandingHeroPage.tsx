import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import './LandingHeroPage.scss';

const LandingHeroPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="landing-hero-page">
      <Row className="content">
        <Col className="text-container">
            <h1 className="title">{t('LandingHeroPage.title')}</h1>
            <p className="subtitle">{t('LandingHeroPage.subtitle')}</p>
            <button className="register"> {t('LandingHeroPage.register')} </button>
        </Col>
        <Col className="neural-net-image"/>
      </Row>
    </div>
  );
};

export default LandingHeroPage;
