import {
  PolymerElement,
  html
} from '../node_modules/@polymer/polymer/polymer-element.js';

/**
 * `button-accessibility-demos'`
 * @class ButtonA11yDemos
 * @extends {PolymerElement}
 */
class ButtonA11yDemos extends PolymerElement {
  static get is() {
    return 'button-accessibility-demos';
  }

  static get template() {
    return html`
      <style include="vaadin-component-demo-shared-styles">
        :host {
          display: block;
        }
      </style>

      <h3>Accessible Button</h3>
      <p>
        You can focus the button using the keyboard, and activate it with the 
        <kbd>Enter</kbd> and <kbd>Space</kbd> keys. Notice how the visual active 
        style is also triggered, giving keyboard users clear visual 
        feedback that the button was clicked.
      </p>
      <vaadin-demo-snippet id='button-a11y-demos-accessible-label'>
        <template preserve-content>
          <vaadin-button>OK</vaadin-button>
        </template>
      </vaadin-demo-snippet>

      <h3>Accessible Icon Button</h3>
      <p>
        If you only place an icon as the content of the button, 
        you should provide an alternative label for screen reader 
        users by using the standard <code>aria-label</code> attribute.
      </p>
      <vaadin-demo-snippet id='button-a11y-demos-accessible-label'>
        <template preserve-content>
          <vaadin-button aria-label="Create new">
            <iron-icon icon="lumo:plus"></iron-icon>
          </vaadin-button>
        </template>
      </vaadin-demo-snippet>
    `;
  }
}

customElements.define(ButtonA11yDemos.is, ButtonA11yDemos);
