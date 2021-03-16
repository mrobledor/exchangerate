import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TasadecambioService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<RespuestaTopHeadLines>(`https://openexchangerates.org/api/latest.json?app_id=0f90e291fda34b85ae7837871e159629`);
  }
}
