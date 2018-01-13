import {BaseElement} from './base-element.js';

export class Button extends BaseElement{

  constructor(title){
    super();
  }

  getElementString(){
    return `<button class="mdl-button mdl-js-button mdl-button--raised          mdl-js-ripple-effect mdl-button--accent">${this.title}</button>`;
  }

}
