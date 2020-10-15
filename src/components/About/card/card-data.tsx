import i18n from '../../../i18n';
import bottomleftIcon from '../../../images/bottomleft-icon.png';
import bottomrigtIcon from '../../../images/bottomright-icon.png';
import topleftIcon from '../../../images/topleft-icon.png';
import toprightIcon from '../../../images/topright-icon.png';
import { CardProps } from './card';

const DATA: CardProps[] = 
[
    {
        iconPath: topleftIcon,
        text: i18n.t('Card[0].text'),
    },
    {
        iconPath: toprightIcon,
        text: i18n.t('Card[1].text'),
    },
    {
        iconPath: bottomleftIcon,
        text: i18n.t('Card[2].text'),
    },
    {
        iconPath: bottomrigtIcon,
        text: i18n.t('Card[3].text'),
    },
];

export default DATA;