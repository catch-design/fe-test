import React from 'react';
import Sharebar from './sharebar';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';

const stories = storiesOf('Sharebar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withReadme(README));

stories.add('Standard Sharebar', withInfo('Standard Sharebar')(() => {
    const sharebar =
      <Sharebar />;
    return sharebar;
}));