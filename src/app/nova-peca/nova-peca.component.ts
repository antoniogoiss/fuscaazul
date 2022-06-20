import { Component, OnInit } from '@angular/core';
import { Peca } from '../peca.model';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-peca',
  templateUrl: './nova-peca.component.html',
  styleUrls: ['./nova-peca.component.scss'],
})
export class NovaPecaComponent implements OnInit {

  public peca : Peca = null

  constructor(private dadosService : DadosService, private router : Router) { }

  ngOnInit() {}

  onSubmit(form:any){
    let descricao = form.value.descricao
    let tipo = form.value.tipo
    let preco = form.value.preco
    let qtdAtual = form.value.qtdAtual
    this.peca = new Peca('', descricao, tipo, preco, qtdAtual)
    this.dadosService.newPeca(this.peca).subscribe(() => {
      this.router.navigate(['/pecas'])
    })
    
  }
}
