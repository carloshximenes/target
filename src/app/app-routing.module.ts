import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Rotas } from './core/enums/rotas.enum';

const routes: Routes = [
  {
    path: Rotas.INICIO,
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: '**',
    redirectTo: Rotas.INICIO,
    pathMatch: 'full'    
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})

export class AppRoutingModule {}