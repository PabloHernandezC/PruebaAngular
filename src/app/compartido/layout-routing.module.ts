import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { PaginaPersonajesComponent } from '../personaje/pagina.personajes/pagina.personajes.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginaLocacionesComponent } from '../locaciones/pagina.locaciones/pagina.locaciones.component';

const routes: Routes = [
  {path:'',
    component: LayoutComponent,
    children:[
      {
        path:'personaje',
        component: PaginaPersonajesComponent, 
        pathMatch:'full'
      },
      {
        path:'locaciones',
        component: PaginaLocacionesComponent, 
        pathMatch:'full'
      },
      {
        path:'**',
        redirectTo: 'personaje',
        pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class LayoutRoutingModule { }
