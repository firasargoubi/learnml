import IVADO_IMG from './img/ivado_logo.svg';
import GIRO_IMG from './img/logo_giro.png';
import POLY_IMG from './img/Polytechnique_logo.png';

export interface Sponsor {
    name: string;
    imgPath: string;
}

export const PLATINUM: Sponsor[] = [];

export const GOLD: Sponsor[] = [];

export const SILVER: Sponsor[] = [{
        name: 'Giro',
        imgPath: GIRO_IMG,
    },
];

export const BRONZE: Sponsor[] = [{
        name: 'IVADO',
        imgPath: IVADO_IMG,
    }, {
        name: 'Polytechnique Montreal',
        imgPath: POLY_IMG,
    },
];