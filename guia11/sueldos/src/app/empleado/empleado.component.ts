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
  neto:String;
  isss:String;
  renta:String;
  afp:String;
  constructor() { }
  ngOnInit(){
    this.nombre='';
    this.base=0;
    this.neto='';
    this.isss='';
    this.renta='';
    this.afp='';
  }
  ingresar(){
    this.isss=(this.base*0.074).toFixed(2);
    this.renta=(this.base*0.11).toFixed(2);
    this.afp=(this.base*0.051).toFixed(2);
    this.neto=(this.base-((this.base*0.074)+(this.base*0.11)+(this.base*0.051))).toFixed(2);
    this.sueldos={"nombre":this.nombre,"base":this.base,"neto":this.neto,"isss":this.isss,"renta":this.renta,"afp":this.afp};
    this.registro.push(this.sueldos);
  }
}
