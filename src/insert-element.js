/**
 * Create a new HTMLElement and append it in the given parent.
 *
 * @description This function creates an HTMLElement (a tag).
 * @example insertElement("a", "Click me!", ".a-container");
 * @param {string} tag The HTML tag to create.
 * @param {string} text The text that will be displayed inside the tag.
 * @param {string|HTMLElement} parent The parent of the created tag. The tag will be inserted into this parent.
 * @returns {HTMLElement} The HTMLElement created by the script.
 */
export function insertElement(tag, text, parent) {
  if (!tag || typeof tag !== 'string') {
    throw new Error(`insertElement requires a tag\n${tag} is not allowed as a tag parameter.`);
  }
  const createdTag = document.createElement(tag);
  if (typeof text !== 'undefined') {
    createdTag.appendChild(document.createTextNode(text));
  }
  if (typeof parent !== 'undefined') {
    if (!(parent instanceof HTMLElement)) {
      const selectedParent = document.querySelector(parent);
      selectedParent.appendChild(createdTag);
      return createdTag;
    }
    parent.appendChild(createdTag);
  }
  return createdTag;
}
