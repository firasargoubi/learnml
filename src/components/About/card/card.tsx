import React from 'react';
import './card.scss';

export interface CardProps {
  iconPath: string;
  text: string;
}
export const Card: React.FC<CardProps> = ({iconPath, text}) => (
  <div className="card-about">
      <img id="cardIcon" src={iconPath}/>
      <div id="text-container">< p id="cardText">{text}</p></div>
  </div>
);
