import i18n from '../../i18n';
import charles from './img/Charles_Fleurent.jpg';
import christine from './img/Christine_Izuakor.jpg';
import jonathan from './img/jonathan_aws_2.jpg';
import timothy from './img/timothy.png';
import {SpeakerInfo} from './speaker/speaker-info-interface';

export const SPEAKERS: SpeakerInfo[] = [
    {
        imgSrc: jonathan,
        name: 'Jonathan Dion',
        i18nTitleKey: 'Speakers.speaker[0]',
        company: 'Amazon Web Services',
    },
    {
        imgSrc: christine,
        name: 'Christine Izuakor',
        i18nTitleKey: 'Speakers.speaker[1]',
        company: 'Cyber Pop-up',
    },
    {
        imgSrc: charles,
        name: 'Charles Fleurent',
        i18nTitleKey: 'Speakers.speaker[2]',
        company: 'GIRO',
    },
    {
        imgSrc: timothy,
        name: 'Timothy Pereira',
        i18nTitleKey: 'Speakers.speaker[3]',
        company: 'AI Launch Lab',
    }
];