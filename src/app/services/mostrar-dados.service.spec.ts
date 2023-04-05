import { TestBed } from '@angular/core/testing';

import { MostrarDadosService } from './mostrar-dados.service';

describe('MostrarDadosService', () => {
  let service: MostrarDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
