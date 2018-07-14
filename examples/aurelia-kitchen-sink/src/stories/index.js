import { storiesOf } from '@storybook/aurelia';

storiesOf('Button', module)
  // Works if Vue.component is called in the config.js in .storybook
  .add('rounded', () => ({
    template: '<my-button>My button</my-button>',
  }));
