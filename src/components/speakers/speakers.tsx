import 'bootstrap/dist/css/bootstrap.min.css';
import React, { FunctionComponent, useEffect, useState } from 'react';
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
    const [minLength, setMinLength] = useState(2);
    const { t } = useTranslation();

    const updateCarousel = () => {
        if (window.innerWidth < 678) {  // taille où deux un à côté de l'autre c'est laid / s'embarque dessus
            setMinLength(1);
        } else {
            setMinLength(2);
        }
    };

    useEffect( () => {
        window.addEventListener('resize', updateCarousel);

        return () =>  window.removeEventListener('resize', updateCarousel);
    })

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

    const slides = batch(speakers, minLength).map((speakersBatch, i) => {
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
                    ride="carousel"
                    interval={slides.length > minLength ? '3500': false}
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    {slides}

                    {slides.length > minLength &&
                        <div>
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
                        </div>
                    }
                </Carousel>
            </div>
            <h6> {t('Speakers.emailUs')}</h6>
        </div>
    );
};

export default Speakers;
