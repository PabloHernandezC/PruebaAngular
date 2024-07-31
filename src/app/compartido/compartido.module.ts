import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { GraphQLModule } from '../graphql.module';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutComponent,
    GraphQLModule
  ]
})
export class CompartidoModule { }
