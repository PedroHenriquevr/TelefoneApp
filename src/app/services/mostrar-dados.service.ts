import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarDadosService {

  private data: any = [];

  constructor() { }

  setData(index: string, data: any): boolean {
    if (index) {
      this.data[index] = data;
      return true;
    }
    return false;
  }

  getData(index: string): any {
    if (index) {
      return this.data[index];
    }
    return null;
  }

}
