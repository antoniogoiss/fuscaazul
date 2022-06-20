import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DadosService } from './dados.service';
import { FormComponent } from './loja/form/form.component';
import { PaginaLojaComponent } from './pagina-loja/pagina-loja.component';
import { NovaPecaComponent } from './nova-peca/nova-peca.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, FormComponent, PaginaLojaComponent, NovaPecaComponent, EdicaoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
