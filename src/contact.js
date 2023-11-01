import {newElm} from './DOM.js';

export function makeContact (parent) {
  const div = newElm("div", "", "contact-container", parent);
  newElm("h1", "Hello, contact!", "header", div);
  newElm("p", "Hi! I'm a contact paragraph.", "welcome text", div);
  return div;
};