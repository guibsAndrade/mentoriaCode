import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceAllService {
  private readonly urlApi = `${environment.git}repo`;

  constructor(
    private _http: HttpClient,
  ) { }

getAll(){
  return this._http.get(this.urlApi);
}
}
