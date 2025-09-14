import {
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { ReactComponent as LogoSvg } from './../../images/logo_polyai_alternate.svg';
import './footer.scss';

const Footer: FunctionComponent = () => {
  return (
    <div className="footer-wrapper">
      <div className="copyright">© {new Date().getFullYear()} POLYAI</div>

      <div>
        <a href="https://polyai.ca/" target="_blank" rel="noopener noreferrer">
          <LogoSvg />
        </a>
      </div>

      <div className="social-media">
        <a
          href="https://www.facebook.com/branchPolyAi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="lg"
            className="facebook-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/poly-ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            className="linkedin-icon"
          />
        </a>
      </div>

    </div>
  );
};

export default Footer;
