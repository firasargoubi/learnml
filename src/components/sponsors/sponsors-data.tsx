//import AECSP from './img/AECSP.svg';
import CN from './img/CN.png';
import COVEO from './img/coveo.png';
import DRUIDE from './img/druide.png';
import ERICSON from './img/ericson.png';
import GURU from './img/guru.png';
import IVADO from './img/ivado.png';
import POLY from './img/Polytechnique_logo.png';
import SEMLA_LOGO from './img/semla_logo.png';
import STINGRAY from './img/stingray.png';
import TD from './img/td_logo.jpg';

export interface Sponsor {
  name: string;
  imgPath: string;
  website?: string;
}

export const PLATINUM: Sponsor[] = [];

export const GOLD: Sponsor[] = [

  {
    name: 'IVADO',
    imgPath: IVADO,
    website: 'https://ivado.ca/en/',
  },
  {
    name: 'CN',
    imgPath: CN,
    website: 'https://www.cn.ca/en/',
  },
  {
    name: 'SEMLA',
    imgPath: SEMLA_LOGO,
    website: 'https://semla.quebec/en/',
  },
  {
    name: 'ERICSON',
    imgPath: ERICSON,
    website: ' https://www.ericsson.com/en/newsroom/media-kits',
  },
 
];

export const SILVER: Sponsor[] = [
  {
    name: 'COVEO',
    imgPath: COVEO,
    website: 'https://www.coveo.com/en',
  },
];

export const BRONZE: Sponsor[] = [
  { 
    name: 'Druide', 
    imgPath: DRUIDE, 
    website: 'https://www.druide.com/en/', 
  },
 /* { 
    name: 'AECSP', 
    imgPath: AECSP,
     website: 'https://aecsp.qc.ca/', 
    },*/
  { name: 'Guru', imgPath: GURU, website: 'https://www.guruenergy.com/en-ca' },
  {
    name: 'Stingray',
    imgPath: STINGRAY,
    website: '  https://corporate.stingray.com/media-center/',
  },
  {
    name: 'Teledyne Dalsa',
    imgPath: TD,
    website: 'https://www.teledynedalsa.com/en/home/',
  },
  {
    name: 'Polytechnique Montreal',
    imgPath: POLY,
    website: 'https://www.polymtl.ca/',
  },
];
