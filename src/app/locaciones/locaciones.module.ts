import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { MaterialModule } from '../material/material.module';
import { PaginaLocacionesComponent } from './pagina.locaciones/pagina.locaciones.component';
import { DetalleLocacionesComponent } from './modales/detalle-locaciones/detalle-locaciones.component';
import { LocacionesServicioService } from './servicios/locaciones-servicio.service';



@NgModule({
  declarations: [
    PaginaLocacionesComponent,
    DetalleLocacionesComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    MaterialModule,
  ],providers:[
    LocacionesServicioService
  ]
})
export class LocacionesModule { }
