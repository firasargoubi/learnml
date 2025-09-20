import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ContainerHeading from '../common/container-heading';
import { SPONSORS } from './sponsors-data';
import './sponsors.scss';

const Partners: FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className="partners-section" id="partners">
            <ContainerHeading title={t('Partners.title')} />
            <div className="sponsors-wrapper">
                <div className="sponsors-grid">
                    {SPONSORS.map((sponsor) => (
                        <div key={sponsor.name} className="sponsor-card">
                            {sponsor.website ? (
                                <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsor.imgPath} alt={sponsor.name} loading="lazy" />
                                </a>
                            ) : (
                                <img src={sponsor.imgPath} alt={sponsor.name} loading="lazy" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
