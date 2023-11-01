import {newElm} from './DOM.js';

export function makeHome (parent) {
  const div = newElm("div", "", "home-container", parent);
  newElm("h1", "Welcome to Squirrel Coffee", "header", div);
  newElm("p", "The coziest coffee shop ran by squirrels, to enjoy a squirrel's taste in coffee.", "welcome text", div);
  return div;
};