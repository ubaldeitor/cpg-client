import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DoctorsModel } from '../models/doctors_model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  };
  private apiKeyAllDoctors = '/doctores';

  constructor(private httpClient: HttpClient) { }

  getAllDoctors() {
    return this.httpClient.get<Array<DoctorsModel>>(environment.urlApi + this.apiKeyAllDoctors, this.httpOptions);
  }
}
