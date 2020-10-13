import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser';
import { Empledo } from '../empledo';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  registro=[];
  sueldos:any;
  nombre:string;
  base:number;
  neto:number;
  isss:number;
  renta:number;
  afp:number;
  constructor() { }
  ngOnInit(){
    this.nombre='';
    this.base=0;
    this.neto=0;
    this.isss=0;
    this.renta=0;
    this.afp=0;
  }
  ingresar(){
    this.isss=(this.base*0.074);
    this.renta=(this.base*0.11);
    this.afp=(this.base*0.051);
    this.neto=this.base-(this.isss+this.renta+this.afp);
    this.sueldos={"nombre":this.nombre,"base":this.base,"neto":this.neto,"isss":this.isss,"renta":this.renta,"afp":this.afp};
    this.registro.push(this.sueldos);
  }
}
