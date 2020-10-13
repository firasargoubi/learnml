import i18n from '../../i18n';
import { Event } from './event-interface';

export const EVENTS: Event[][] = [
    [
        {
            time: '9am',
            description: i18n.t('Event[0][0].description'),
        },
        {
            time: '9:30am',
            description: i18n.t('Event[0][0].description'),
        },
    ],
    [
        {
            time: '9am',
            description: i18n.t('Event[1][0].description'),
        },
    ],
];