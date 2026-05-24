import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'program',
        loadComponent: () => import('./pages/program/program').then(m => m.Program)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
     {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found')
      .then(m => m.NotFound)
  }
];
