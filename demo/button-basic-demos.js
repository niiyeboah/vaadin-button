import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `button-basic-demos`
 * @class ButtonBasicDemos
 * @extends {PolymerElement}
 */
class ButtonBasicDemos extends PolymerElement {
  static get is() {
    return 'button-basic-demos';
  }

  static get template() {
    return html`
      <style include="vaadin-component-demo-shared-styles">
        :host {
          display: block;
        }
      </style>

      <h3>Basic Button</h3>
      <p>The <code>&lt;vaadin-button&gt;</code> element works the same as the native <code>&lt;button&gt;</code> element, but offers better styling support and accessibility features.</p>
      <vaadin-demo-snippet id='button-basic-demos-basic'>
        <template preserve-content>
          <vaadin-button id="my-button">Button</vaadin-button>
          <script>
            window.addDemoReadyListener('#button-basic-demos-basic', function(document) {
              document.querySelector('#my-button').addEventListener('click', function(e) {
                window.console.log(e.target.id + ' clicked');
              });
            });
          </script>
        </template>
      </vaadin-demo-snippet>

      <h3>Disabled</h3>
      <vaadin-demo-snippet id='button-basic-demos-disabled'>
        <template preserve-content>
          <vaadin-button disabled>Disabled</vaadin-button>
        </template>
      </vaadin-demo-snippet>

      <h3>Using an Icon</h3>
      <p>Follow these tips when using icons in buttons. Check out the <a href="#button-accessibility-demos">Accessible Icon Button</a> example as well.</p>
      <vaadin-demo-snippet id='button-basic-demos-icon'>
        <template preserve-content>
          <!-- Use the "prefix/suffix" slots to place an icon before/after the text label.
              This ensure proper alignment of the icon. -->

          <vaadin-button>
            <iron-icon icon="lumo:edit" slot="prefix"></iron-icon>
            Edit
          </vaadin-button>

          <vaadin-button>
            <iron-icon icon="lumo:arrow-right" slot="suffix"></iron-icon>
            Next
          </vaadin-button>
        </template>
      </vaadin-demo-snippet>
    `;
  }
}

customElements.define(ButtonBasicDemos.is, ButtonBasicDemos);
