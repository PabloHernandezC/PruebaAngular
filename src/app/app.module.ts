import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  } from './personaje/personaje.module';
import { CompartidoModule } from './compartido/compartido.module';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import {} from './locaciones/locaciones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartidoModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
