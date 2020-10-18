// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import './story-deps';

import Footer from '../components/footer/footer';

export default {
  title: 'Core/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <Footer/>;

export const Primary = Template.bind({});
