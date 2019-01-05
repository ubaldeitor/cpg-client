import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { UbicacionContactoModel } from 'src/app/models/ubicacion_contacto_model';


@Component({
  selector: 'app-hacer-cita',
  templateUrl: './hacer-cita.component.html',
  styleUrls: ['./hacer-cita.component.css'],
  providers: [PacientesService]
})
export class HacerCitaComponent implements OnInit {

  public ubicacionesArr: Array<UbicacionContactoModel>;

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
    this.pacientesService.getAllContactos().subscribe(
      (tmpUbicaciones:Array<UbicacionContactoModel>)=>{
        this.ubicacionesArr = tmpUbicaciones;
        console.log(this.ubicacionesArr);
      }
    );
  }

}
