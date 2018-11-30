import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultorioModel } from '../models/consultorio_model';
import { ConsultoriosService } from '../services/consultorios.service';
import { MapComponent } from '../components/map/map.component';
import * as _ from 'lodash';
import { ConsultoriosResponse } from '../models/consultorios_response';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
  providers: [ConsultoriosService]
})
export class UbicacionComponent implements OnInit {
  @ViewChild(MapComponent) mapComponent: MapComponent; 
  public consultoriosResponse= new ConsultoriosResponse();

  constructor(private consultoriosService: ConsultoriosService) { }

  ngOnInit() {
    this.consultoriosService.getAllConsultorios().subscribe(
      (tmpDoctores: ConsultoriosResponse) => {
         this.consultoriosResponse = tmpDoctores;
         console.log(this.consultoriosResponse);
         if(this.consultoriosResponse) {
           this.mapComponent.drawMap(this.consultoriosResponse.consultorios);
         }
       }
   );
  }

}
