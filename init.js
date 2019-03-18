import $ from 'jquery';

import { add } from './add.rs'
import { Calculator } from './sub.ts'
import './app.css'

export function init() {
  console.log("Hello");
  const calc = new Calculator();
  const a = calc.add(2, 3);
  const b = calc.sub(3, 2);
  $('body').html(`<h1>Hello Breizhcamp! ${a} - ${b}</h1><div id="app"></div>`);
  import('./app.jsx').then(app => app.initCounter());
}
