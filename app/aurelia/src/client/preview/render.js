import { bootstrap } from 'aurelia-bootstrapper-webpack';

let app = null;

function renderRoot() {
  if (app) app = null;

  bootstrap();
}

export default function render({ showMain }) {
  showMain();
  renderRoot();
}
