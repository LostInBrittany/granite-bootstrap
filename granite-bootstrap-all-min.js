import {html} from '@polymer/polymer/polymer-element.js';
import './granite-bootstrap-reboot-min.js';
import './granite-bootstrap-min.js';
import './granite-bootstrap-grid-min.js';
const GraniteBootstrapAllMin = html`
<dom-module id='granite-bootstrap-all-min'>
  <template>
    <style include="granite-bootstrap-reboot-min"></style>
    <style include="granite-bootstrap-min"></style>
    <style include="granite-bootstrap-grid-min"></style>
  </template>
</dom-module>
`;
document.head.appendChild(GraniteBootstrapAllMin.content);