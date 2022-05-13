import BNC from './img/bnc_blanc.png';
import POLY from './img/Polytechnique_logo.png';
import TECHNATION from './img/technation.png';
import INTACT from './img/intactlab.png';
import SELMA_LOGO from './img/selma_logo.png';

export interface Sponsor {
    name: string;
    imgPath: string;
    website?: string;
}

export const PLATINUM: Sponsor[] = [{
    name: 'Selma',
    imgPath: SELMA_LOGO,
}];

export const GOLD: Sponsor[] = [{
        name: 'Technation',
        imgPath: TECHNATION,
        website: 'https://technationcanada.ca/en/',
    }, {
        name: 'Intact',
        imgPath: INTACT,
        website: 'https://intactlab.ca/'
    }
];

export const SILVER: Sponsor[] = [];

export const BRONZE: Sponsor[] = [{
        name: 'Banque Nationale',
        imgPath: BNC,
    }, {
        name: 'Polytechnique Montreal',
        imgPath: POLY,
    }
];
