import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import './About.scss';
import {Card, CardProps} from './card/card';
import DATA from './card/card-data';

  const About: React.FC = () => {
    const { t } = useTranslation();

    return (

      <div className="about">
        <Row xs="1" s="1" md="2" lg="2">
          <Col className="about-description-container">
            <p className="about-text">
              {t('About.about')}
            </p>
          </Col>
          <Col>
            <div className="brain-image" />
          </Col>
          
        </Row>
        <Row xs="1" s="1" md="2" lg="2">
        {
          DATA.map( (cardData: CardProps, index: number) => {
              return (
                <Col key={index}>
                  <Card text={cardData.text} iconPath={cardData.iconPath}/>
                </Col>
              );
            })
          }
        </Row>

      </div>
    );
  };

export default About;
