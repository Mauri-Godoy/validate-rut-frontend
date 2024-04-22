import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValidateRut } from '../models/validate-rut.model';
import { environment } from '../../environments/environment.development';

const URL_BASE = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class ValidateRutService {

  constructor(private http: HttpClient) { }

  validate(validateRut: ValidateRut) {
    return this.http.post<ValidateRut>(`${URL_BASE}/api/validation`, validateRut)
  }
}
