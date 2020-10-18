import React, { FunctionComponent } from 'react';
import { SpeakerInfo } from './speaker-info-interface';
import './speaker.scss';

const Speaker: FunctionComponent<SpeakerInfo> = ({
    name,
    title,
    company,
    imgSrc,
}) => {
    return (
        <div className="speaker">
            <div className="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1">
                    <circle r="15%" cx="80%" cy="15%" className="circle-dark" stroke="none"/>
                </svg>
                <img src={imgSrc} />
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1">
                    <circle r="8%" cx="12%" cy="80%" className="circle-dark" stroke="none"/>
                    <circle r="6%" cx="18%" cy="85%" className="circle-light" stroke="none"/>
                </svg>
            </div>
            <div className="text">
                <div>{name}</div>
                <div>{title}</div>
                <div>{company}</div>
            </div>
        </div>
    );
};

export default Speaker;
