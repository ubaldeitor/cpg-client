import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConsultorioModel } from '../models/consultorio_model';
import { ConsultoriosResponse } from '../models/consultorios_response';

@Injectable({
  providedIn: 'root'
})
export class ConsultoriosService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  };
  private apiKeyAllPlaces = '/ubicaciones';

  constructor(private httpClient: HttpClient) { }

  getAllConsultorios() {
    return this.httpClient.get<ConsultoriosResponse>(environment.urlApi + this.apiKeyAllPlaces, this.httpOptions);
  }
}
