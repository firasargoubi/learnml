import i18n from '../../i18n';
import { QuestionAnswer } from './question-answer-interface';

const QA_COUNT = 6;

export const QUESTION_ANSWERS: QuestionAnswer[] =  Array.from({length: QA_COUNT}, (_, i) => ({
    question: i18n.t(`QuestionAnswer.element${i}.question`),
    answer: i18n.t(`QuestionAnswer.element${i}.answer`),
}));