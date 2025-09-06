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
  role?: string;
  domain?: string;
  imgSrc?: string;
}

const speakers: Speaker[] = [
  { firstName: 'Omar', lastName: 'Abdul-Wahab', role: 'Professeur adjoint à PolyMTL', domain: 'Machine Learning' },
  { firstName: 'Ranwa', lastName: 'Al-Mallah', role: 'Professeure agrégée à PolyMTL', domain: 'Modélisation et IA' },
  { firstName: 'Aziz', lastName: 'Diop' },
  { firstName: 'Sara', lastName: 'Beddouch', domain: 'Cybersécurité et IA' },
  { firstName: 'Lahcen', lastName: 'Fatah', role: 'Enseignant à PolyMTL' },
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
        {speakers.map((s, i) => (
          <div key={i} className="speaker-card">
            {s.imgSrc && <img src={s.imgSrc} alt={`${s.firstName} ${s.lastName}`} />}
            <div className="speaker-name">{s.firstName} {s.lastName}</div>
            {(s.role || s.domain) && (
              <div className="speaker-info">
                {[s.role, s.domain].filter(Boolean).join(', ')}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Speakers;
