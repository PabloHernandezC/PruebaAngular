import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLocacionesComponent } from './pagina.locaciones.component';

describe('PaginaLocacionesComponent', () => {
  let component: PaginaLocacionesComponent;
  let fixture: ComponentFixture<PaginaLocacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaLocacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaLocacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
