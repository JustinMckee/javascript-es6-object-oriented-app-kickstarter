import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends Page {

  constructor(){
      super('Home');
  }

  createElement(){
    super.createElement();

    let i = new Image('http://via.placeholder.com/767x400/333?text=Placeholder%20Image');
    i.appendToElement(this.element);

    let styleString = 'width:300px;height:60px;font-size:;margin:10px;';
    let b = new Button('Self Driving Cars');
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute('Cars'));

    b = new Button('Drones');
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute('Drones'));

  }

  getElementString(){
    return '<div style="text-align:center;"></div>';
  }

}
