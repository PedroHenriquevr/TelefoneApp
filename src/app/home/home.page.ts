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
  public listas: lista[] = [
    {
      id: '(81) 9962-1252',
      name: 'Juan',
      image: 'https://media.istockphoto.com/id/813145828/pt/foto/serious-young-man.jpg?b=1&s=170667a&w=0&k=20&c=pudtVvuzWb_BRkj9lKTyzzpiv3kVzRXkWW8ImL8rO3A=',
      email: 'juan@gmail.com',
    },
    {
      id: '(81) 9876-5432',
      name: 'Maria',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      email: 'maria@hotmail.com',
    },
    {
      id: '(11) 1234-5678',
      name: 'Pedro',
      image: 'https://media.istockphoto.com/photos/portrait-of-handsome-man-picture-id1245419427',
      email: 'pedro@yahoo.com',
    },
    {
      id: '(21) 9999-8888',
      name: 'Juliana',
      image: 'https://media.istockphoto.com/photos/happy-woman-laughing-outdoors-picture-id1154090429',
      email: 'juliana@gmail.com',
    },
    {
      id: '(31) 5555-4444',
      name: 'Carlos',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      email: 'carlos@outlook.com',
    },
  ];

  constructor(private mostrarDadosService: MostrarDadosService , private router: Router) {}

  showInfoModal(contact: lista) {
    this.mostrarDadosService.setData('contact', contact);
    this.router.navigateByUrl('/contato');
  }
}
