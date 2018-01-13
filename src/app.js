import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './services/fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

// console.log(dataService.drones);
// console.log(dataService.cars);
//
// for (let error of dataService.errors)
//   console.log(error.message);

// let car = dataService.getCarByLicense('D9T570');
// console.log(car);

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars)
//   console.log(car.license);

// let cars = dataService.filterCarsByMake('t');
//
// for (let car of cars)
//   console.log(car);

// let b = new Button('Click Me');
// b.appendToElement($('body'));

let tb = new TitleBar('Our Application');
tb.addLink('Home', '');
tb.addLink('Link', '');
tb.appendToElement($('body'));
