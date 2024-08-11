import 'bootstrap/dist/css/bootstrap.min.css';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Carousel,
    CarouselControl,
    CarouselItem,
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

const Speakers: FunctionComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [minLength, setMinLength] = useState(2);
    const { t } = useTranslation();

    const updateCarousel = () => {
        if (window.innerWidth < 960) { // taille où deux un à côté de l'autre c'est laid / s'embarque dessus
            setMinLength(1);
        }
        else if (window.innerWidth < 1300) {  // > 1200 = large laptops and desktops 
            setMinLength(2);
        } 
        else {
            setMinLength(4);
        }
    };

    useEffect( () => {
        updateCarousel();
        window.addEventListener('resize', updateCarousel);

        return () =>  window.removeEventListener('resize', updateCarousel);
    });

    const slides = batch(SPEAKERS, minLength).map((speakersBatch, i) => {
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

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    return (
        <div className="speakers">
            <ContainerHeading title={t('Speakers.title')}/>
            <div>    
                {/*                
                <Carousel
                    ride="carousel"
                    interval={slides.length > minLength ? '2000': false}
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    {slides}

                    {SPEAKERS.length > minLength &&
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
                */}

            </div>
            { <h6> {t('Speakers.emailUs')}</h6> }
        </div>
    );
};

export default Speakers;
