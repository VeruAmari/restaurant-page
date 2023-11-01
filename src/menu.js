import {newElm} from './DOM.js';

function newProduct(name, description, parent) {
  newElm("h2", name, `${name}-header`, parent);
  newElm("p", description, `${name}-description`, parent);
};

export function makeMenu (parent) {
  const div = newElm("div", "", "menu-container", parent);
  newElm("h1", "Menu", "header", div);
  newProduct("Squirrel Coffee", "A delicious blend of coffee-beans and acorn.",div);
  return div;
};