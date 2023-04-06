import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lista } from '../core/lista';

@Injectable({
  providedIn: 'root'
})
export class MostrarDadosService {

  private data: lista[] = [];

  constructor(private http: HttpClient) { }



  getData() {
    return this.http.get<any>('../../assets/content.json')
      .toPromise()
      .then(res => <lista[]>res.data)
      .then(data => { return data; });
    }

}
