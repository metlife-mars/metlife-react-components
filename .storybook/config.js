import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

function loadStories() {
  require('../src/stories');
}

setAddon(infoAddon);
configure(loadStories, module);
