import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser';

@Component({
  selector: 'app-gaso',
  templateUrl: './gaso.component.html',
  styleUrls: ['./gaso.component.css']
})
export class GasoComponent implements OnInit {
  tipo;
  opcionSeleccionado: string ;
  galones:number;
  resultado:string;
  constructor() { }

  ngOnInit(){
    this.tipo = ["Especial","Regular","Diesel"];
    this.opcionSeleccionado="Selecciona";
    this.galones=0;
    this.resultado='';
  }
  capturar() {
    switch(this.opcionSeleccionado){
    case'Especial':
    this.resultado=(this.galones*4.25).toFixed(2);
    break;
    case'Regular':
    this.resultado=(this.galones*4.05).toFixed(2);
    break;
    case'Diesel':
    this.resultado=(this.galones*3.96).toFixed(2);
    break;
    }
  }
}
