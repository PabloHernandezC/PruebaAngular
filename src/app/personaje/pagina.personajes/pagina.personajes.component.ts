import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje';
import { PersonajeService } from '../servicios/personaje.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalleModalComponent } from '../modales/detalle-modal/detalle-modal.component';

@Component({
  selector: 'app-pagina.personajes',
  templateUrl: './pagina.personajes.component.html',
  styleUrl: './pagina.personajes.component.css'
})
export class PaginaPersonajesComponent implements OnInit {

  personajes: Personaje[] = [];
  params = {} as any;
  totalPaginas = 0;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;


  constructor(
    private personajeService: PersonajeService,
    private dialog: MatDialog
  ){
  }

  ngOnInit(): void {
    this.params.page = 0;
    this.cargarPersonajes();
  }

  cargarPersonajes(event?: any){
    this.personajes = [];

    if(event != undefined){
      this.params.page = event.pageIndex + 1;
    }else {
      this.params.page = 1;
    }
    
    this.personajeService.listaCaracteres(this.params).subscribe({
      next: (data: any) => {
        this.totalPaginas = data.info.count;
        this.personajes.push(...data.results)
        console.log(this.personajes)
      },
      error: (error) => {

      }
    })
  }

  BuscarPersonajes(){
    this.params.page = 1;
    
    this.personajeService.listaCaracteres(this.params).subscribe({
      next: (data: any) => {
        //this.totalPaginas = data.info.count;
        this.personajes = data.results;
        console.log(this.personajes)
      },
      error: (error) => {

      }
    })
  }

  detallePersonaje(personaje:Personaje){
    this.dialog.open(DetalleModalComponent, {disableClose:true, width: '450px',data:personaje})
  }
}
