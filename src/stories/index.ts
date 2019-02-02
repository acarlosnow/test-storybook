import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { SomeDirective } from '../app/my-button/my-button.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

const decorator = moduleMetadata({
  declarations: [SomeDirective],
  imports: [ButtonsModule]
});

storiesOf('UI/Button', module)
  .addDecorator(decorator)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    props: {
      click: action('click'),
      text: text('text', 'Default Button')
    },
    template: `<button kendoButton [primary]="false" (click)="click($event)">{{ text }}</button>`
  }))
  .add('Primary', () => ({
    props: {
      text: text('text', 'Primary Button'),
      primary: boolean('primary', true)
    },
    template: `<button kendoButton [primary]="primary">{{text}}</button>`
  }));

storiesOf('UI/Button>Sizes', module)
  .addDecorator(decorator)
  .addDecorator(withKnobs)
  .add('Regular', () => ({
    template: `<button kendoButton [primary]="true">Button</button>`
  }))
  .add('Small', () => ({
    template: `<button kendoButton [primary]="true" class="small">Small Button</button>`
  }))
  .add('Large', () => ({
    template: `<button kendoButton [primary]="true" class="px-3 py-2" style="font-size: 1rem;">Large Button</button>`
  }));

storiesOf('UI/Button>Styles', module)
  .addDecorator(decorator)
  .addDecorator(withKnobs)
  .add('Flat', () => ({
    template: `<button kendoButton [primary]="true" look="flat">Flat Button</button>`
  }))
  .add('Outlined', () => ({
    template: `<button kendoButton [primary]="true" look="outline">Outline Button</button>`
  }));

storiesOf('UI/Button>States', module)
  .addDecorator(decorator)
  .addDecorator(withKnobs)
  .add('Disabled', () => ({
    template: `<button kendoButton [primary]="true" [disabled]="true">Disabled Button</button>`
  }));
