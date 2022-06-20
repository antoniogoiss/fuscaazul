import { Component, OnInit } from '@angular/core';
import { Loja } from 'src/app/loja.model';
import { DadosService } from 'src/app/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public loja : Loja = null

  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit() {}

  onSubmit(form:any){
    let email = form.value.email
    let senha = form.value.senha
    let nomeGerente = form.value.nomeGerente
    let nomeLoja = form.value.nomeLoja
    let cnpjLoja = form.value.cnpjLoja
    let telefone = form.value.telefone
    let endereco = form.value.endereco
    let coordenadas = form.value.coordenadas

    this.loja = new Loja(email, senha, nomeGerente, nomeLoja, cnpjLoja, telefone, endereco, coordenadas)
    this.dadosService.newLoja(this.loja)
    this.router.navigate(['/pecas'])
  } 

}
