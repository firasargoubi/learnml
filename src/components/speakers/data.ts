import i18n from '../../i18n';
import jeremy from './img/Jeremy_Pinto.jpg';
import fabrice from './img/Fabrice_Charbonneau.jpg';
import { SpeakerInfo } from './speaker/speaker-info-interface';

export const SPEAKERS: SpeakerInfo[] = [
  {
    imgSrc: jeremy,
    name: 'Jeremy Pinto',
    i18nTitleKey: 'Speakers.speaker[0]',
    company: 'Mila',
  },
  {
    imgSrc: fabrice,
    name: 'Fabrice Charbonneau',
    i18nTitleKey: 'Speakers.speaker[1]',
    company: 'Intact Labs',
  },
];
