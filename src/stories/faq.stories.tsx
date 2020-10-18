import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import './story-deps';

import { QUESTION_ANSWERS } from '../components/faq/data';
import Faq, {FaqProps} from '../components/faq/faq';

export default {
  title: 'Core/FAQ',
  component: Faq,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FaqProps> = (args) => <Faq {...args} />;

export const Preview = Template.bind({});
Preview.args = {
    questionAnswers: QUESTION_ANSWERS,
};
