import {html} from '@polymer/polymer/polymer-element.js';
import './granite-bootstrap-reboot.js';
import './granite-bootstrap.js';
import './granite-bootstrap-grid.js';
const GraniteBootstrapAll = html`
<dom-module id='granite-bootstrap-all'>
  <template>
    <style include="granite-bootstrap-reboot"></style>
    <style include="granite-bootstrap"></style>
    <style include="granite-bootstrap-grid"></style>
  </template>
</dom-module>
`;
document.head.appendChild(GraniteBootstrapAll.content);