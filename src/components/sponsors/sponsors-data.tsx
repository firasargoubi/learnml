import IVADO from './img/ivado_logo.svg';
import GIRO from './img/logo_giro.png';
import POLY from './img/Polytechnique_logo.png';
import GLIMPSE from './img/glimpse.png';

export interface Sponsor {
    name: string;
    imgPath: string;
    website?: string;
}

export const PLATINUM: Sponsor[] = [{
    name: 'Glimpse',
    imgPath: GLIMPSE,
    website: 'https://www.joinglimpse.com/',
}];

export const GOLD: Sponsor[] = [];

export const SILVER: Sponsor[] = [{
        name: 'Giro',
        imgPath: GIRO,
    },
];

export const BRONZE: Sponsor[] = [{
        name: 'IVADO',
        imgPath: IVADO,
    }, {
        name: 'Polytechnique Montreal',
        imgPath: POLY,
    },
];