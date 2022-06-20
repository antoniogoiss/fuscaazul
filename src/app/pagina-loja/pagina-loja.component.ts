import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Peca } from '../peca.model';
import { Loja } from '../loja.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-loja',
  templateUrl: './pagina-loja.component.html',
  styleUrls: ['./pagina-loja.component.scss'],
})
export class PaginaLojaComponent implements OnInit {

  public pecas : Array<Peca>
  public lojas : Array<Loja>
  public id : null

  constructor( private router : Router, private dadosService : DadosService) { }

  ngOnInit() { this.dadosService.getPecas().subscribe( pecas => { this.pecas = pecas})

  }


  deletaPeca(){
    return this.dadosService.deletaPeca(this.id).subscribe(() => {this.router.navigate(['/pecas'])})
  }
  


}
