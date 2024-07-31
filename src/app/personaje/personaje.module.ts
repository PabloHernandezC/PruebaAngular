import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { PersonajeService } from './servicios/personaje.service';
import { PaginaPersonajesComponent } from './pagina.personajes/pagina.personajes.component';
import { MaterialModule } from '../material/material.module';
import { DetalleModalComponent } from './modales/detalle-modal/detalle-modal.component';


@NgModule({
  declarations: [
    PaginaPersonajesComponent,
    DetalleModalComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    MaterialModule
  ],
  providers:[
    PersonajeService
  ]
})
export class PersonajeModule { }
