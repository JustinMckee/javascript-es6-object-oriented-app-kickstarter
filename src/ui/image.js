import {BaseElement} from './base-element.js';

export class Image extends BaseElement{

  constructor(title){
    super();
    this.filename = filename;
  }

  getElementString(){
    return `<img src="${this.filename}" style="width:100%" />`;
  }

}
