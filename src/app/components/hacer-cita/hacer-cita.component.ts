import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { UbicacionContactoModel } from 'src/app/models/ubicacion_contacto_model';
import { isComponent } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-hacer-cita',
  templateUrl: './hacer-cita.component.html',
  styleUrls: ['./hacer-cita.component.css'],
  providers: [PacientesService]
})
export class HacerCitaComponent implements OnInit {

  public ubicacionesArr: Array<UbicacionContactoModel>;
  public isCollapsed: Array<boolean> = [];

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
    this.pacientesService.getAllContactos().subscribe(
      resp =>{
        this.ubicacionesArr = resp['data'];
        console.log(this.ubicacionesArr);
        this.ubicacionesArr.forEach(ubicacion => {
          this.isCollapsed.push(false);
        });
      }
    );
  }

}
