import { Injectable } from '@angular/core';
import { Loja } from './loja.model';
import { Peca } from './peca.model';
import { HttpClient } from '@angular/common/http';
import { PaginaLojaComponent } from './pagina-loja/pagina-loja.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor( private httpClient : HttpClient) { }

  baseUrl = 'http://localhost:3000'


  public listaLojas = 0

  public lojas: Array<Loja> = []




  public getPecas():Observable<Peca[]>{
    return this.httpClient.get<Peca[]>(this.baseUrl+"/pecas")
  }

  public getPeca(id : String):Observable<Peca>{
    const url = `${this.baseUrl}/pecas/${id}`
    return this.httpClient.get<Peca>(url)
  }


  public newPeca(peca:Peca):Observable<Peca>{
    return this.httpClient.post<Peca>(this.baseUrl+"/pecas", peca)
 }


  public editaPeca(id: String, peca: Peca): Observable<Peca>{
    const url = `${this.baseUrl}/pecas/${id}`
    return  this.httpClient.put<Peca>(url, peca)
  }

  public deletaPeca(id : String): Observable<Peca>{
    const url = `${this.baseUrl}/pecas/${id}`
    return this.httpClient.delete<Peca>(url)
  }


  public newLoja(loja:Loja){
    this.listaLojas += 1
    loja.cnpjLoja = String(this.listaLojas)
    this.lojas.push(loja)
  }

  
  public getLoja() {
    return this.lojas;
  }
  
}
