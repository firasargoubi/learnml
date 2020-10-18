// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import './story-deps';

import Schedule, { ScheduleProps } from '../components/schedule/schedule';
import { EVENTS } from '../components/schedule/schedule-data';

export default {
  title: 'Core/Schedule',
  component: Schedule,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ScheduleProps> = (args) => <Schedule {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    events: EVENTS,
};
