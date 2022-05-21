import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import ContainerHeading from '../common/container-heading';
import './about.scss';
import Card from './card/card';
import { CardData, DATA } from './card/card-data';

  const About: React.FC = () => {
    const { t } = useTranslation();

    return (

      <div className="about">
        <ContainerHeading title={t('About.title')}/>
        <Row xs="1" s="1" md="2" lg="2">
          <Col className="about-description-container">
            <p className="about-text">
              {t('About.about')}
            </p>
            <p className='about-text'>
             {t('About.selma')}
             </p>
          </Col>
          <Col xs="0">
            <div className="brain-image" />
          </Col>
          
        </Row>
        <Row xs="1" s="1" md="2" lg="2">
        {
          DATA.map( (cardData: CardData, index: number) => {
              return (
                <Col key={index}>
                  <Card text={cardData.text} iconPath={cardData.iconPath} index={index}/>
                </Col>
              );
            })
          }
        </Row>

      </div>
    );
  };

export default About;
