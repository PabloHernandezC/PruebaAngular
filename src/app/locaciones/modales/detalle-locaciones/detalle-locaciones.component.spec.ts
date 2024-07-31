import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLocacionesComponent } from './detalle-locaciones.component';

describe('DetalleLocacionesComponent', () => {
  let component: DetalleLocacionesComponent;
  let fixture: ComponentFixture<DetalleLocacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleLocacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleLocacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
