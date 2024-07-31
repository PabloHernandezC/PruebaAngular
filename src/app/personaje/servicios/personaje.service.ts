import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interface/personaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  baseURL: string = enviroment.apiUrl

  constructor(
    private http:HttpClient
  ) { }

  listaCaracteres(params: any):Observable<Personaje>
  {
    return this.http.get<Personaje>(this.baseURL + enviroment.character, {params})
  }

  consultarPersonajeId(id:number):Observable<Personaje>{
    return this.http.get<Personaje>(this.baseURL + enviroment.character + id)
  }
}
