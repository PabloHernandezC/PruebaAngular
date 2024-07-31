import { Component, OnInit, ViewChild } from '@angular/core';
import { LocacionesServicioService } from '../servicios/locaciones-servicio.service';
import {Location } from '../interface/data.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pagina.locaciones',
  templateUrl: './pagina.locaciones.component.html',
  styleUrl: './pagina.locaciones.component.css'
})
export class PaginaLocacionesComponent implements OnInit{

  locaciones$ = this.locacionService.locations$;
  locations: Location[] = [];
  dataSource$: Observable<Location[]>;
  dataSource = new MatTableDataSource<Location>();
  displayedColumns: string[] = ['id', 'name', 'type', 'dimension'];

  constructor(
    private locacionService: LocacionesServicioService
  ){
      this.dataSource$ = this.locaciones$
  }

  ngOnInit(): void {
    this.locacionService.consultar().subscribe(locations => {
      if (locations) {
        this.dataSource.data = locations;
      }
    });
  }

}
