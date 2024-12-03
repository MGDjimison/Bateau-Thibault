import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tabs/tabs.component').then((m) => m.TabsComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'liste/:type',
        loadComponent: () => import('./item-list/item-list.page').then((m) => m.ItemListPage),
      },
      {
        path: 'liste/:type/:id',
        loadComponent: () => import('./item-card/item-card.page').then((m) => m.ItemCardPage),
      },
      {
        path: 'contacts',
        loadComponent: () => import('./contacts/contacts.page').then( m => m.ContactsPage)
      },
      {
        path: 'panier',
        loadComponent: () => import('./panier/panier.page').then( m => m.PanierPage)
      },
    ],
  },{
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
];
