// Button.stories.jsx

import React from 'react';
import { Button } from './Button';

const eyesVar = new URL(window.location).searchParams.get('eyes-variation');
const isRTL =  eyesVar === 'RTL';
const isBlack = eyesVar === 'isBlack';

if (isRTL) {
  document.documentElement.setAttribute('dir', 'rtl');
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (<Button {...args} label="✓"> Hello World! </Button>);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  backgroundColor: isBlack ? 'black' : 'blue'
};
Primary.story = {
  name: 'Primary - with variations',
}
Primary.parameters = {
    eyes: {
      variations: ['RTL', 'LTR', 'isBlack']
    }
}