import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UbicacionContactoModel} from '../models/ubicacion_contacto_model'

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }),
    "observe?": "response", 
      "responseType?": "json"
  };
  private apiKeyAllContactos = '/doctor-ubicacion-horario';

  constructor(private httpClient: HttpClient) { }

  getAllContactos() {
    return this.httpClient.get(environment.urlApi + this.apiKeyAllContactos, this.httpOptions);
  }
}
