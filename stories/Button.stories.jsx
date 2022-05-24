import React from 'react';
import { Button } from './Button';

const isRTL = new URL(window.location).searchParams.get('eyes-variation') === 'RTL';

if (isRTL) {
  document.documentElement.setAttribute('dir', 'rtl')
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
  backgroundColor: 'blue'
};
Primary.story = {
  name: 'Primary - with variations',
  parameters: {
    eyes: {
      queryParams: [
        {name: 'RTL', value: 'isRTL=true'},
        {name: 'RTL', value: 'isRTL=false'}
      ]
    }
  }
}

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: 'salmon'
};

Secondary.story = {
  name: 'Secondary - without variations',
}