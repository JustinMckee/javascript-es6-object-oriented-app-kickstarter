import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './services/fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

console.log(dataService.drones);
console.log(dataService.cars);

for (let error of dataService.errors)
  console.log(error.message);