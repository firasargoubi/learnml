import React, { FunctionComponent } from 'react';
import { Container } from 'reactstrap';
import ContainerHeading from '../common/container-heading';
import Accordion from './accordion/accordion';
import './faq.scss';
import { QuestionAnswer } from './question-answer-interface';

export interface FaqProps {
    questionAnswers: QuestionAnswer[];
}

const Faq: FunctionComponent<FaqProps> = ({
    questionAnswers,
}) => {
    return (
        <div className="faq">
            <ContainerHeading title="FAQ"/>
            {
                questionAnswers.map((qa, i) => (
                    <Accordion
                        key={i}
                        title={qa.question}
                        content={qa.answer}
                    />
                ))
            }
        </div>
    );
};

export default Faq;
