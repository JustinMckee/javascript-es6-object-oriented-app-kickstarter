import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement{

  constructor(centerOfMap, data){
    super();
    this.centerOfMap = centerOfMap;
    this.data = data;
  }

  createElement(){
    setTimeout(()=>{
      var map = new google.maps.Map(document.getElementById('map'), {
          center: this.centerOfMap,
          zoom: 13,
        });

      for (let vehicle of this.data){
        let [lat, long] = vehicle.latLong.split(' ');
        let myLatLng = new window.google.maps.LatLng(lat,long);

        var marker = new window.google.maps.Marker({
          position: myLatLng,
          map: map
        });
        marker.setMap(map);
      }
    },0);
    
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString(){
    return `
      <div style="width:100%; height:400px;" id="map"></div>
    `;
  }

}
