import jonathan from './img/jonathan_aws_2.jpg';
import christine from './img/Christine_Izuakor.jpg';
import {SpeakerInfo} from './speaker/speaker-info-interface';
import i18n from '../../i18n';


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
];