import React from 'react';
import Header from './header';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withReadme(README));

stories.add('Standard Header', withInfo('Standard Header')(() => {
    const title = text('title', 'A front-end test of sorts');

    const header =
      <Header title={title} />;
    return header;
}));