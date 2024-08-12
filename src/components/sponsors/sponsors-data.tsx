import POLY from './img/Polytechnique_logo.png';
import SEMLA_LOGO from './img/semla_logo.png';
import CGI from './img/CGI.svg';
import GIRO from './img/giro-logo.svg';
import DRUIDE from './img/druide.png';
import AECSP from './img/AECSP.svg';
import DIGITAL_OCEAN from './img/DO_White.png';
import GURU from './img/guru.png';
import POLYHX from './img/polyhx.png';
import SE4AI from './img/se4ai.svg';
import IVADO from './img/ivado.png';
import DESJARDINS from './img/desjardins.png';
import INTACT_LAB from './img/intactlab.png';
import BNC from './img/bnc.png';
import RCGT from './img/rcgt.png';

export interface Sponsor {
  name: string;
  imgPath: string;
  website?: string;
}

export const PLATINUM: Sponsor[] = [
 
];

export const GOLD: Sponsor[] = [
  {
    name: 'IVADO',
    imgPath: IVADO,
    website: 'https://ivado.ca/en/',
  },
  {
    name: 'SEMLA',
    imgPath: SEMLA_LOGO,
    website: 'https://semla.quebec/en/',
  },
];

export const SILVER: Sponsor[] = [
  
];

export const BRONZE: Sponsor[] = [
  { name: 'Druide', imgPath: DRUIDE, website: 'https://www.druide.com/en/' },
  { name: 'AECSP', imgPath: AECSP, website: 'https://aecsp.qc.ca/' },
  { name: 'Guru', imgPath: GURU, website: 'https://www.guruenergy.com/en-ca' },
  { name: 'SE4AI', imgPath: SE4AI, website: 'https://se4ai.org/' },
  {
    name: 'Polytechnique Montreal',
    imgPath: POLY,
  },
];
