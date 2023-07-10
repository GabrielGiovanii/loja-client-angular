import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoCreateComponent } from './veiculo-create.component';

describe('VeiculoCreateComponent', () => {
  let component: VeiculoCreateComponent;
  let fixture: ComponentFixture<VeiculoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
