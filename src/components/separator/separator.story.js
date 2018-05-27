import React from 'react';
import Separator from './separator';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';

const stories = storiesOf('Separator', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withReadme(README));

stories.add('Standard Separator', withInfo('Standard Separator')(() => {
    const separator =
      <Separator />;
    return separator;
}));