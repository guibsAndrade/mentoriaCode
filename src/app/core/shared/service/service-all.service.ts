import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUsuarios } from '../../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiceAllService {
  private readonly urlApi = `${environment.apiUrl}repo`;

  constructor(
    private _http: HttpClient,
  ) { }

public getList(): Observable<IUsuarios>{
  //exemplos que passam a interface como tipagem, por qual objetivo? 
  return this._http.get<IUsuarios>(this.urlApi); 
}

getAll(){
  return this._http.get(this.urlApi);
}

}
