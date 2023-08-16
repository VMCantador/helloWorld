import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'cerveja',
    loadChildren: () => import('./categorias/cerveja/cerveja.module').then( m => m.CervejaPageModule)
  },
  {
    path: 'refrigerante',
    loadChildren: () => import('./categorias/refrigerante/refrigerante.module').then( m => m.RefrigerantePageModule)
  },
  {
    path: 'agua',
    loadChildren: () => import('./categorias/agua/agua.module').then( m => m.AguaPageModule)
  },
  {
    path: 'suco',
    loadChildren: () => import('./categorias/suco/suco.module').then( m => m.SucoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
