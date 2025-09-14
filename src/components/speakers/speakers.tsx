/* tslint:disable:ordered-imports */
import ContainerHeading from '../common/container-heading';
import './speakers.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Speaker {
  firstName: string;
  lastName: string;
  roleKey: string;
  domainKey: string;
  imgSrc?: string;
}

const speakers: Speaker[] = [
  { firstName: 'Sara', lastName: 'Bedouch', roleKey: 'Speakers.sara.role', domainKey: 'Speakers.sara.domain' },
  { firstName: 'Lahcen', lastName: 'Fatah', roleKey: 'Speakers.lahcen.role', domainKey: 'Speakers.lahcen.domain' },
  { firstName: 'Aziz', lastName: 'Diop', roleKey: 'Speakers.aziz.role', domainKey: 'Speakers.aziz.domain' },
  { firstName: 'Omar', lastName: 'Abdul Wahab', roleKey: 'Speakers.omar.role', domainKey: 'Speakers.omar.domain' },
  { firstName: 'Véronique', lastName: 'Tremblay', roleKey: 'Speakers.veronique.role', domainKey: 'Speakers.veronique.domain' },
  { firstName: 'Ranwa', lastName: 'Al-Mallah', roleKey: 'Speakers.ranwa.role', domainKey: 'Speakers.ranwa.domain' },
];

const Speakers: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="speakers" className="speakers">
      <ContainerHeading title={t('Speakers.title')} />
      <Slider {...settings}>
        {speakers.map((s, i) => {
          const role = t(s.roleKey);
          const domain = t(s.domainKey);
          const info = [role, domain].filter((txt) => txt && !txt.startsWith('Speakers.'));
          return (
            <div key={i} className="speaker-card">
              {s.imgSrc && <img src={s.imgSrc} alt={`${s.firstName} ${s.lastName}`} />}
              <div className="speaker-name">{s.firstName} {s.lastName}</div>
              {info.length > 0 && (
                <div className="speaker-info">
                  {info.join(', ')}
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Speakers;
