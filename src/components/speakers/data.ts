import i18n from '../../i18n';
import jeremy from './img/Jeremy_Pinto.jpg';
import fabrice from './img/Fabrice_Charbonneau.jpg';
import amin from './img/amin.jpg';
import thomas from './img/thomas.jpg';
import { SpeakerInfo } from './speaker/speaker-info-interface';

export const SPEAKERS: SpeakerInfo[] = [
  {
    imgSrc: jeremy,
    name: 'Jeremy Pinto',
    i18nTitleKey: 'Speakers.speaker[0]',
    company: 'Mila',
  },
  {
    imgSrc: amin,
    name: 'Amin Nikanjam',
    i18nTitleKey: 'Speakers.speaker[1]',
    company: 'Polytechnique Montréal',
  },
  {
    imgSrc: thomas,
    name: 'Thomas Reid',
    i18nTitleKey: 'Speakers.speaker[2]',
    company: 'Sycodal',
  },
];
