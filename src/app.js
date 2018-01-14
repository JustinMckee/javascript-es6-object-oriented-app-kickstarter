import $ from 'jquery';
import {fleet} from './services/fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {HomePage} from './home-page.js';
import {ApplicationBase} from './framework/application-base.js';
import {CarsPage} from './cars-page.js';
import {DronesPage} from './drones-page.js';
import {MapPage} from './map-page.js';

export class App extends ApplicationBase{

  constructor(){
    super('Fleet Manager');
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage(), false);
    this.addRoute('Drones', new DronesPage(), false);
    this.addRoute('Map', new MapPage(), false);
  }

}

export let application = new App();
application.show($('body'));


/*
 * @data
 */

// let dataService = new FleetDataService();
// dataService.loadData(fleet);

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

// let b = new Button('Click Me');
// b.appendToElement($('body'));

/*
 * @title-bar
 */

// let tb = new TitleBar('Our Application');
// tb.addLink('Home', '');
// tb.addLink('Link', '');
// tb.appendToElement($('body'));

/*
 * @data-table
 */

// let headers = "License Make Model Miles".split(' ');
// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));

/*
 * @map
 */

// let centerOfMap = {lat: 40.783661, lng: -73.965883};
// let map = new GoogleMap(centerOfMap, dataService.cars);
//
// map.appendToElement($('body'));
