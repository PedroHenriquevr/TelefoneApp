import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MostrarDadosService } from '../services/mostrar-dados.service';
import { lista } from '../core/lista';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatoPage {

  public data?: lista;

  constructor(private mostrarDadosService: MostrarDadosService, private router: Router) { }

  ngAfterViewInit() {
    const storedData = sessionStorage.getItem('data');
  if (storedData) {
    this.data = JSON.parse(storedData);
  } else {
    // se não houver dados no sessionStorage, busca-os do serviço
    this.data = this.mostrarDadosService.data;
    // armazena os dados no sessionStorage
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }
  }

  voltar(){
    this.router.navigateByUrl('/home');
    sessionStorage.removeItem('data');
  }
}
