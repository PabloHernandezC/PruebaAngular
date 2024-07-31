import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Personaje } from '../../interface/personaje';

@Component({
  selector: 'app-detalle-modal',
  templateUrl: './detalle-modal.component.html',
  styleUrl: './detalle-modal.component.css'
})
export class DetalleModalComponent {
  constructor(
    private modal: MatDialogRef<DetalleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public datosPersonaje: Personaje,
  ){}

}
