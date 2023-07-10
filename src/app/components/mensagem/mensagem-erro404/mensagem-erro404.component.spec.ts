import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErro404Component } from './mensagem-erro404.component';

describe('MensagemErro404Component', () => {
  let component: MensagemErro404Component;
  let fixture: ComponentFixture<MensagemErro404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemErro404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemErro404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
