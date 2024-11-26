import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'panier',
    loadComponent: () => import('./panier/panier.page').then( m => m.PanierPage)
  },
  {
    path: 'detail-produit',
    loadComponent: () => import('./detail-produit/detail-produit.page').then( m => m.DetailProduitPage)
  },

];
