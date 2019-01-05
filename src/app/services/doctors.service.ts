import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpSentEvent, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DoctorsModel } from '../models/doctors_model';
import { Observable } from 'rxjs';
import { HttpOptions } from '../interfaces/http-options';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }),
    "observe?": "response", 
      "responseType?": "json" 
  };
  private apiKeyAllDoctors = '/doctores';

  constructor(private httpClient: HttpClient) { }

  getAllDoctors() {
    return this.httpClient.get(environment.urlApi + this.apiKeyAllDoctors, this.httpOptions);
  }
}
