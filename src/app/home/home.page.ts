import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { lista } from '../core/lista';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MostrarDadosService } from '../services/mostrar-dados.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  listas: lista[] = [];

  constructor(
    private mostrarDadosService: MostrarDadosService, private route: Router
  ) {}

  ngOnInit(): void {
    this.mostrarDadosService.getAll().then(lista => this.listas = lista);
  }

  showInfoModal(contact: lista) {
    this.mostrarDadosService.setData('contact', contact);
    this.route.navigateByUrl('/contato');
  }

}
