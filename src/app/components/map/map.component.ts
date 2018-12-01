import { Component, OnInit, Input } from '@angular/core';
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import OlFeature from 'ol/Feature';
import * as olProj from 'ol/proj';
import { Geometry, Point } from 'ol/geom';
import { Vector } from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import { Circle as CircleStyle, Fill, Icon, Stroke, Style, Text } from 'ol/style';
import { ConsultorioModel } from 'src/app/models/consultorio_model';
import * as fa from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;
  marker: OlFeature;
  vectorSource: Vector;
  markerVectorLayer: VectorLayer;
  styleMarker: Style;

  ngOnInit() {}

  public drawMap(consultorios: Array<ConsultorioModel>) {
    console.log('Consultorios found:', consultorios);
    this.styleMarker = new Style({
      text: new Text({
        text: '\uf041',
        font: 'normal 38px FontAwesome',
        fill: new Fill({
        color: 'blue'
      })
    })
  });

    if (consultorios) {
      this.source = new OlXYZ({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      });

      this.layer = new OlTileLayer({
        source: this.source
      });

      this.view = new OlView({
        center: olProj.fromLonLat([-99.087622, 19.441381]),
        zoom: 17
      });

      this.map = new OlMap({
        target: 'map',
        layers: [this.layer],
        view: this.view
      });

      //Add markers
      consultorios.forEach((consultorio) => {
        this.marker = new OlFeature({
          name: 'textMarker',
          geometry: new Point(
            olProj.fromLonLat([consultorio.longitud, consultorio.latitud])
          ),  // Coordinates for site
        });
        // this.marker.setStyle(this.styleMarker);
        this.vectorSource = new Vector({
          features: [this.marker]
        });
        this.markerVectorLayer = new VectorLayer({
          source: this.vectorSource,
          style: this.styleMarker
        });

        this.map.addLayer(this.markerVectorLayer);
      });
    }
  }
}
