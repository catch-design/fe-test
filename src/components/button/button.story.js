import React from 'react';
import Button from './button';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withReadme(README));

stories.add('Standard Button', withInfo('Standard Button')(() => {
    const caption = text('caption', 'Submit');

    const button =
        <Button caption={caption} />;
    return button;
}));