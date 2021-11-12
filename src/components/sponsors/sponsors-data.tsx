import BNC from './img/bnc_blanc.png';
import POLY from './img/Polytechnique_logo.png';
import TECHNATION from './img/glimpse.png';

export interface Sponsor {
    name: string;
    imgPath: string;
    website?: string;
}

export const PLATINUM: Sponsor[] = [];

export const GOLD: Sponsor[] = [
    // {
    // name: 'Technation',
    // imgPath: TECHNATION,
    // website: 'https://technationcanada.ca/en/',
    // }
];

export const SILVER: Sponsor[] = [];

export const BRONZE: Sponsor[] = [{
        name: 'Banque Nationale',
        imgPath: BNC,
    }, {
        name: 'Polytechnique Montreal',
        imgPath: POLY,
    },
];
