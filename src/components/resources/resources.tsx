import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import ContainerHeading from '../common/container-heading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './resources.scss';

const Resources: React.FC = () => {
  const { t } = useTranslation();

  const resources = [
    { title: 'Intro to Machine Learning', link: 'https://developers.google.com/machine-learning/crash-course' },
    { title: 'React Documentation', link: 'https://reactjs.org/' },
    { title: 'TypeScript Handbook', link: 'https://www.typescriptlang.org/docs/' },
    { title: 'i18next Guide', link: 'https://www.i18next.com/' }
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div id="resources" className="resources">
      <ContainerHeading title={t('Resources.title')} />
      <Slider {...settings} >
        {resources.map((r, i) => (
          <div
            key={i}
            className="resource-card"
            onClick={() => window.open(r.link, '_blank', 'noopener,noreferrer')}
            style={{ cursor: 'pointer' }}
          >
            <span className="resource-title">{r.title}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Resources;
