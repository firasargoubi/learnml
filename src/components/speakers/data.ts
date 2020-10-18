import jonathan from './img/jonathan_aws.jpg';
import {SpeakerInfo} from './speaker/speaker-info-interface';
import i18n from '../../i18n';


export const SPEAKERS: SpeakerInfo[] = [
    {
        imgSrc: jonathan,
        name: 'Jonathan Dion',
        title: i18n.t('Speakers.speaker[0]'),
        company: 'Amazon Web Services',
    },
    // {
    //     imgSrc: jonathan,
    //     name: 'Jonathan Dion',
    //     title: 'Senior Technical Trainer',
    //     company: 'Amazon Web Services',
    // },
    // {
    //     imgSrc: jonathan,
    //     name: 'Jonathan Dion',
    //     title: 'Senior Technical Trainer',
    //     company: 'Amazon Web Services',
    // },
];