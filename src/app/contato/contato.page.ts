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
export class ContatoPage implements OnInit {

  contact?: lista;

  constructor(private MostrarDadosService: MostrarDadosService, private router: Router) { }

  ngOnInit() {
  }

  irPara(rota: String){
    this.router.navigate([rota])
  }

  goToRoute(route: string) {
    this.router.navigate([`../${route}`]);
  }



}
