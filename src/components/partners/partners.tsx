import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ContainerHeading from '../common/container-heading';
import IVADO_LOGO from './img/ivado_logo.svg';
import GIRO_LOGO from './img/logo_giro.png';
import POLYMTL_LOGO from './img/Polytechnique_logo.png';
import LOGO_TEMPLATE from './img/your_logo_here.png';
import './partners.scss';

const IMG_ALT_TXT = 'Could not load image';

const Partners: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="section-partenaires" id="partners">
            <ContainerHeading title={t('Partners.title')}/>
            <hr className="some-bullshit" />

            <div className="home-partners-wrapper">

                    <img
                        className="home-partners-image"
                        src={IVADO_LOGO}
                        alt={IMG_ALT_TXT}
                    />

                    <img
                        className="home-partners-image"
                        src={GIRO_LOGO}
                        alt={IMG_ALT_TXT}
                    />

                    <img
                        className="home-partners-image"
                        src={POLYMTL_LOGO}
                        alt={IMG_ALT_TXT}
                    />
                    <img
                        className="home-partners-image"
                        src={LOGO_TEMPLATE}
                        alt={IMG_ALT_TXT}
                    />
            </div>
        </div>
    );
};

export default Partners;
