import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMonstrinhosService {

  apiUrl = 'https://my-json-server.typicode.com/FactorMouk/api_monstrinhos_'
 

  constructor(private http:HttpClient) { }

  getMonsters(region, type){
    return this.http.get(this.apiUrl+region+'/'+type)
  }
}
