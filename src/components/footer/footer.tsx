import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LogoSvg} from './../../images/logo_polyai_blanc.svg';
import './footer.scss';

const Footer: FunctionComponent = () => {
    const { t } = useTranslation();
    return (
            <div className="footer-wrapper">
                <div className="copyright">
                © 2020 POLYAI
                </div>

                <div>
                    <LogoSvg/>
                </div>

                <div className="social-media">
                    <a href="https://www.facebook.com/branchPolyAi/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="facebook-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/poly-ai/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="linkedin-icon" />
                    </a>
                </div>

                <div className="footer-newsletter">
                    <a href="http://eepurl.com/hc0eUD" target="_blank" rel="noopener noreferrer">
                        {t('Footer.newsletter')}
                    </a>
                </div>
            </div>

    );
};

export default Footer;
