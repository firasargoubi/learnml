import React from 'react';
import { useTranslation } from 'react-i18next';
import './card.scss';

interface CardProps {
  iconPath: string;
  text: string;
  index: number;
}

const Card: React.FC<CardProps> = ({iconPath, text, index}) => {
  const { t } = useTranslation();

  return (
    <div className="card-about">
        <img id="cardIcon" src={iconPath}/>
        <div id="text-container">< p id="cardText">{t('Card['+index+'].text')}</p></div>
    </div>
  );
};

export default Card;
