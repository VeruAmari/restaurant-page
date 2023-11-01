export function newElm(type, content, classes, parent) {
  const element = document.createElement(type);
  element.setAttribute("class", classes);
  element.textContent = content;

  parent.appendChild(element);
  return element;
}

export function rmvChil(parent) {
  parent.innerHTML = '';
  //parent.remove();
};