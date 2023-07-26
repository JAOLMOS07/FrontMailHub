import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { BandejaSalidaComponent } from './bandeja-salida/bandeja-salida.component';
import { BandejaArchivoComponent } from './bandeja-archivo/bandeja-archivo.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    BandejaEntradaComponent,
    BandejaSalidaComponent,
    BandejaArchivoComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MailRoutingModule
  ]
})
export class MailModule { }
