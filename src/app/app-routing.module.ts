import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EdicaoComponent } from './edicao/edicao.component';
import { FormComponent } from './loja/form/form.component';
import { NovaPecaComponent } from './nova-peca/nova-peca.component';
import { PaginaLojaComponent } from './pagina-loja/pagina-loja.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loja',
    component: FormComponent
  },
  {
    path: 'pecas',
    component: PaginaLojaComponent
  },
  {
    path : 'nova-peca',
    component : NovaPecaComponent
  },
  {
    path: 'peca/:id',
    component: EdicaoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
