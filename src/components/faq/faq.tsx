import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
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
    const { t } = useTranslation();

    return (
        <div className="faq">
            <ContainerHeading title="FAQ"/>
            <Row xs="1" md="2">
            {
                questionAnswers.map((qa, i) => (
                    <Col key={i} className="faq-col-padding">
                        <Accordion
                            key={i}
                            title={t(`QuestionAnswer.element${i}.question`)}
                            content={t(`QuestionAnswer.element${i}.answer`)}
                        />
                    </Col> 
                ))
            }
            </Row>
        </div>
    );
};

export default Faq;
