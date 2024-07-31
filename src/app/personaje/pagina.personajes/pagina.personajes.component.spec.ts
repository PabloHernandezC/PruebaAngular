import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPersonajesComponent } from './pagina.personajes.component';

describe('PaginaPersonajesComponent', () => {
  let component: PaginaPersonajesComponent;
  let fixture: ComponentFixture<PaginaPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaPersonajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
