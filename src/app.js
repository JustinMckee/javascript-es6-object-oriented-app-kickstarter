import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './services/fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';
import {GoogleMap} from './ui/google-map.js';

/*
 * @data
 */

let dataService = new FleetDataService();
dataService.loadData(fleet);

// console.log(dataService.drones);
// console.log(dataService.cars);
//
// for (let error of dataService.errors)
//   console.log(error.message);

// let car = dataService.getCarByLicense('D9T570');
// console.log(car);

/*
 * @data-sort
 * @by-license
 */

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars)
//   console.log(car.license);

/*
 * @data-filter
 * @by-make
 */

// let cars = dataService.filterCarsByMake('t');
//
// for (let car of cars)
//   console.log(car);

/*
 * @button
 */

let b = new Button('Click Me');
b.appendToElement($('body'));

/*
 * @title-bar
 */

let tb = new TitleBar('Our Application');
tb.addLink('Home', '');
tb.addLink('Link', '');
tb.appendToElement($('body'));

/*
 * @data-table
 */

let headers = "License Make Model Miles".split(' ');
let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));

/*
 * @map
 */

let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.cars);

map.appendToElement($('body'));
