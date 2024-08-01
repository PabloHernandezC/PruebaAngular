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
        path:'',
        redirectTo: 'personaje', 
        pathMatch:'full',
      },
      {
        path:'personaje',
        component: PaginaPersonajesComponent, 
      },
      {
        path:'locaciones',
        component: PaginaLocacionesComponent, 
      }
    ]
  },
  {
    path:'**',
    redirectTo: '',
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
