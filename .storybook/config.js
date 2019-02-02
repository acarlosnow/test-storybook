import { configure, addDecorator } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { centered } from '@storybook/addon-centered/angular';
import { checkA11y } from '@storybook/addon-a11y';

import '!style-loader!css-loader!sass-loader!../src/styles.scss';

addDecorator(withNotes);
addDecorator(centered);
addDecorator(checkA11y);
addDecorator(
  withOptions({
    addonPanelInRight: true,
    hierarchySeparator: '>',
    hierarchyRootSeparator: '/'
  })
);

function loadStories() {
  require('./stories/index');
}

configure(loadStories, module);
