import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lista } from '../core/lista';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MostrarDadosService {
  public data: any = [];

  constructor(private http: HttpClient) {}

  setData(index: string, data: any): boolean {
    if (index) {
      this.data = data;
      return true;
    }
    return false;
  }

  getAll() {
    return this.http
      .get<any>('../../assets/content.json')
      .toPromise()
      .then((res) => <lista[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
