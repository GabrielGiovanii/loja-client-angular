import { TestBed } from '@angular/core/testing';

import { ModalMensagemService } from './modal-mensagem.service';

describe('ModalMensagemService', () => {
  let service: ModalMensagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalMensagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
