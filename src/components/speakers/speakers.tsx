import 'bootstrap/dist/css/bootstrap.min.css';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Carousel,
    CarouselControl,
    CarouselItem,
    Container,
} from 'reactstrap';
import { batch } from '../../utils';
import ContainerHeading from '../common/container-heading';
import { SPEAKERS } from './data';
import Speaker from './speaker/speaker';
import { SpeakerInfo } from './speaker/speaker-info-interface';
import './speakers.scss';

export interface SpeakersProps {
    speakers: SpeakerInfo[];
}

const Speakers: FunctionComponent<SpeakersProps> = ({
    speakers,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const { t } = useTranslation();

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === speakers.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? speakers.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = batch(speakers,2).map((speakersBatch, i) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={i}
            >
                <div className="speaker-wrapper">
                    {speakersBatch.map((speaker, j) => (
                        <Speaker key={j} {...speaker}/>
                    ))}
                </div>
            </CarouselItem>
        );
    });

    return (
        <div className="speakers">
            <ContainerHeading title={t('Speakers.title')}/>
            <div>
                <Carousel
                    // pause={false}
                    ride="carousel"
                    interval="3500"
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            </div>
            <h6> {t('Speakers.emailUs')}</h6>
        </div>
    );
};

export default Speakers;
