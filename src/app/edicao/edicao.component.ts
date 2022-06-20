import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { DadosService } from '../dados.service';
import { Peca } from '../peca.model';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
})
export class EdicaoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private dadosService: DadosService) {}

  public id: String
  public peca : Peca 

ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dadosService.getPeca(this.id).subscribe( 
      peca => 
      { this.peca = peca
      })
    }


  onSubmit(form:any){
    this.peca.descricao = form.value.descricao
    this.peca.tipo = form.value.tipo
    this.peca.preco = form.value.preco
    this.peca.qtdAtual = form.value.qtdAtual

    this.dadosService.editaPeca(this.id, this.peca).subscribe(() => {
      this.router.navigate(['/pecas'])})
    }
  

  

}
