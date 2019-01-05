import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { DoctorsModel } from '../models/doctors_model';

@Component({
  selector: 'app-nuestros-medicos',
  templateUrl: './nuestros-medicos.component.html',
  styleUrls: ['./nuestros-medicos.component.css'],
  providers:[DoctorsService]
})
export class NuestrosMedicosComponent implements OnInit {

  public doctores: Array<DoctorsModel> = [];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.doctorsService.getAllDoctors().subscribe(
       resp => {
          this.doctores = resp['data'];
          console.log(this.doctores);
        }
    );
  }



}
