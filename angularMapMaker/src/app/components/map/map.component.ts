import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const initialState = { lng: -84.004349, lat: 34.120655, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=j3Qg3JsIkpnuyaSyAeY9`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
    this.map?.addControl(new NavigationControl({}), 'top-right');
    new Marker({ color: '#FF0000' })
      .setLngLat([-84.004349, 34.120655])
      .addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
