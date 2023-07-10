import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoIndexComponent } from './veiculo-index.component';

describe('VeiculoIndexComponent', () => {
  let component: VeiculoIndexComponent;
  let fixture: ComponentFixture<VeiculoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
