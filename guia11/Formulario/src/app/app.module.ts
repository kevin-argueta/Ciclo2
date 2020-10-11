import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule} from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
