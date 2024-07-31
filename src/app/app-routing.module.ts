import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './compartido/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () => import('./compartido/compartido.module').then(m => m.CompartidoModule)
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
