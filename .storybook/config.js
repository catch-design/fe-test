import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { configureViewport } from '@storybook/addon-viewport';

const req = require.context('../src', true, /story.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

setAddon(infoAddon);

configure(loadStories, module);