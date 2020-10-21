import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row } from 'reactstrap';
import ContainerHeading from '../common/container-heading';
import LOGO_TEMPLATE from './img/your_logo_here.png';
import { BRONZE, GOLD, PLATINUM, SILVER, Sponsor } from './sponsors-data';
import './sponsors.scss';

const IMG_ALT_TXT = 'Could not load image';

const generateLogos = (xs: string, md: string, array: Sponsor[]) => {
    return (
        <Row xs={xs} md={md} className="parters-center">
                {
                    array.map( (sponsor: Sponsor, index: number) => {
                        return (
                            <Col key={index} className="center-logos">
                                {sponsor.website ?
                                    <a href="https://www.joinglimpse.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={sponsor.imgPath} alt={sponsor.name} width="100%"/>
                                    </a>
                                    :
                                    <img src={sponsor.imgPath} alt={sponsor.name}/>
                                }
                            </Col>
                        );
                    })
                }
        </Row>
    );
};

const Partners: FunctionComponent = () => {
    const { t } = useTranslation();
    
    return (
        <div className="partners-section" id="partners">
            <ContainerHeading title={t('Partners.title')}/>
            <div className="parters-center">
                <div className="partners-logos-container">
                    {generateLogos('1', '2', PLATINUM)}
                    {generateLogos('2', '3', GOLD)}
                    {generateLogos('3', '4', SILVER)}
                    {generateLogos('4', '5', BRONZE)}
                </div>
            </div>
            <div className="parters-center">
                <Button className="sponsor-us-btn"> 
                    <a href="mailto:comitepolyai@gmail.com" target="_blank">  {t('Partners.sponsor')}  </a>
                </Button>
            </div>
        </div>
    );
};

export default Partners;
