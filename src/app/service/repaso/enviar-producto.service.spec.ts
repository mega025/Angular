import { TestBed } from '@angular/core/testing';

import { EnviarProductoService } from './enviar-producto.service';

describe('EnviarProductoService', () => {
  let service: EnviarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
